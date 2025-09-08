import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

// Fade in + blur (soft focus emerging)
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

// fade in + zoom
export const fadeInZoom: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

// Elastic upward movement (breathing sensation)
export const fadeUpSpring: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

// Elastic zoom appears (often used for pictures and icons)
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};


// Animation collection export
export const animations = {
  fadeUp,
  fadeLeft,
  fadeRight,
  blurIn,
  fadeInZoom,
  fadeUpSpring,
  popIn,
  
};

export type AnimationKeys = keyof typeof animations;



// Component definition
interface FadeInWhenVisibleProps {
  children: ReactNode;
  variants: Variants;
}
export const FadeInWhenVisible = ({
  children,
  variants,
}: FadeInWhenVisibleProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
