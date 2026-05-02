"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    label: "Alpine Peak",
  },
  {
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    label: "Valley Mist",
  },
  {
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    label: "Forest Ridge",
  },
  {
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
    label: "Autumn Canopy",
  },
  {
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    label: "River Falls",
  },
  {
    url: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    label: "Desert Dunes",
  },
  {
    url: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80",
    label: "Coastal Cliffs",
  },
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    label: "Golden Meadow",
  },
  {
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
    label: "Lake Reflection",
  },
];

export default function ImageGrid() {
  const [open, setOpen] = useState<null | number>(null);
  const [dimensions, setDimensions] = useState({ size: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 768;
      const maxSize = window.innerWidth - 32;
      const size = isMobile ? Math.min(maxSize, 340) : 520;
      setDimensions({ size });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const isMobile = window.innerWidth < 768;
  const GAP = isMobile ? 4 : 8;
  const TOTAL_SIZE = dimensions.size;
  const COLS = 3;
  const ROWS = 3;

  const BASE = (TOTAL_SIZE - GAP * (COLS - 1)) / COLS;
  const EXPANDED = TOTAL_SIZE * 0.58;
  const COLLAPSED = (TOTAL_SIZE - EXPANDED - GAP * (COLS - 1)) / (COLS - 1);

  const RADIUS_BASE = isMobile ? 8 : 16;
  const RADIUS_EXPANDED = isMobile ? 14 : 28;

  if (dimensions.size === 0) return null;

  const getCol = (i: number) => i % COLS;
  const getRow = (i: number) => Math.floor(i / COLS);

  const getCellWidth = (i: number) => {
    if (open === null) return BASE;
    const openCol = getCol(open);
    const thisCol = getCol(i);
    if (thisCol === openCol) return EXPANDED;
    return COLLAPSED;
  };

  const getCellHeight = (i: number) => {
    if (open === null) return BASE;
    const openRow = getRow(open);
    const thisRow = getRow(i);
    if (thisRow === openRow) return EXPANDED;
    return COLLAPSED;
  };

  const isOpen = (i: number) => open === i;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // background: "#0c0c0c",
        fontFamily: "'DM Mono', monospace",
      }}
    >
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style> */}

      <p
        style={{
          color: "#444",
          fontSize: 11,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        Click to expand
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, auto)`,
          gridTemplateRows: `repeat(${ROWS}, auto)`,
          gap: GAP,
        }}
      >
        {images.map((img, i) => {
          const expanded = isOpen(i);
          const w = getCellWidth(i);
          const h = getCellHeight(i);

          return (
            <motion.div
              key={i}
              onClick={() => setOpen(expanded ? null : i)}
              animate={{
                width: w,
                height: h,
                borderRadius: expanded ? RADIUS_EXPANDED : RADIUS_BASE,
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              style={{
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              {/* Image — always full size, clips via overflow */}
              <motion.div
                animate={{ scale: expanded ? 1 : 1.06 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: EXPANDED,
                  height: EXPANDED,
                }}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                />
              </motion.div>

              {/* Overlay */}
              <motion.div
                animate={{ opacity: expanded ? 0.15 : 0.5 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, #000 0%, transparent 65%)",
                  pointerEvents: "none",
                }}
              />

              {/* Label */}
              <motion.div
                animate={{
                  opacity: expanded ? 1 : 0,
                  y: expanded ? 0 : 10,
                  filter: expanded ? "blur(0px)" : "blur(5px)",
                }}
                transition={{
                  duration: 0.4,
                  delay: expanded ? 0.18 : 0,
                  type: "spring",
                  bounce: 0.15,
                }}
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  color: "#fff",
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                {img.label}
              </motion.div>

              {/* Index */}
              <motion.div
                animate={{ opacity: expanded ? 0.45 : 0 }}
                transition={{ duration: 0.3, delay: expanded ? 0.22 : 0 }}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  color: "#fff",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  pointerEvents: "none",
                }}
              >
                0{i + 1} / 0{images.length}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
