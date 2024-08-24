'use client'
import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGradient = (ctx, width, height) => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#1a237e');  // Deep blue
      gradient.addColorStop(1, '#4a148c');  // Deep purple
      return gradient;
    };

    const drawWave = (ctx, width, height, time) => {
      ctx.beginPath();
      const amplitude = height * 0.05;
      const frequency = 0.01;
      const speed = 0.05;

      for (let x = 0; x <= width; x++) {
        const y = Math.sin((x * frequency) + (time * speed)) * amplitude + (height / 2);
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, height / 2 - amplitude, 0, height / 2 + amplitude);
      gradient.addColorStop(0, 'rgba(103, 58, 183, 0.5)');  // Light purple
      gradient.addColorStop(1, 'rgba(63, 81, 181, 0.5)');   // Light blue
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = (time) => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Draw background gradient
      ctx.fillStyle = createGradient(ctx, width, height);
      ctx.fillRect(0, 0, width, height);

      // Draw animated wave
      drawWave(ctx, width, height, time / 1000);

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate(0);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default InteractiveBackground;
