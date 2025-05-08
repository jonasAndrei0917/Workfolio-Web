import { ReactNode, useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

function HorizontalScroll({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  const calculateConstraints = () => {
    if (containerRef.current && contentRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;
      const dragLimit = contentWidth - containerWidth + 80;

      setConstraints({
        left: -Math.max(dragLimit, 0),
        right: 0,
      });
    }
  };

  useLayoutEffect(() => {
    calculateConstraints();
  }, [children]);

  useLayoutEffect(() => {
    window.addEventListener("resize", calculateConstraints);
    return () => window.removeEventListener("resize", calculateConstraints);
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden bg-primary-background p-10 py-35"
    >
      <motion.div
        ref={contentRef}
        className="flex w-fit cursor-grab active:cursor-grabbing gap-10"
        drag="x"
        dragConstraints={constraints}
        style={{ userSelect: "none" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default HorizontalScroll;
