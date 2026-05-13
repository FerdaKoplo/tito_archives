import { Variants } from "framer-motion";

export const sidebarVariants: Variants = {
  hidden: { x: -300, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

export const menuContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const menuItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300 },
  },
};

export const chibiVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 200 },
  },
};

export const documentVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  exit: { y: -20, opacity: 0, transition: { duration: 0.2 } },
};

export const emptyStateVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const textPaginationVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 10 : -10,
  }),
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -10 : 10,
  }),
};

