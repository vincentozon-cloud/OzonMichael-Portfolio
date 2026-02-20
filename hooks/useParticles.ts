// src/hooks/useParticles.ts
import { useEffect, useRef } from 'react';

export const useParticles = (canvasRef: React.RefObject<HTMLCanvasElement | null>) => {
  const particlesArray = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number; 
      y: number; 
      directionX: number; 
      directionY: number; 
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        // Slightly faster movement for more "life"
        this.directionX = (Math.random() * 0.6) - 0.3;
        this.directionY = (Math.random() * 0.6) - 0.3;
        // Increased size range
        this.size = Math.random() * 30 + 15;
        this.color = 'rgba(0, 150, 255, 0.4)'; // Increased Opacity
      }

      draw() {
        if (!ctx) return;
        
        // Boosted radial gradient for visibility
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0, 
          this.x, this.y, this.size
        );
        
        // Brighter center, more defined edges
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.4)'); // Sky blue (Tailwind 400)
        gradient.addColorStop(0.4, 'rgba(37, 99, 235, 0.2)'); // Royal blue (Tailwind 600)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); 

        ctx.beginPath();
        // Doubled the drawing radius for a softer glow bleed
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      update() {
        if (this.x > canvas!.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas!.height || this.y < 0) this.directionY = -this.directionY;
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particlesArray.current = [];
      // Increased particle count from 40 to 65 for better coverage
      for (let i = 0; i < 65; i++) {
        particlesArray.current.push(new Particle());
      }
    };

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Optional: Add a subtle overlay to the clearRect to create "motion trails"
      // ctx.fillStyle = 'rgba(2, 6, 23, 0.1)'; 
      // ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesArray.current.forEach(p => p.update());
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId); // Proper cleanup
    };
  }, [canvasRef]);
};