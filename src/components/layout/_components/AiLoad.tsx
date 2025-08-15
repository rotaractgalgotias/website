import React, { useEffect } from "react";

export default function AiLoad() {
  useEffect(() => {
    const canvas = document.getElementById(
      "starCanvas"
    ) as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      delta: number;
    }[] = [];

    const numStars = 50;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        delta: Math.random() * 0.02 + 0.005,
      });
    }

    function animateStars() {
      if (!ctx || !canvas) return; // early exit if null

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 136, 0, ${star.alpha})`;
        ctx.fill();

        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) {
          star.delta = -star.delta;
        }
      }

      requestAnimationFrame(animateStars);
    }

    animateStars();
  }, []);

  return (
    <div>
      <canvas
        id="starCanvas"
        className="d-block"
        width={100}
        height={20}
      ></canvas>
    </div>
  );
}
