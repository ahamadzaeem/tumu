import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

const FRAME_COUNT = 120;

// Globally store preloaded Image elements (single set for all devices)
const allFrames: HTMLImageElement[] = [];

let framesLoaded = false;

function preloadFrames() {
  if (framesLoaded) return;
  framesLoaded = true;
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const num = String(i).padStart(4, '0');
    const img = new Image();
    img.src = `/frames/frame_${num}.jpg`;
    allFrames[i - 1] = img;
  }
}

// Start preloading immediately on module evaluation
preloadFrames();

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Scroll stage state
  const [scrollStage, setScrollStage] = useState(0);

  // Draw the canvas frame
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Single frame set for all screen sizes
    let img = allFrames[index];
    if (!img) return;

    // If target image is not loaded yet, register an onload handler to draw it once ready
    if (!img.complete || img.naturalWidth === 0) {
      const targetIdx = index;
      img.onload = () => {
        if (frameIndexRef.current === targetIdx) {
          drawFrame(targetIdx);
        }
      };

      // Fall back to nearest loaded frame so the screen NEVER goes blank
      let fallbackImg: HTMLImageElement | null = null;
      for (let offset = 1; offset < FRAME_COUNT; offset++) {
        const prev = allFrames[index - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          fallbackImg = prev;
          break;
        }
        const next = allFrames[index + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          fallbackImg = next;
          break;
        }
      }
      if (!fallbackImg) return;
      img = fallbackImg;
    }

    const width = canvas.width;
    const height = canvas.height;
    if (width === 0 || height === 0) return;

    const imgAR = img.naturalWidth / img.naturalHeight;
    const canvasAR = width / height;

    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
    if (imgAR > canvasAR) {
      // image is wider — crop sides
      sw = img.naturalHeight * canvasAR;
      sx = (img.naturalWidth - sw) / 2;
    } else {
      // image is taller — crop top/bottom
      sh = img.naturalWidth / canvasAR;
      sy = (img.naturalHeight - sh) / 2;
    }
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);
  }, []);

  // Resize canvas to match device pixel ratio
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width > 0 ? rect.width : (canvas.offsetWidth > 0 ? canvas.offsetWidth : window.innerWidth);
    const h = rect.height > 0 ? rect.height : (canvas.offsetHeight > 0 ? canvas.offsetHeight : window.innerHeight);
    canvas.width  = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    drawFrame(frameIndexRef.current);
  }, [drawFrame]);

  // Initial setup, sizing, and frame 0 drawing triggers
  useEffect(() => {
    preloadFrames();

    resizeCanvas();
    drawFrame(0);

    // Multiple layout stabilization attempts to guarantee Frame 0 is drawn immediately
    const t1 = setTimeout(() => { resizeCanvas(); drawFrame(0); }, 50);
    const t2 = setTimeout(() => { resizeCanvas(); drawFrame(0); }, 150);
    const t3 = setTimeout(() => { resizeCanvas(); drawFrame(0); }, 400);

    const firstImg = allFrames[0];
    if (firstImg) {
      if (firstImg.complete) {
        drawFrame(0);
      } else {
        firstImg.onload = () => {
          resizeCanvas();
          drawFrame(0);
        };
      }
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [resizeCanvas, drawFrame]);

  // Handle scroll animation logic
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const stickyHeight = stickyRef.current ? stickyRef.current.offsetHeight : window.innerHeight;
      const pinnedDistance = section.offsetHeight - stickyHeight;

      if (pinnedDistance <= 0) return;

      // Calculate progress strictly bounded [0, 1] while pinned
      const scrollOffset = -rect.top;
      const progress = Math.max(0, Math.min(1, scrollOffset / pinnedDistance));

      // Scroll stage state
      if (progress < 0.12) {
        setScrollStage(0);
      } else if (progress < 0.35) {
        setScrollStage(1);
      } else if (progress < 0.78) {
        setScrollStage(2);
      } else {
        setScrollStage(3);
      }

      // Map progress (0.0 to 0.82) to frames 0 -> 239
      const animationProgress = Math.min(1, progress / 0.82);
      const targetIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(animationProgress * FRAME_COUNT)
      );

      frameIndexRef.current = targetIndex;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        drawFrame(targetIndex);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial call to set state and render current scroll frame
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  // Handle canvas sizing resize events
  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  return (
    <div ref={sectionRef} className="hero-scroll-container">
      <section ref={stickyRef} className="hero-sticky">

        {/* ── CANVAS FRAME LAYER ── */}
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* ── SCROLL TO START INDICATOR ── */}
        <AnimatePresence>
          {scrollStage === 0 && (
            <motion.div
              className="scroll-indicator-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                <ChevronDown size={28} color="var(--color-pink)" />
              </motion.div>
              <span className="scroll-label font-body text-pink">SCROLL TO EXPERIENCE</span>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </div>
  );
}
