'use client';

import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll(); // tracks entire page or parent container scroll
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  // Use a slight curve or just linear transform for frame checking
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format: frame_000_delay-0.066s.png
      const indexStr = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${indexStr}_delay-0.066s.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;

    const render = () => {
      // It's possible for frame index to go out of bounds slightly due to elastic scroll
      let frame = Math.round(frameIndex.get());
      if (frame < 0) frame = 0;
      if (frame >= FRAME_COUNT) frame = FRAME_COUNT - 1;
      
      if (images[frame]) {
        drawCenterCrop(context, images[frame], canvas.width, canvas.height);
      }
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      let frame = Math.round(frameIndex.get());
      if (frame < 0) frame = 0;
      if (frame >= FRAME_COUNT) frame = FRAME_COUNT - 1;
      if (images[frame]) {
        drawCenterCrop(context, images[frame], canvas.width, canvas.height);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [images, frameIndex]);

  // Utility to draw image with object-fit: cover
  const drawCenterCrop = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvasWidth: number, canvasHeight: number) => {
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;
    let drawWidth, drawHeight;
    
    if (canvasRatio > imgRatio) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
    } else {
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgRatio;
    }
    
    const offsetX = (canvasWidth - drawWidth) / 2;
    const offsetY = (canvasHeight - drawHeight) / 2;
    
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  return (
    <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#121212] z-0">
      <canvas ref={canvasRef} className="w-full h-full" />

      {/* SD Logo Mask to cover the Veo watermark across all frames */}
      <div className="absolute bottom-0 right-0 z-[100] pb-2 pr-4 md:pb-4 md:pr-6 pointer-events-none">
        <div className="relative flex items-center justify-center">
          {/* Intense dark blur to guarantee complete masking of underlying Veo text. Made larger and darker. */}
          <div className="absolute inset-0 bg-[#000000] rounded-tl-2xl blur-[2px] w-[80px] h-[50px] translate-x-2 translate-y-2 -z-10" />
          <div className="absolute inset-0 bg-[#000000]/95 backdrop-blur-3xl rounded-tl-2xl blur-[4px] scale-[1.3] -z-10" />
          
          <div className="bg-[#0a0a0a]/95 backdrop-blur-3xl border-t border-l border-white/5 px-5 py-2.5 rounded-tl-xl shadow-2xl overflow-hidden min-w-[75px] min-h-[45px] flex items-center justify-center">
            {/* The SD logo inside the mask (Toned down glow for better style) */}
            <h1 
              className="font-display font-black text-2xl md:text-3xl tracking-wider text-[#FFD700] drop-shadow-md leading-none"
              style={{ textShadow: "0 0 10px rgba(255,215,0,0.3)" }}
            >
              SD
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
