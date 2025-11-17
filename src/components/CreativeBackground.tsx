import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CreativeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Floating particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    // Light trails
    const trails: Array<{
      x: number;
      y: number;
      angle: number;
      length: number;
      speed: number;
      hue: number;
    }> = [];

    for (let i = 0; i < 5; i++) {
      trails.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 60 + 180, // Cyan to purple range
      });
    }

    let animationId: number;
    let scrollY = 0;

    const animate = () => {
      scrollY = window.scrollY;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY - scrollY * 0.0005;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(200, 70%, 60%, ${particle.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(200, 70%, 60%, ${particle.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw light trails
      trails.forEach((trail) => {
        trail.x += Math.cos(trail.angle) * trail.speed;
        trail.y += Math.sin(trail.angle) * trail.speed;

        if (trail.x < -100) trail.x = canvas.width + 100;
        if (trail.x > canvas.width + 100) trail.x = -100;
        if (trail.y < -100) trail.y = canvas.height + 100;
        if (trail.y > canvas.height + 100) trail.y = -100;

        const endX = trail.x + Math.cos(trail.angle) * trail.length;
        const endY = trail.y + Math.sin(trail.angle) * trail.length;

        const gradient = ctx.createLinearGradient(trail.x, trail.y, endX, endY);
        gradient.addColorStop(0, `hsla(${trail.hue}, 80%, 60%, 0)`);
        gradient.addColorStop(0.5, `hsla(${trail.hue}, 80%, 60%, 0.3)`);
        gradient.addColorStop(1, `hsla(${trail.hue}, 80%, 60%, 0)`);

        ctx.beginPath();
        ctx.moveTo(trail.x, trail.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${trail.hue}, 80%, 60%, 0.5)`;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <>
      {/* Canvas for particles and light trails */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full pointer-events-none z-[1]"
        style={{ height: '100%' }}
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
        {/* Hexagons */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-20 h-20 opacity-10"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary drop-shadow-[0_0_10px_currentColor]"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-[60%] right-[15%] w-16 h-16 opacity-10"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-accent drop-shadow-[0_0_10px_currentColor]"
            />
          </svg>
        </motion.div>

        {/* Triangles */}
        <motion.div
          className="absolute top-[30%] right-[25%] w-24 h-24 opacity-10"
          animate={{
            y: [0, -50, 0],
            rotate: [0, 120, 240, 360],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50 10, 90 90, 10 90"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary drop-shadow-[0_0_15px_currentColor]"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-[70%] left-[20%] w-20 h-20 opacity-10"
          animate={{
            y: [0, 35, 0],
            rotate: [0, -120, -240, -360],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50 10, 90 90, 10 90"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-accent drop-shadow-[0_0_15px_currentColor]"
            />
          </svg>
        </motion.div>

        {/* Circles/Rings */}
        <motion.div
          className="absolute top-[45%] left-[5%] w-32 h-32 opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary drop-shadow-[0_0_12px_currentColor]"
            />
          </svg>
        </motion.div>

        {/* Polygons */}
        <motion.div
          className="absolute top-[15%] right-[8%] w-28 h-28 opacity-10"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50 5, 75 20, 85 45, 75 70, 50 85, 25 70, 15 45, 25 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-accent drop-shadow-[0_0_12px_currentColor]"
            />
          </svg>
        </motion.div>

        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-[20%] left-[30%] w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-[50%] right-[20%] w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-[70%] left-[15%] w-72 h-72 rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 40, -50, 0],
            y: [0, -35, 45, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Abstract Node Network */}
        <motion.div
          className="absolute top-[35%] left-[50%] opacity-8"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Nodes */}
            <circle cx="100" cy="50" r="3" fill="hsl(var(--primary))" opacity="0.5" filter="url(#glow)" />
            <circle cx="150" cy="100" r="3" fill="hsl(var(--accent))" opacity="0.5" filter="url(#glow)" />
            <circle cx="100" cy="150" r="3" fill="hsl(var(--primary))" opacity="0.5" filter="url(#glow)" />
            <circle cx="50" cy="100" r="3" fill="hsl(var(--accent))" opacity="0.5" filter="url(#glow)" />
            {/* Connections */}
            <line x1="100" y1="50" x2="150" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />
            <line x1="150" y1="100" x2="100" y2="150" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.3" />
            <line x1="100" y1="150" x2="50" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />
            <line x1="50" y1="100" x2="100" y2="50" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </motion.div>

        {/* Wave Grid */}
        <motion.div
          className="absolute bottom-[10%] right-[30%] opacity-8"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width="300" height="100" viewBox="0 0 300 100">
            <path
              d="M 0 50 Q 50 20, 100 50 T 200 50 T 300 50"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M 0 60 Q 50 30, 100 60 T 200 60 T 300 60"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M 0 70 Q 50 40, 100 70 T 200 70 T 300 70"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>
        </motion.div>
      </div>
    </>
  );
};

export default CreativeBackground;
