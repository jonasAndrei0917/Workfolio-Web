import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";

interface Props {
  cardStyle?: string;
  children: ReactNode;
  whileHover?: boolean;
  onClick?: () => void;
}

function Card({ cardStyle, children, whileHover = false, onClick }: Props) {
  const pointerDown = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerDown.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!pointerDown.current) return;
    const dx = Math.abs(e.clientX - pointerDown.current.x);
    const dy = Math.abs(e.clientY - pointerDown.current.y);

    if (dx < 5 && dy < 5 && onClick) {
      onClick();
    }

    pointerDown.current = null;
  };

  return (
    <motion.div
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      whileHover={
        whileHover
          ? { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" }
          : undefined
      }
      className={`bg-white shadow-lg rounded-2xl md:max-w-2xl flex flex-col items-center justify-around p-6 sm:p-10 ${cardStyle}`}
    >
      {children}
    </motion.div>
  );
}

export default Card;
