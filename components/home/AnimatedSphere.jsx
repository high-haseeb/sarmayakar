import { motion } from 'framer-motion';

const sphereVariants = {
  initial: {
    scale: 0,
    opacity: 1,
    borderRadius: '50%',
    backgroundColor: 'black',
    position: 'fixed',
    zIndex: 999,
    top: '50%',
    left: '50%',
    width: '100px',
    height: '100px',
    transform: 'translate(-50%, -50%)',
  },
  expanded: {
    scale: 20,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const AnimatedSphere = ({ onComplete }) => {
  return (
    <motion.div
      initial="initial"
      animate="expanded"
      variants={sphereVariants}
      onAnimationComplete={onComplete}
      className="z-50"
    />
  );
};

export default AnimatedSphere;
