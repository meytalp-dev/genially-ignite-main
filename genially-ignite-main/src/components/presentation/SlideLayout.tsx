import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

const SlideLayout = ({ children, className = "" }: SlideLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full min-h-full p-8 md:p-12 lg:p-16 flex flex-col ${className}`}
      dir="rtl"
    >
      {children}
    </motion.div>
  );
};

export default SlideLayout;
