import { motion } from "framer-motion";

interface StampProps {
  text: string;
  color?: string;
  rotation?: number;
}

const Stamp: React.FC<StampProps> = ({
  text,
  color = " #D91616",
  rotation = -12,
}) => {
  return (
    <motion.div
      initial={{ scale: 2, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.8 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
        delay: 0.2,
      }}
      style={{ rotate: rotation }}
      className="  pointer-events-none z-50 select-none flex items-center justify-center"
    >
      <div
        className="border-4 px-4 py-1 rounded-sm mix-blend-multiply"
        style={{ borderColor: color, color: color }}
      >
        <span className=" font-extrabold tracking-[0.2em] uppercase font-serif opacity-90">
          {text}
        </span>
      </div>
    </motion.div>
  );
};

export default Stamp;
