"use client";
import React, { useState, useEffect, useRef } from "react";
import CELLS from "vanta/dist/vanta.cells.min"; // Changed to Cells
import * as THREE from "three";

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        (CELLS as any)({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          /* Subdued Blue Theme */
          color1: 0x1c86ff,       // Deep Navy/Black base
          color2: 0x35aff2,     // Subtle Cyan/Light Blue for the highlights
          size: 1.5,            // Larger cells for a cleaner look
          speed: 1.0            // Smooth, calm movement
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ 
        width: '100vw', 
        height: '100vh', 
        opacity: 0.5 // Lowered opacity to keep it subtle
      }}
    />
  );
};

export default VantaBackground;