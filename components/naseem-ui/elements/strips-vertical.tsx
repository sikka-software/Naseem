"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    label: "Glass Tower",
  },
  {
    url: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=800&q=80",
    label: "Brutalist Block",
  },
  {
    url: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=800&q=80",
    label: "Steel & Sky",
  },
  {
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    label: "Urban Grid",
  },
  {
    url: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80",
    label: "Arcade Arches",
  },
  {
    url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    label: "Facade Lines",
  },
];

export default function VerticalImageStrips() {
  const [open, setOpen] = useState<null | number>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 768;
      const maxWidth = window.innerWidth - 32;
      const size = isMobile ? Math.min(maxWidth, 360) : 420;
      setDimensions({ width: size, height: size });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const isMobile = window.innerWidth < 768;
  const STRIP_WIDTH = isMobile ? 40 : 60;
  const EXPANDED_WIDTH =
    dimensions.width - (images.length - 1) * (isMobile ? 4 : 10);
  const HEIGHT = dimensions.height;
  const GAP_BETWEEN_STRIPS = isMobile ? 4 : 10;
  const OUTTER_RADIUS = isMobile ? 20 : 40;
  const RADIUS_BETWEEN_STRIPS = isMobile ? 20 : 40;

  if (dimensions.width === 0) return null;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Mono', monospace",
      }}
    >
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style> */}

      <p
        style={{
          color: "#444",
          fontSize: 11,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          marginBottom: 32,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        Click to expand
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: HEIGHT,
          borderRadius: OUTTER_RADIUS,
          overflow: "hidden",
          gap: GAP_BETWEEN_STRIPS,
        }}
      >
        {images.map((img, i) => {
          const isOpen = open === i;

          return (
            <motion.div
              key={i}
              onClick={() => setOpen(isOpen ? null : i)}
              animate={{
                width: isOpen ? EXPANDED_WIDTH : STRIP_WIDTH,
                borderRadius: RADIUS_BETWEEN_STRIPS
                  ? isOpen
                    ? RADIUS_BETWEEN_STRIPS
                    : RADIUS_BETWEEN_STRIPS / 2
                  : 0,
              }}
              transition={{
                duration: 0.6,
                type: "spring",
                bounce: 0.25,
              }}
              style={{
                height: HEIGHT,
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              {/* Image */}
              <motion.div
                animate={{
                  scale: isOpen ? 1 : 1.05,
                }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  inset: 0,
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

              {/* Dark overlay — stronger on strips */}
              <motion.div
                animate={{ opacity: isOpen ? 0.15 : 0.55 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, #000 0%, transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              {/* Label — slides up and blurs in when open */}
              <motion.div
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 12,
                  filter: isOpen ? "blur(0px)" : "blur(6px)",
                }}
                transition={{
                  duration: 0.5,
                  delay: isOpen ? 0.15 : 0,
                  type: "spring",
                  bounce: 0.2,
                }}
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  color: "#fff",
                  fontSize: 13,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "'DM Mono', monospace",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                {img.label}
              </motion.div>

              {/* Index number */}
              <motion.div
                animate={{ opacity: isOpen ? 0.5 : 0 }}
                transition={{ duration: 0.3, delay: isOpen ? 0.2 : 0 }}
                style={{
                  position: "absolute",
                  top: 18,
                  right: 18,
                  color: "#fff",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  fontFamily: "'DM Mono', monospace",
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
