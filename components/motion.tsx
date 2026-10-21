"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion";
import Lenis from "lenis";

export function Smooth({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis();
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div className="fixed inset-x-0 top-0 z-100 h-0.5 origin-left bg-accent" style={{ scaleX }} />;
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** 한 줄씩 마스크에서 올라오는 헤드라인 */
export function Lines({ lines, className }: { lines: ReactNode[]; className?: string }) {
  return (
    <h1 className={className}>
      {lines.map((line, i) => (
        <span className="block overflow-hidden pb-[.08em]" key={i}>
          <motion.span
            style={{ display: "block" }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line py-[22px] whitespace-nowrap" aria-hidden>
      <motion.div
        className="inline-flex text-[clamp(1.4rem,3vw,2.2rem)] font-black tracking-[.04em]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {row.map((t, i) => (
          <span key={i} className="mr-9 inline-flex items-center gap-9">
            {t}
            <i className="text-[.5em] text-accent not-italic">●</i>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/** 마우스를 따라 빛이 움직이는 카드 + 약한 3D 기울기 */
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateY = useTransform(mx, [0, 1], [-6, 6]);
  const rotateX = useTransform(my, [0, 1], [6, -6]);
  const glow = useTransform(
    [mx, my],
    ([x, y]) => `radial-gradient(420px circle at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(255,106,61,.18), transparent 60%)`,
  );

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden rounded-[20px] border border-line bg-card transition-[border-color] duration-300 hover:border-[#3a3a3d] ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      whileHover={{ scale: 1.015 }}
    >
      <motion.div className="pointer-events-none absolute inset-0 z-1" style={{ background: glow }} />
      {children}
    </motion.div>
  );
}
