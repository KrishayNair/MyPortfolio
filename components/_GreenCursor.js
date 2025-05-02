import React, { useEffect, useState } from "react";
import "../styles/globals.css";

const GreenCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      
      // Check if the element under cursor is interactive or text
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive = element?.matches('a, button, input, textarea, select, [role="button"]');
      const isText = element?.matches('p, h1, h2, h3, h4, h5, h6, span');
      
      setIsVisible(isInteractive || isText);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="globalGreenCursor"
      style={{ 
        left: pos.x, 
        top: pos.y,
        opacity: isVisible ? 0.85 : 0,
        animation: isVisible ? 'cursorPulse 1.2s infinite alternate' : 'none'
      }}
    />
  );
};

export default GreenCursor; 