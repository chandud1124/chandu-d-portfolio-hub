import React, { useRef, useEffect, useState } from 'react';
import rocketIcon from "@/assets/paper-rocket.svg";

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
  const [angle, setAngle] = useState(0);

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
      // Simple fade effect like the reference
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";

      // Draw simple line trail between stored points
      if (pointsRef.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);

        for (let i = 1; i < pointsRef.current.length; i++) {
          ctx.lineTo(pointsRef.current[i].x, pointsRef.current[i].y);
        }

        ctx.strokeStyle = "rgba(255,255,255,0.6)";
        ctx.lineWidth = 2;
        ctx.stroke();
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
    // Mouse move handler: push point and update rocket position + angle
    let prevX = 0;
    let prevY = 0;
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Store point for trail
      pointsRef.current.push({ x, y, t: performance.now() });

      // Keep trail manageable
      const maxPoints = 50;
      if (pointsRef.current.length > maxPoints) pointsRef.current.shift();

      // Update angle for airplane rotation
      const dx = x - prevX;
      const dy = y - prevY;
      if (dx !== 0 || dy !== 0) {
        const radians = Math.atan2(dy, dx);
        const deg = (radians * 180) / Math.PI;
        setAngle(deg + 90); // adjust for airplane orientation
      }
      prevX = x;
      prevY = y;

      // Update airplane position
      if (rocketRef.current) {
        rocketRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${angle}deg)`;
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
  }, [angle]);

  // Ensure rocket element is updated to latest angle
  useEffect(() => {
    if (rocketRef.current) {
      rocketRef.current.style.transform = `translate(${pointsRef.current.length ? pointsRef.current[pointsRef.current.length - 1].x : 0}px, ${pointsRef.current.length ? pointsRef.current[pointsRef.current.length - 1].y : 0}px) translate(-50%, -50%) rotate(${angle}deg)`;
    }
  }, [angle]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9998 }}
      />
      {visible && (
        <div
          ref={rocketRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: 40,
            height: 40,
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate(-50%, -50%) rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <img src={rocketIcon} alt="Paper Rocket" style={{ width: '28px', height: '28px' }} />
        </div>
      )}
    </>
  );
};

export default CustomCursorRocket;