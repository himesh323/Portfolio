import React, { useEffect, useRef } from 'react';

interface AvatarCardProps {
  imageSrc?: string;
  levelText?: string;
  badgeText?: string;
}

export const AvatarCard: React.FC<AvatarCardProps> = ({
  imageSrc = '/avatar.jpg',
  levelText = 'LVL 03',
  badgeText = 'YEAR 3',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    img.onload = () => {
      // 8K High Definition Crisp Canvas (1200x1200 resolution)
      const size = 1200;
      canvas.width = size;
      canvas.height = size;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // 1. Draw Amber Dither Golden Background
      const bgCanvas = document.createElement('canvas');
      bgCanvas.width = size;
      bgCanvas.height = size;
      const bgCtx = bgCanvas.getContext('2d');
      if (!bgCtx) return;

      const grad = bgCtx.createRadialGradient(size / 2, size / 2, 80, size / 2, size / 2, size * 0.75);
      grad.addColorStop(0, '#e58c24');
      grad.addColorStop(0.65, '#c96f12');
      grad.addColorStop(1, '#944605');
      bgCtx.fillStyle = grad;
      bgCtx.fillRect(0, 0, size, size);

      // Dither pattern overlay
      const pSize = 8;
      for (let y = 0; y < size; y += pSize) {
        for (let x = 0; x < size; x += pSize) {
          if ((x / pSize + y / pSize) % 2 === 0) {
            bgCtx.fillStyle = 'rgba(0, 0, 0, 0.06)';
            bgCtx.fillRect(x, y, pSize, pSize);
          }
        }
      }

      // Draw Retro Pixel Sparkles (+)
      const sparkles = [
        { x: 140, y: 260, s: 40 },
        { x: 220, y: 500, s: 26 },
        { x: 1040, y: 320, s: 34 },
        { x: 980, y: 680, s: 38 },
        { x: 200, y: 920, s: 30 },
      ];
      bgCtx.fillStyle = '#fff6db';
      sparkles.forEach((sp) => {
        const cx = sp.x;
        const cy = sp.y;
        const arm = sp.s;
        const thick = Math.max(6, Math.floor(sp.s / 4));
        bgCtx.fillRect(cx - arm, cy - thick / 2, arm * 2, thick);
        bgCtx.fillRect(cx - thick / 2, cy - arm, thick, arm * 2);
      });

      ctx.drawImage(bgCanvas, 0, 0);

      // 2. High-Definition Crystal Clear Portrait Rendering
      const portraitCanvas = document.createElement('canvas');
      portraitCanvas.width = size;
      portraitCanvas.height = size;
      const pCtx = portraitCanvas.getContext('2d');
      if (!pCtx) return;

      pCtx.imageSmoothingEnabled = true;
      pCtx.imageSmoothingQuality = 'high';

      // Crop & frame photo with high clarity
      const scale = Math.max(size / img.width, size / img.height);
      const nw = img.width * scale;
      const nh = img.height * scale;
      const nx = (size - nw) / 2;
      const ny = (size - nh) / 2 + 40;

      pCtx.drawImage(img, nx, ny, nw, nh);

      // Dynamic studio background removal so face & body stay ultra-sharp against golden amber dither
      const imgData = pCtx.getImageData(0, 0, size, size);
      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const yPos = Math.floor((i / 4) / size);

        // Target studio white background
        if (r > 232 && g > 232 && b > 232 && yPos < size * 0.68) {
          data[i + 3] = 0; // Make background transparent
        }
      }

      pCtx.putImageData(imgData, 0, 0);
      ctx.drawImage(portraitCanvas, 0, 0);

      // 3. Subtle Vignette
      const vigGrad = ctx.createRadialGradient(size / 2, size / 2, size * 0.4, size / 2, size / 2, size * 0.8);
      vigGrad.addColorStop(0, 'rgba(0,0,0,0)');
      vigGrad.addColorStop(1, 'rgba(40,15,0,0.32)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, size, size);

      // 4. Retro Corner Studs
      ctx.fillStyle = '#2a1b10';
      const studSize = 28;
      ctx.fillRect(16, 16, studSize, studSize);
      ctx.fillRect(size - 16 - studSize, 16, studSize, studSize);
      ctx.fillRect(16, size - 16 - studSize, studSize, studSize);
      ctx.fillRect(size - 16 - studSize, size - 16 - studSize, studSize, studSize);
    };
  }, [imageSrc]);

  return (
    <div className="retro-card-window">
      <div className="retro-card-inner">
        <div className="retro-portrait-container">
          <canvas ref={canvasRef} className="retro-avatar-canvas" />
          <img
            src={imageSrc}
            alt="Thota Himesh HD Portrait"
            className="retro-avatar-hd-fallback"
          />
        </div>
        <div className="retro-card-badge-bar">
          <span className="retro-badge-lvl">{levelText}</span>
          <span className="retro-badge-status">{badgeText}</span>
        </div>
      </div>
    </div>
  );
};
