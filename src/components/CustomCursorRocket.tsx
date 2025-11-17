import React, { useRef, useEffect, useState } from 'react';
import PointerSVG from '../assets/Untitled.svg';

type Point = {
  x: number;
  y: number;
  t: number; // timestamp in ms
};

const MAX_AGE = 1000; // ms, how long a trail point lives

const CustomCursorRocket: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rocketRef = useRef<HTMLDivElement | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const rafRef = useRef<number | null>(null);
  const [visible, setVisible] = useState(true);
  // No angle state needed; pointer stays at SVG's original orientation

  // Utility to resize canvas
  const resizeCanvas = (canvas: HTMLCanvasElement) => {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    resizeCanvas(canvas);
    const handleResize = () => resizeCanvas(canvas);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      // Remove old points (fade out after MAX_AGE ms)
      const now = performance.now();
      while (pointsRef.current.length && now - pointsRef.current[0].t > MAX_AGE) {
        pointsRef.current.shift();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a dashed, animated, glowing trail that fades out
      if (pointsRef.current.length > 1) {
        ctx.save();
        ctx.setLineDash([12, 12]); // Dashed line
        ctx.lineDashOffset = -((performance.now() / 6) % 24); // Animate dash offset
        ctx.beginPath();
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
        for (let i = 1; i < pointsRef.current.length; i++) {
          ctx.lineTo(pointsRef.current[i].x, pointsRef.current[i].y);
        }
        // Fade out trail by age (use alpha of last point)
        const now = performance.now();
        const last = pointsRef.current[pointsRef.current.length - 1];
        const age = now - last.t;
        const alpha = Math.max(0, 1 - age / MAX_AGE);
        ctx.strokeStyle = `rgba(99,102,241,${alpha * 0.7})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(99,102,241,0.4)';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
      }
    };

    const loop = () => {
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    // Mouse move handler: push point and update pointer position only
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Store point for trail
      pointsRef.current.push({ x, y, t: performance.now() });

      // Keep trail manageable
      const maxPoints = 50;
      if (pointsRef.current.length > maxPoints) pointsRef.current.shift();

      // Position cursor so the tip (front edge) is at actual click point
      // The pointer SVG points right, so offset to left and up to align tip
      if (rocketRef.current) {
        rocketRef.current.style.transform = `translate(${x}px, ${y}px) translate(-8px, -32px)`;
      }
    };

    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseenter', handleEnter);
    document.addEventListener('mouseleave', handleLeave);

    // Hide custom cursor on touch devices
    const handleTouch = () => {
      setVisible(false);
      document.body.style.cursor = 'default';
    };
    window.addEventListener('touchstart', handleTouch, { passive: true });

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('touchstart', handleTouch);
      document.body.style.cursor = 'default';
    };
  }, []);

  // Ensure pointer element is updated to latest position (no rotation)
  useEffect(() => {
    if (rocketRef.current) {
      rocketRef.current.style.transform = `translate(${pointsRef.current.length ? pointsRef.current[pointsRef.current.length - 1].x : 0}px, ${pointsRef.current.length ? pointsRef.current[pointsRef.current.length - 1].y : 0}px) translate(-8px, -32px)`;
    }
  }, []);

  return (
    <>
      {/* Canvas for glowing trail */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
      {visible && (
        <div
          ref={rocketRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: 64,
            height: 64,
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <img src={PointerSVG} alt="Pointer Cursor" style={{ width: '64px', height: '64px', filter: 'drop-shadow(0 0 3px #99f)' }} />
        </div>
      )}
    </>
  );
};

export default CustomCursorRocket;