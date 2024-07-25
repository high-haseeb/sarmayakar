"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "../common/Navbar";

const pageVariants = {
  initial: { x: "-100vw" },
  in: {  x: 0 },
  out: { x: "100vw" },
};

const pageTransition = { type: "tween", duration: 0.3 };

const AnimatedLayout = ({ children }) => {
  const asPath = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={asPath} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="relative">
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedLayout;
