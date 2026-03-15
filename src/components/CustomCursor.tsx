"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorState = () => {
      // Find elements with specific data attributes
      const hoveredEls = document.querySelectorAll(":hover");
      let activeText = "";
      
      hoveredEls.forEach((el) => {
        const text = el.getAttribute("data-cursor");
        if (text) activeText = text;
      });

      if (activeText) {
        setIsHovered(true);
        setCursorText(activeText);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", (e) => {
      onMouseMove(e);
      updateCursorState();
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-accent pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
      animate={{
        x: position.x - (isHovered ? 32 : 8),
        y: position.y - (isHovered ? 32 : 8),
        width: isHovered ? 64 : 16,
        height: isHovered ? 64 : 16,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      <motion.span
        className="text-[10px] font-bold text-black uppercase tracking-widest whitespace-nowrap"
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {cursorText}
      </motion.span>
    </motion.div>
  );
}
