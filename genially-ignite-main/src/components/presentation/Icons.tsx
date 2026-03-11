import React from "react";
import { motion } from "framer-motion";

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
  animate?: boolean;
  delay?: number;
}

const defaults = { size: 24, color: "currentColor" };

// Helper for consistent SVG wrapper
const Svg = ({ size = 24, className, children, viewBox = "0 0 24 24" }: IconProps & { children: React.ReactNode; viewBox?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

// Animated icon wrapper - adds subtle entrance animation
export const AnimatedIcon = ({ 
  children, 
  delay = 0,
  className 
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ 
      delay,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    whileHover={{ 
      scale: 1.08,
      rotate: 3,
      transition: { duration: 0.2 }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Staggered container for multiple icons
export const AnimatedIconGroup = ({ 
  children, 
  staggerDelay = 0.1,
  className 
}: { 
  children: React.ReactNode; 
  staggerDelay?: number;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Individual animated icon item for use in groups
export const AnimatedIconItem = ({ 
  children,
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, scale: 0.8, y: 10 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    }}
    whileHover={{ 
      scale: 1.1,
      transition: { duration: 0.2 }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// ── Slide 02: Target / Focus ──
export const IconTarget = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </Svg>
);

// ── Slide 03: Active Learning (raised hand with pulse) ──
export const IconActiveLearning = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M12 3v4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8.5 5l2 3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M15.5 5l-2 3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9.5 13.5l2 2.5 3-4" stroke="currentColor" strokeWidth="1.8" />
  </Svg>
);

// ── Curiosity / Discovery (magnifier with sparkle) ──
export const IconDiscovery = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M15 15l5 5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10.5 7.5v2m0 2v-2m-2 0h2m2 0h-2" stroke="currentColor" strokeWidth="1.4" />
  </Svg>
);

// ── Feedback / Instant response (chat with check) ──
export const IconFeedback = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="3" y="4" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 20l4-3h-4z" fill="currentColor" opacity="0.3" />
    <path d="M8 20l4-3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 10.5l2 2 4-4" stroke="currentColor" strokeWidth="1.8" />
  </Svg>
);

// ── Experiential / Immersive (layered shapes) ──
export const IconExperiential = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="4" y="7" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <rect x="8" y="3" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" opacity="0.5" />
    <circle cx="10" cy="13" r="2" stroke="currentColor" strokeWidth="1.5" />
  </Svg>
);

// ── Engagement / Participation (connected nodes) ──
export const IconEngagement = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 7.5l2.5 8.5M16 7.5l-2.5 8.5M8.5 6h7" stroke="currentColor" strokeWidth="1.4" />
  </Svg>
);

// ── Presentation / Slides ──
export const IconPresentation = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="3" y="4" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 20h8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 17v3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
  </Svg>
);

// ── Interactive Image (image with tap) ──
export const IconInteractiveImage = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="8.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 15l5-4 3 3 4-5 6 7" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="17" r="3.5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17 15.5v3M15.5 17h3" stroke="currentColor" strokeWidth="1.3" />
  </Svg>
);

// ── Gamification / Puzzle piece ──
export const IconGamePuzzle = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M6 4h4a0 0 0 0 1 0 0c0 1.5 1.5 2.5 3 2.5S16 5.5 16 4h2a2 2 0 0 1 2 2v4c-1.5 0-2.5 1.5-2.5 3s1 3 2.5 3v2a2 2 0 0 1-2 2h-4c0-1.5-1.5-2.5-3-2.5S8 18.5 8 20H6a2 2 0 0 1-2-2v-2c1.5 0 2.5-1.5 2.5-3S5.5 10 4 10V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.8" />
  </Svg>
);

// ── Screen / Monitor (workspace) ──
export const IconScreen = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 20h6M12 17v3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </Svg>
);

// ── Slide list / Stacked cards ──
export const IconSlideList = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="5" y="2" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" opacity="0.5" />
    <rect x="7" y="8" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" opacity="0.3" />
  </Svg>
);

// ── Toolbar / Settings gear with sliders ──
export const IconToolbar = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M4 8h16M4 14h16M4 20h16" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="9" cy="8" r="2" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="15" cy="14" r="2" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8" cy="20" r="2" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
  </Svg>
);

// ── Text / Typography (Aa) ──
export const IconText = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M5 18L10 6h4l5 12" stroke="currentColor" strokeWidth="1.8" />
    <path d="M7 14h10" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="19" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </Svg>
);

