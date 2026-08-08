"use client";

import { useEffect, useRef } from "react";

interface DustParticle {
  angle: number;
  radiusX: number;
  radiusY: number;
  speed: number;
  size: number;
  color: string;
  alpha: number;
}

export default function CosmicPortal() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    let centerX = width / 2;
    let centerY = height / 2 - 30;

    // Core dimensions
    const baseCoreRadius = 38;
    const dustParticles: DustParticle[] = [];
    const particleCount = 140;

    // Space Blue, Soft Cyan & Muted Violet color palette
    const colors = [
      "rgba(56, 189, 248, ",  // Sky Blue
      "rgba(168, 85, 247, ",  // Violet
      "rgba(99, 102, 241, ",  // Indigo
      "rgba(14, 165, 233, ",  // Cyan
    ];

    for (let i = 0; i < particleCount; i++) {
      const rx = Math.random() * 210 + baseCoreRadius + 15;
      dustParticles.push({
        angle: Math.random() * Math.PI * 2,
        radiusX: rx,
        radiusY: rx * 0.32, // Smooth 3D tilt perspective
        speed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1), // Calm, slow drift
        size: Math.random() * 1.8 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      centerX = width / 2;
      centerY = height / 2 - 30;
    };

    window.addEventListener("resize", handleResize);

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // Subtle breathing pulse cycle
      const pulse = Math.sin(time * 0.8) * 3;
      const currentCoreRadius = baseCoreRadius + pulse;

      // 1. Soft Ambient Space Blur (Deep Background Halo)
      const ambientHalo = ctx.createRadialGradient(
        centerX,
        centerY,
        currentCoreRadius,
        centerX,
        centerY,
        240
      );
      ambientHalo.addColorStop(0, "rgba(168, 85, 247, 0.25)");
      ambientHalo.addColorStop(0.35, "rgba(56, 189, 248, 0.12)");
      ambientHalo.addColorStop(0.75, "rgba(14, 165, 233, 0.03)");
      ambientHalo.addColorStop(1, "rgba(2, 6, 23, 0)");

      ctx.fillStyle = ambientHalo;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 240, 0, Math.PI * 2);
      ctx.fill();

      // 2. Soft Orbiting Stardust Particles (Slow & Smooth)
      dustParticles.forEach((p) => {
        p.angle += p.speed;

        const x = centerX + Math.cos(p.angle) * p.radiusX;
        const y = centerY + Math.sin(p.angle) * p.radiusY;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = `${p.color}0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Smooth Photon Lens Glow Rim
      const photonRing = ctx.createRadialGradient(
        centerX,
        centerY,
        currentCoreRadius - 4,
        centerX,
        centerY,
        currentCoreRadius + 14
      );
      photonRing.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      photonRing.addColorStop(0.3, "rgba(56, 189, 248, 0.7)");
      photonRing.addColorStop(0.75, "rgba(168, 85, 247, 0.25)");
      photonRing.addColorStop(1, "rgba(2, 6, 23, 0)");

      ctx.fillStyle = photonRing;
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentCoreRadius + 14, 0, Math.PI * 2);
      ctx.fill();

      // 4. Dark Space Event Horizon Center (Pitch Black Core matching #020617)
      ctx.fillStyle = "#020617";
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentCoreRadius, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}