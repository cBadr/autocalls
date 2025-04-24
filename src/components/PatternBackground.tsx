import React, { useEffect, useRef } from 'react';

const COLORS = [
  [59,130,246],    // Blue
  [139,92,246],    // Purple
  [236,72,153],    // Pink
  [16,185,129],    // Light Green
  [251,191,36]     // Yellow
];

const NODES_COUNT = 7;

interface MeshNode {
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: number[];
}

const PatternBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight * 3;

    let nodes: MeshNode[] = Array.from({ length: NODES_COUNT }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / NODES_COUNT;
      return {
        x: width / 2 + Math.cos(angle) * width * 0.25 + Math.random() * 120,
        y: height / 2 + Math.sin(angle) * height * 0.18 + Math.random() * 120,
        dx: (Math.random() - 0.5) * 0.18,
        dy: (Math.random() - 0.5) * 0.15,
        color: COLORS[i % COLORS.length]
      };
    });

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight * 3;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Move mesh nodes
      nodes.forEach((node) => {
        node.x += node.dx;
        node.y += node.dy;
        // Bounce at edges
        if (node.x < 0 || node.x > width) node.dx *= -1;
        if (node.y < 0 || node.y > height) node.dy *= -1;
      });
      // Draw mesh gradients
      nodes.forEach((node, i) => {
        const grad = ctx.createRadialGradient(
          node.x,
          node.y,
          width * 0.01,
          node.x,
          node.y,
          width * 0.55
        );
        grad.addColorStop(0, `rgba(${node.color[0]},${node.color[1]},${node.color[2]},0.32)`);
        grad.addColorStop(1, `rgba(${node.color[0]},${node.color[1]},${node.color[2]},0)`);
        ctx.globalAlpha = 0.85;
        ctx.globalCompositeOperation = i === 0 ? 'source-over' : 'lighter';
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, width * 0.55, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      animationId = window.requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Faint SVG background image layer */}
      <img
        src="/phone-call.svg"
        alt="خلفية تواصل"
        className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none z-0 opacity-10 select-none"
        aria-hidden="true"
        draggable="false"
        style={{ mixBlendMode: 'lighten' }}
      />
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />
    </>
  );
};

export default PatternBackground;