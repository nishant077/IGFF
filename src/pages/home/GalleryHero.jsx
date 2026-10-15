import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Lenis from "lenis";

/* ─── Gallery images (Unsplash — replace with your own) ────────── */
const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    alt: "Mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    alt: "Airplane in sky",
  },
  {
    src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80",
    alt: "Autumn trees",
  },
  {
    src: "https://images.unsplash.com/photo-1620127682229-33388276e540?w=600&q=80",
    alt: "Modern architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    alt: "Misty towers",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    alt: "Mountain valley",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    alt: "Portrait",
  },
];

/* ─── Per-card static layout (position in the fan) ─────────────── */
// 7 cards — index 3 is the center card
const CARD_CONFIG = [
  { rotateY: 55, x: "-200%", z: -220, scale: 0.72 },  // far left
  { rotateY: 38, x: "-145%", z: -120, scale: 0.82 },  // mid-left
  { rotateY: 22, x: "-85%",  z: -55,  scale: 0.91 },  // near-left
  { rotateY: 0,  x: "0%",   z: 0,    scale: 1.0  },   // center
  { rotateY: -22, x: "85%",  z: -55,  scale: 0.91 },  // near-right
  { rotateY: -38, x: "145%", z: -120, scale: 0.82 },  // mid-right
  { rotateY: -55, x: "200%", z: -220, scale: 0.72 },  // far right
];

/* ─── Single animated card ──────────────────────────────────────── */
function GalleryCard({ image, config, progress }) {
  // Each card animates from stacked center to its fan position as you scroll
  const rotateY = useTransform(progress, [0, 1], [0, config.rotateY]);
  const x       = useTransform(progress, [0, 1], ["0%", config.x]);
  const z       = useTransform(progress, [0, 1], [0, config.z]);
  const scale   = useTransform(progress, [0, 1], [0.85, config.scale]);

  const springRotateY = useSpring(rotateY, { stiffness: 80, damping: 22 });
  const springX       = useSpring(x,       { stiffness: 80, damping: 22 });
  const springZ       = useSpring(z,       { stiffness: 80, damping: 22 });
  const springScale   = useSpring(scale,   { stiffness: 80, damping: 22 });

  return (
    <motion.div
      style={{
        rotateY: springRotateY,
        x: springX,
        z: springZ,
        scale: springScale,
      }}
      className="absolute w-[clamp(130px,16vw,220px)] h-[clamp(190px,22vw,320px)]
                 rounded-2xl overflow-hidden shadow-2xl"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />
    </motion.div>
  );
}

/* ─── Main component ────────────────────────────────────────────── */
export default function GalleryHero() {
  /* Lenis smooth scroll */
  const lenisRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  /* Scroll trigger — pin the section and drive progress 0 → 1 */
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* Smooth progress spring */
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  /* Hero text fades out as gallery fans open */
  const textOpacity = useTransform(progress, [0, 0.4], [1, 0]);
  const textY       = useTransform(progress, [0, 0.4], [0, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "250vh" }} /* tall section creates the scroll room */
    >
      {/* Sticky container that stays in view while we scroll */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#f0ece8] flex flex-col items-center justify-start pt-12">

        {/* ── Hero copy ─────────────────────────────────────────── */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 text-center px-4 mb-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
            Today's Pick
          </p>
          <h1
            className="font-black uppercase leading-none text-gray-900"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontFamily: "'Nunito', sans-serif" }}
          >
            Award Winning<br />Creators
          </h1>
          <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Explore a collection where art and design merge to shape what's
            next. <strong>This gallery isn't just about visuals.</strong>
          </p>
          <button
            className="mt-6 inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700
                       text-white font-semibold text-sm px-7 py-3 rounded-full
                       transition-colors duration-200 cursor-pointer"
          >
            Start for Free
          </button>
        </motion.div>

        {/* ── 3-D fan gallery ───────────────────────────────────── */}
        <div
          className="relative flex-1 w-full flex items-center justify-center"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 40%" }}
        >
          <div style={{ transformStyle: "preserve-3d", position: "relative" }}>
            {GALLERY_IMAGES.map((img, i) => (
              <GalleryCard
                key={i}
                image={img}
                config={CARD_CONFIG[i]}
                progress={progress}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom gradient scrim ──────────────────────────────── */}
        <div
          className="pointer-events-none absolute bottom-0 inset-x-0 h-24"
          style={{
            background:
              "linear-gradient(to top, #f0ece8 0%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
