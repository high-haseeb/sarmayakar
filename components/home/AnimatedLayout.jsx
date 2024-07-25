"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "../common/Navbar";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1,  },
  out: { opacity: 0 },
};

const pageTransition = { type: "tween", duration: 0.5 };

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
