"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion";
import Lenis from "lenis";

// Lenis가 html의 scroll-behavior를 auto로 고정해서, 맨 위 이동은 Lenis로 해야 부드럽게 움직임
let lenisInstance: Lenis | null = null;

export function Smooth({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis();
    lenisInstance = lenis;
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
  return <>{children}</>;
}

/** 첫 화면(뷰포트 한 장)을 지나면 나타나는 맨 위로 버튼 */
export function BackToTop({ label }: { label: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      onClick={() => (lenisInstance ? lenisInstance.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }))}
      className={`fixed right-[clamp(16px,3vw,32px)] bottom-[clamp(16px,3vw,32px)] z-50 grid size-14 cursor-pointer place-items-center rounded-full bg-accent text-black shadow-[0_8px_24px_rgba(255,106,61,.45)] transition-[opacity,transform,background-color] duration-300 ease-expo hover:scale-110 hover:bg-fg ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
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