// ── Image upload / Photo ──
export const IconImage = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="8.5" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 16l5-4 3 2.5 4-4.5 6 6" stroke="currentColor" strokeWidth="1.5" />
  </Svg>
);

// ── Tooltip / Speech bubble small ──
export const IconTooltip = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="4" y="4" width="16" height="11" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 15l2 4 2-4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 8h8M8 11h5" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
  </Svg>
);

// ── Window / Panel ──
export const IconWindow = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="2" y="3" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M2 8h20" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="5.5" cy="5.5" r="0.8" fill="currentColor" />
    <circle cx="8" cy="5.5" r="0.8" fill="currentColor" />
    <circle cx="10.5" cy="5.5" r="0.8" fill="currentColor" />
  </Svg>
);

// ── Navigate / Go to page (arrow in frame) ──
export const IconNavigate = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 12h6M13 9l3 3-3 3" stroke="currentColor" strokeWidth="1.8" />
  </Svg>
);

// ── Fade animation (gradient circles) ──
export const IconFade = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="8" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" opacity="0.25" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" opacity="0.5" />
    <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" opacity="1" />
  </Svg>
);

// ── Zoom animation (expanding square) ──
export const IconZoom = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4" />
    <path d="M3 3l3 3M21 3l-3 3M3 21l3-3M21 21l-3-3" stroke="currentColor" strokeWidth="1.3" opacity="0.4" />
  </Svg>
);

// ── Bounce animation (spring) ──
export const IconBounce = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 9v3M8 15h8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 12l-2 3M14 12l2 3" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M9 18l3-2 3 2" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
  </Svg>
);

// ── Lesson opener / Spark ──
export const IconSpark = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
  </Svg>
);

// ── Clipboard / Review ──
export const IconClipboard = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="5" y="4" width="14" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 2h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V2z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 10h6M9 13h4M9 16h5" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
  </Svg>
);

// ── Self-learning / Solo path ──
export const IconSoloPath = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="12" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 10.5v5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 20c0-3 2-4.5 4-4.5s4 1.5 4 4.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M15 7l3-3M17 7h-2v2" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
  </Svg>
);

// ── Group work (three overlapping circles) ──
export const IconGroup = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" opacity="0.4" />
    <path d="M4 19c0-3 2-4 4-4M16 15c2 0 4 1 4 4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 15.5c1.5-0.5 3.5-0.5 6 0" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </Svg>
);

// ── Tap / Click point ──
export const IconTap = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="10" r="2" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 16v5M10 19l2 2 2-2" stroke="currentColor" strokeWidth="1.5" />
  </Svg>
);

// ── Collaboration / Handshake (abstract) ──
export const IconCollaboration = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M4 12c2-4 4-5 6-3s4 1 6-3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 16c2-4 4-5 6-3s4 1 6-3" stroke="currentColor" strokeWidth="1.8" opacity="0.4" />
    <circle cx="4" cy="12" r="1.5" fill="currentColor" opacity="0.3" />
    <circle cx="20" cy="6" r="1.5" fill="currentColor" opacity="0.3" />
  </Svg>
);

// ── Critical thinking / Abstract mind ──
export const IconCriticalThink = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="12" cy="10" r="7" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 9c0-1.7 1.3-3 3-3s3 1.3 3 3-1.5 2-3 2v2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="15" r="0.8" fill="currentColor" />
    <path d="M10 20h4" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </Svg>
);

// ── Playful learning / Dice ──
export const IconPlayful = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" transform="rotate(5 12 12)" />
    <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
    <circle cx="15.5" cy="8.5" r="1" fill="currentColor" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <circle cx="8.5" cy="15.5" r="1" fill="currentColor" />
    <circle cx="15.5" cy="15.5" r="1" fill="currentColor" />
  </Svg>
);

// ── Edit / Pencil ──
export const IconEdit = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M16.5 3.5l4 4L8 20H4v-4L16.5 3.5z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M14 6l4 4" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
  </Svg>
);

// ── Hint / Light direction (not bulb) ──
export const IconHint = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M12 3l2 6h5l-4 3.5 1.5 5.5L12 15l-4.5 3 1.5-5.5L5 9h5l2-6z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" opacity="0.1" />
  </Svg>
);

// ── Focus / Single idea (one dot in frame) ──
export const IconFocus = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.8" />
  </Svg>
);

// ── Short text / Trim ──
export const IconTrim = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M6 8h12M6 12h8M6 16h5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M18 14l-2 3 2 3" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </Svg>
);

