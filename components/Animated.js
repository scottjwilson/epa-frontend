import { motion, AnimatePresence } from "framer-motion";
const Animated = ({ children }) => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      {children}{" "}
    </motion.div>
  );
};

export default Animated;
