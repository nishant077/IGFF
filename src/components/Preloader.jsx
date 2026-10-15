import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Radial particle ── */
const Particle = ({ angle, dist, size, delay }) => {
  const x = Math.cos(angle) * dist;
  const y = Math.sin(angle) * dist;
  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#FABD32",
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
      }}
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{
        x: [0, x * 0.4, x],
        y: [0, y * 0.4, y],
        opacity: [0, 0.55, 0],
        scale: [0, 1, 0],
      }}
      transition={{ duration: 2.5, delay, repeat: Infinity, ease: "easeOut" }}
    />
  );
};

/* ── Main component ── */
const Preloader = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const particles = useRef(
    Array.from({ length: 16 }, (_, i) => {
      const angle = (i / 16) * Math.PI * 2;
      return {
        angle,
        dist: 110 + (i % 3) * 30,
        size: 2 + (i % 3),
        delay: (i * 0.15) % 1.8,
      };
    })
  ).current;

  useEffect(() => {
    const duration = 2600;
    const step = 100 / (duration / 16);
    const id = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(id);
          setTimeout(() => setIsVisible(false), 600);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, 16);
    return () => clearInterval(id);
  }, []);

  const letters = ["I", "G", "F", "F"];
  const fullFormWords = ["Inter-Generational", "Feminist", "Forum"];

  /* Shared ease for both curtain panels */
  const curtainEase = [0.76, 0, 0.24, 1];

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <>
          {/* ═══════════════════════════════════════
              BACKGROUND: Single solid panel that fills
              the screen. On exit it slides up to reveal 
              the page underneath.
              z-index: 9998  (behind the content layer)
          ═══════════════════════════════════════ */}
          <motion.div
            key="curtain"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: "100vh",
              zIndex: 9998,
              background: "var(--royal-purple)",
            }}
            initial={{ y: 0 }}
            exit={{
              y: "-100vh",
              transition: { duration: 1.2, ease: curtainEase, delay: 0.15 },
            }}
          />

          {/* ═══════════════════════════════════════
              CONTENT LAYER — floats above the panels.
              Background is transparent so the panels below
              act as the solid background during loading.
              z-index: 9999
          ═══════════════════════════════════════ */}
          <motion.div
            key="content"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              overflow: "hidden",
              pointerEvents: "none",
            }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {/* Radial glow — sits on top of the panel bg */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(93,58,93,0.95) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Ambient blobs */}
            <motion.div
              style={{
                position: "absolute",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: "",
                top: "-10%",
                right: "-10%",
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              style={{
                position: "absolute",
                width: 350,
                height: 350,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(93,58,93,0.4) 0%, transparent 70%)",
                bottom: "-8%",
                left: "-8%",
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Particles */}
            {particles.map((p, i) => (
              <Particle key={i} {...p} />
            ))}

            {/* Central content */}
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* IGFF letters */}
              <div style={{ display: "flex", gap: 10, marginBottom: 16, overflow: "hidden" }}>
                {letters.map((letter, i) => (
                  <motion.span
                    key={`${letter}-${i}`}
                    style={{
                      color: "#fff",
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
                      letterSpacing: "0.28em",
                      display: "inline-block",
                      lineHeight: 1,
                    }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.65, delay: 0.3 + i * 0.12, ease: [0.33, 1, 0.68, 1] }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Full form — slow, word-by-word reveal */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "0.4em",
                  marginBottom: 26,
                  padding: "0 24px",
                }}
              >
                {fullFormWords.map((word, i) => (
                  <motion.span
                    key={word}
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(0.85rem, 2vw, 1.15rem)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      display: "inline-block",
                    }}
                    initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 1.1,
                      delay: 1.1 + i * 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Counter */}
              <motion.div
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                <span
                  style={{
                    color: "#FABD32",
                    fontFamily: "monospace",
                    fontSize: "1.35rem",
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "-0.02em",
                    textShadow: "0 0 12px rgba(250,189,50,0.45)",
                  }}
                >
                  {Math.round(counter).toString().padStart(3, "0")}
                  <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem" }}>%</span>
                </span>
                <motion.span
                  style={{
                    color: "rgba(255,255,255,0.25)",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.38em",
                    fontWeight: 300,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  Initializing
                </motion.span>
              </motion.div>

              {/* Progress bar */}
              <div
                style={{
                  marginTop: 14,
                  width: 200,
                  height: 1,
                  background: "rgba(255,255,255,0.08)",
                  overflow: "hidden",
                  borderRadius: 1,
                }}
              >
                <motion.div
                  style={{ height: "100%", background: "linear-gradient(90deg, #FABD32, #FDE68A)", borderRadius: 1 }}
                  initial={{ width: 0 }}
                  animate={{ width: `${counter}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Preloader;