// ── Quick question / bubble with ? ──
export const IconQuestion = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="12" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 9c0-1.1.9-2 2-2s2 .9 2 2c0 1.3-2 2-2 3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="15" r="0.8" fill="currentColor" />
  </Svg>
);

// ── Timeline / History ──
export const IconTimeline = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M4 4v16" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="4" cy="6" r="1.5" fill="currentColor" opacity="0.3" />
    <circle cx="4" cy="12" r="1.5" fill="currentColor" opacity="0.3" />
    <circle cx="4" cy="18" r="1.5" fill="currentColor" opacity="0.3" />
    <path d="M8 6h10M8 12h8M8 18h6" stroke="currentColor" strokeWidth="1.5" />
  </Svg>
);

// ── Balance / Justice ──
export const IconBalance = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" />
    <path d="M5 7l7-2 7 2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 14l2-7 2 7a3 3 0 0 1-4 0z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17 14l2-7 2 7a3 3 0 0 1-4 0z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 21h6" stroke="currentColor" strokeWidth="1.5" />
  </Svg>
);

// ── Characters / Masks ──
export const IconMasks = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="9" cy="10" r="6" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="15" cy="10" r="6" stroke="currentColor" strokeWidth="1.8" opacity="0.4" />
    <path d="M7 12c.5 1 1.5 2 2 2s1.5-1 2-2" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="7.5" cy="9" r="0.7" fill="currentColor" />
    <circle cx="10.5" cy="9" r="0.7" fill="currentColor" />
  </Svg>
);

// ── Desert / Journey ──
export const IconJourney = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M3 18c3-6 6-12 9-12s6 6 9 12" stroke="currentColor" strokeWidth="1.8" opacity="0.3" />
    <path d="M2 20h20" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 4l1 3h3l-2.5 2 1 3L12 10l-2.5 2 1-3L8 7h3l1-3z" stroke="currentColor" strokeWidth="1.3" fill="currentColor" opacity="0.15" />
  </Svg>
);

// ── Numbers / Hash grid ──
export const IconNumbers = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M8 4v16M16 4v16M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.8" />
  </Svg>
);

// ── Lab / Flask ──
export const IconLab = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M7 16h10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
  </Svg>
);

// ── Letters / ABC ──
export const IconLetters = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M3 16l3-8 3 8M4.5 13h3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M13 8v8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M13 8c2 0 3.5 1 3.5 2.5S15 13 13 13c2 0 3.5 1 3.5 2.5S15 18 13 16" stroke="currentColor" strokeWidth="1.5" />
  </Svg>
);

// ── Warning / Attention triangle ──
export const IconWarning = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M12 4L3 20h18L12 4z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" opacity="0.07" />
    <path d="M12 10v4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="17" r="0.8" fill="currentColor" />
  </Svg>
);

// ── Share / Send ──
export const IconShare = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M4 12l16-8-5 8 5 8-16-8z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" opacity="0.07" />
    <path d="M4 12h11" stroke="currentColor" strokeWidth="1.5" />
  </Svg>
);

// ── Checkmark / Done ──
export const IconCheck = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2" />
  </Svg>
);

// ── Timer / Clock ──
export const IconTimer = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 9v4l3 2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 3h4" stroke="currentColor" strokeWidth="1.8" />
  </Svg>
);

// ── Sparkle / Creativity ──
export const IconSparkle = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" opacity="0.1" />
    <path d="M18 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" stroke="currentColor" strokeWidth="1.3" fill="currentColor" opacity="0.15" />
  </Svg>
);

// ── Door / Exit ──
export const IconDoor = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="15" cy="12" r="1" fill="currentColor" />
    <path d="M10 21V3" stroke="currentColor" strokeWidth="1.3" opacity="0.3" />
  </Svg>
);

// ── Key ──
export const IconKey = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M11 11l9 9M16 20l2-2M14 18l2-2" stroke="currentColor" strokeWidth="1.8" />
  </Svg>
);

// ── Infographic / Chart blocks ──
export const IconInfographic = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <rect x="3" y="14" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <rect x="10" y="9" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <rect x="17" y="3" width="4" height="18" rx="1" stroke="currentColor" strokeWidth="1.8" />
  </Svg>
);

// ── Content Creator / Star person ──
export const IconCreator = ({ size, className }: IconProps) => (
  <Svg size={size} className={className}>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M6 21v-2c0-3 3-5 6-5s6 2 6 5v2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M17 3l0.7 2h2l-1.5 1.2 0.5 2L17 7l-1.7 1.2 0.5-2L14.3 5h2L17 3z" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2" />
  </Svg>
);
