import React, { useRef, useEffect, useState } from 'react';
import rocketIcon from "@/assets/paper-rocket.svg";

type Point = {
  x: number;
  y: number;
  t: number; // timestamp in ms
  phase: number; // for sine-based waviness
};

const MAX_AGE = 1000; // ms, how long a trail point lives
const WAVE_AMPLITUDE = 8; // pixels, wave amplitude (hand-drawn look)
const WAVE_FREQUENCY = 0.02; // frequency of wave

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
      // Fade the canvas slightly: use a translucent fill to create fade out effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = performance.now();
      const points = pointsRef.current;

      // Remove old points
      while (points.length && now - points[0].t > MAX_AGE) points.shift();

      if (points.length < 2) return;

      // Draw path with waviness
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const age = now - p0.t;
        const progress = 1 - Math.min(age / MAX_AGE, 1);
        const alpha = progress * 0.75; // fade

        // Compute midpoints and draw curve
        const mx = (p0.x + p1.x) / 2;
        const my = (p0.y + p1.y) / 2;

        // Orthogonal offset for wavy effect
        const dx = p1.x - p0.x;
        const dy = p1.y - p0.y;
        const len = Math.max(1, Math.hypot(dx, dy));
        const nx = -dy / len;
        const ny = dx / len;
        const phase = p0.phase;
        const wave = Math.sin((now + i * 100) * WAVE_FREQUENCY + phase) * WAVE_AMPLITUDE * progress;

        const ox = nx * wave;
        const oy = ny * wave;

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.quadraticCurveTo(mx + ox, my + oy, p1.x, p1.y);
        ctx.strokeStyle = `rgba(99,102,241, ${alpha})`; // subtle violet-ish trail
        ctx.lineWidth = 2 + progress * 2; // thicker closer to head
        ctx.shadowBlur = 10 * progress;
        ctx.shadowColor = `rgba(99,102,241, ${alpha * 0.6})`;
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
      const now = performance.now();
      pointsRef.current.push({ x, y, t: now, phase: Math.random() * Math.PI * 2 });

      // Keep we don't exceed to many points
      const maxPoints = 60;
      if (pointsRef.current.length > maxPoints) pointsRef.current.shift();

      // Update angle for rocket rotation
      const dx = x - prevX;
      const dy = y - prevY;
      if (dx !== 0 || dy !== 0) {
        const radians = Math.atan2(dy, dx);
        const deg = (radians * 180) / Math.PI;
        setAngle(deg + 90); // rotate the rocket to point along movement; +90 for rocket SVG orientation
      }
      prevX = x;
      prevY = y;

      // Update rocket position visually
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
            width: 28,
            height: 28,
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate(-50%, -50%) rotate(0deg)',
            transition: 'transform 120ms linear',
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