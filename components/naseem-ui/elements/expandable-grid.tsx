"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  Zap,
  Shield,
  BarChart2,
  Puzzle,
  Bell,
  Globe,
  Lock,
  Sparkles,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Deploy",
    description:
      "Push your changes live in seconds with zero-downtime deployments and automatic rollback on failure.",
  },
  {
    icon: Shield,
    title: "SOC2 Compliant",
    description:
      "Enterprise-grade security baked in from day one. Your data stays yours, always.",
  },
  {
    icon: BarChart2,
    title: "Live Analytics",
    description:
      "Real-time dashboards that surface the metrics that matter, with no setup required.",
  },
  {
    icon: Puzzle,
    title: "Any Stack",
    description:
      "Native integrations with 200+ tools. If we don't have it, our API makes it trivial to build.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Context-aware notifications that learn your patterns and only interrupt when it actually matters.",
  },
  {
    icon: Globe,
    title: "Global Edge",
    description:
      "Served from 38 regions worldwide. Sub-50ms response times, everywhere on the planet.",
  },
  {
    icon: Lock,
    title: "Role Access",
    description:
      "Granular permissions down to the field level. Give your team exactly the access they need.",
  },
  {
    icon: Sparkles,
    title: "AI Copilot",
    description:
      "An assistant that understands your workflow and surfaces the right action at the right moment.",
  },
  {
    icon: RefreshCw,
    title: "Auto Sync",
    description:
      "Keep every device and integration in sync automatically. No manual exports, ever again.",
  },
];

export default function ExpandableGridCells() {
  const [open, setOpen] = useState<null | number>(null);
  const [dimensions, setDimensions] = useState({ size: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 768;
      const maxSize = window.innerWidth - 32;
      const size = isMobile ? Math.min(maxSize, 340) : 540;
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

  const RADIUS_BASE = isMobile ? 8 : 20;
  const RADIUS_EXPANDED = isMobile ? 14 : 28;

  if (dimensions.size === 0) return null;

  const getCol = (i: number) => i % COLS;
  const getRow = (i: number) => Math.floor(i / COLS);

  const getCellWidth = (i: number) => {
    if (open === null) return BASE;
    return getCol(i) === getCol(open) ? EXPANDED : COLLAPSED;
  };

  const getCellHeight = (i: number) => {
    if (open === null) return BASE;
    return getRow(i) === getRow(open) ? EXPANDED : COLLAPSED;
  };

  const isColExpanded = (i: number) =>
    open !== null && getCol(i) === getCol(open);
  const isRowExpanded = (i: number) =>
    open !== null && getRow(i) === getRow(open);
  const isFullyExpanded = (i: number) => isColExpanded(i) && isRowExpanded(i);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // background: "#f5f5f3",
        fontFamily: "'DM Mono', monospace",
      }}
    >
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style> */}

      <p
        style={{
          color: "#aaa",
          fontSize: 11,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          marginBottom: 28,
        }}
      >
        Everything you need
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, auto)`,
          gridTemplateRows: `repeat(${ROWS}, auto)`,
          gap: GAP,
        }}
      >
        {features.map((feature, i) => {
          const Icon = feature.icon;
          const w = getCellWidth(i);
          const h = getCellHeight(i);
          const colExp = isColExpanded(i);
          const rowExp = isRowExpanded(i);
          const fullExp = isFullyExpanded(i);
          const isOpen = open === i;

          // col-only = column expanded = TALL cell = vertical text
          // row-only = row expanded = WIDE cell = horizontal text
          const state =
            open === null
              ? "collapsed"
              : fullExp
                ? "full"
                : colExp
                  ? "col-only" // tall
                  : rowExp
                    ? "row-only" // wide
                    : "collapsed";

          return (
            <motion.div
              key={i}
              onClick={() => setOpen(isOpen ? null : i)}
              animate={{
                width: w,
                height: h,
                borderRadius: fullExp ? RADIUS_EXPANDED : RADIUS_BASE,
                background: fullExp
                  ? "#1a1a1a"
                  : colExp || rowExp
                    ? "#ebebeb"
                    : "#e4e4e2",
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              style={{
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* COLLAPSED: icon centered */}
              <motion.div
                animate={{
                  opacity: state === "collapsed" ? 1 : 0,
                  scale: state === "collapsed" ? 1 : 0.6,
                  filter: state === "collapsed" ? "blur(0px)" : "blur(4px)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={30} strokeWidth={1.5} color="#888" />
              </motion.div>

              {/* COL-ONLY: tall + narrow → icon + VERTICAL text */}
              <motion.div
                animate={{
                  opacity: state === "col-only" ? 1 : 0,
                  filter: state === "col-only" ? "blur(0px)" : "blur(4px)",
                }}
                transition={{
                  duration: 0.35,
                  delay: state === "col-only" ? 0.15 : 0,
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  pointerEvents: "none",
                }}
              >
                <Icon size={30} strokeWidth={1.5} color="#666" />
                {/* <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#666",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(-90deg)",
                    whiteSpace: "nowrap",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {feature.title}
                </span> */}
              </motion.div>

              {/* ROW-ONLY: wide + short → icon + HORIZONTAL text */}
              <motion.div
                animate={{
                  opacity: state === "row-only" ? 1 : 0,
                  filter: state === "row-only" ? "blur(0px)" : "blur(4px)",
                  x: state === "row-only" ? 0 : -8,
                }}
                transition={{
                  duration: 0.35,
                  delay: state === "row-only" ? 0.15 : 0,
                  type: "spring",
                  bounce: 0.15,
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  pointerEvents: "none",
                  paddingInline: 20,
                }}
              >
                <Icon
                  size={30}
                  strokeWidth={1.5}
                  color="#666"
                  style={{ flexShrink: 0 }}
                />
                {/* <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#666",
                    whiteSpace: "nowrap",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {feature.title}
                </span> */}
              </motion.div>

              {/* FULLY EXPANDED: icon + title + description */}
              <motion.div
                animate={{
                  opacity: state === "full" ? 1 : 0,
                  y: state === "full" ? 0 : 16,
                  filter: state === "full" ? "blur(0px)" : "blur(6px)",
                }}
                transition={{
                  duration: 0.45,
                  delay: state === "full" ? 0.2 : 0,
                  type: "spring",
                  bounce: 0.15,
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 26,
                  pointerEvents: "none",
                  gap: 10,
                }}
              >
                <Icon size={30} strokeWidth={1.4} color="#fff" />
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                  }}
                >
                  {feature.title}
                </p>
                <p
                  style={{
                    // fontSize: 13,
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.6,
                    fontWeight: 300,
                    width: EXPANDED - 26 * 2,
                  }}
                  className="text-[8px] md:text-[13px]"
                >
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
