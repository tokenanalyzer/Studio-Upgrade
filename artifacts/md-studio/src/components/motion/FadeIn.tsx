import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.55,
  once = true,
  className,
  style,
  ...rest
}: FadeInProps) {
  const dirMap = {
    up:    { y: distance },
    down:  { y: -distance },
    left:  { x: distance },
    right: { x: -distance },
    none:  {},
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, ...dirMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "0px 0px -60px 0px" }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}

export function StaggerContainer({ children, staggerDelay = 0.08, className, style, once = true }: StaggerProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -60px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden:  { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
    >
      {children}
    </motion.div>
  );
}
