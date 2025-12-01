import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulsePhase: number;
}

const HeroParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const time = Date.now() * 0.001;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mouse interaction - particles move away from cursor
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          particle.vx += (dx / dist) * force * 0.02;
          particle.vy += (dy / dist) * force * 0.02;
        }

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Pulsing opacity
        const pulseOpacity = particle.opacity * (0.7 + 0.3 * Math.sin(time * 2 + particle.pulsePhase));

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(217, 91%, 60%, ${pulseOpacity})`;
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        gradient.addColorStop(0, `hsla(217, 91%, 60%, ${pulseOpacity * 0.3})`);
        gradient.addColorStop(1, "hsla(217, 91%, 60%, 0)");
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections to nearby particles
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const lineOpacity = (1 - distance / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `hsla(217, 91%, 60%, ${lineOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw floating data packets
      const packetCount = 5;
      for (let i = 0; i < packetCount; i++) {
        const progress = ((time * 0.3 + i * 0.2) % 1);
        const startParticle = particles[i % particles.length];
        const endParticle = particles[(i + 10) % particles.length];
        
        if (startParticle && endParticle) {
          const x = startParticle.x + (endParticle.x - startParticle.x) * progress;
          const y = startParticle.y + (endParticle.y - startParticle.y) * progress;
          
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(142, 76%, 36%, ${0.8 * Math.sin(progress * Math.PI)})`;
          ctx.fill();
          
          // Trail
          for (let t = 1; t <= 5; t++) {
            const trailProgress = Math.max(0, progress - t * 0.02);
            const tx = startParticle.x + (endParticle.x - startParticle.x) * trailProgress;
            const ty = startParticle.y + (endParticle.y - startParticle.y) * trailProgress;
            ctx.beginPath();
            ctx.arc(tx, ty, 2 - t * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(142, 76%, 36%, ${0.3 * (1 - t / 5) * Math.sin(progress * Math.PI)})`;
            ctx.fill();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
};

export default HeroParticles;
