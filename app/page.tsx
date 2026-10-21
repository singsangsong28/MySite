import Image from "next/image";
import { Lines, Marquee, Reveal, Tilt } from "@/components/motion";
import photo from "@/assets/profile.jpg"; // 정적 import → 해시 파일명(/_next/static/media)으로 장기 캐시 가능
import movingShot from "@/assets/moving.jpg";
import forestShot from "@/assets/study-forest.jpg";
import photoShot from "@/assets/favorite-photo.jpg";
import { profile, skills, timeline, moving, otherWorks, notes, interests } from "./data";

// 썸네일은 각 사이트 첫 화면 캡처 (Edge headless, 1280px 폭)
const shots = [movingShot, forestShot, photoShot];
const works = [
  { name: "Moving", when: moving.when, stack: moving.stack, site: moving.site, repo: moving.repo, docs: moving.docs },
  ...otherWorks.map((w) => ({ name: w.name, when: w.when, stack: w.stack, site: w.url, repo: w.repo, docs: "" })),
];

// 반복해서 쓰는 클래스 묶음
const pad = "px-[clamp(20px,5vw,56px)]";
const block = `mx-auto max-w-[1120px] ${pad} pt-[140px] max-[760px]:pt-24`;
const h2 = "mb-10 text-[.8rem] font-medium uppercase tracking-[.2em] text-muted";
const h3 = "font-bold tracking-[-0.02em]";
const tag = "text-[.78rem] font-medium tracking-[.06em] text-accent";
const display = "font-black leading-[1.12] tracking-[-0.045em]";
const pill =
  "relative z-[2] rounded-full bg-fg px-[18px] py-2 text-[.88rem] font-medium text-black transition-[background-color,transform] duration-[250ms] ease-expo hover:scale-105 hover:bg-accent";
const ghost =
  "relative z-[2] rounded-full border border-line px-[18px] py-2 text-[.88rem] transition-[border-color] duration-200 hover:border-fg";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between ${pad} py-[18px] bg-[linear-gradient(var(--color-bg),transparent)] backdrop-blur-[6px]`}>
        <a href="#top" className="font-black tracking-[-0.02em]">singsangssong<span className="text-accent">.</span></a>
        <nav className="flex gap-8 text-[.92rem] text-muted max-[760px]:hidden">
          {["About", "Works", "Notes", "Contact"].map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="transition-colors duration-200 hover:text-fg">{n}</a>
          ))}
        </nav>
        <a className={pill} href={`mailto:${profile.email}`}>연락하기</a>
      </header>

      <main id="top">
        <section className={`relative flex min-h-svh flex-col justify-center overflow-hidden ${pad} pt-[140px] pb-20 before:absolute before:-top-[10vw] before:-right-[15vw] before:-z-1 before:size-[60vw] before:animate-drift before:bg-[radial-gradient(circle,rgba(255,106,61,.22),transparent_62%)] before:blur-[40px] before:content-['']`}>
          <span className="mb-7 inline-flex items-center gap-2.5 self-start rounded-full border border-line px-4 py-1.5 text-[.82rem] text-muted">
            <b className="size-2 animate-ring rounded-full bg-[#3ecf6e] shadow-[0_0_0_0_rgba(62,207,110,.6)]" />Open to Opportunities
          </span>
          <Lines
            className={`mb-8 text-[clamp(2.4rem,7.2vw,6.4rem)] ${display}`}
            lines={["선박의 심장을 다루던 손으로,", <span key="l2">서비스를 <em className="text-accent not-italic">만듭니다</em>.</span>]}
          />
          <Reveal delay={0.6}>
            <p className="max-w-[560px] text-[1.1rem] text-muted">
              컨테이너선 기관사로 장시간 무중단 운항 환경의 모니터링·안전 체계를 운용했습니다.
              지금은 React·Next.js·TypeScript로 화면을, Express·Prisma로 서버를 만들고, 인증·캐시·배포 구조처럼
              눈에 보이지 않는 부분까지 근거를 남기며 설계하는 풀스택 개발자입니다.
            </p>
          </Reveal>
          <div className={`absolute bottom-8 left-[clamp(20px,5vw,56px)] flex items-center gap-3 text-[.75rem] tracking-[.2em] text-muted uppercase after:h-px after:w-14 after:origin-left after:animate-line after:bg-muted after:content-['']`}>Scroll</div>
        </section>

        <Marquee items={["FULLSTACK", "REACT", "NEXT.JS", "TYPESCRIPT", "EXPRESS", "DETAIL"]} />

        <section id="about" className={block}>
          <Reveal><h2 className={h2}>About</h2></Reveal>
          <div className="grid grid-cols-[320px_1fr] items-start gap-16 max-[760px]:grid-cols-1 max-[760px]:gap-10">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-line max-[760px]:max-w-[280px]">
                <Image src={photo} alt="송현규 증명사진" placeholder="blur" sizes="(max-width: 760px) 280px, 320px" className="size-full object-cover object-[50%_18%]" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-5 text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.5] font-medium tracking-[-0.02em]">
                백엔드와 프론트엔드를 모두 다루는 풀스택 개발자입니다.
              </p>
              <p className="mb-8 text-muted">
                기능을 구현하는 데서 멈추지 않고, 인증 토큰 저장 방식, 캐시 전략, 환경변수 관리 구조 같은 선택지를
                비교하고 근거를 남겨 판단합니다. 작은 판단 착오가 큰 사고로 이어지는 배 위에서 절차를 지키고
                기록하던 습관이 지금도 코드에 그대로 남아 있습니다.
              </p>

              <div className="mb-12 grid gap-4">
                {skills.map((g) => (
                  <div key={g.group}>
                    <small className="mb-2 block text-[.75rem] tracking-[.12em] text-muted uppercase">{g.group}</small>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <span key={s} className="rounded-full border border-line px-4 py-1.5 text-[.88rem] transition-[border-color,color] duration-200 hover:border-accent hover:text-accent">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <ol className="grid gap-8 border-l border-line pl-6">
                {timeline.map((t) => (
                  <li key={t.what} className="relative grid gap-0.5 before:absolute before:top-2.5 before:-left-[29px] before:size-[9px] before:rounded-full before:bg-accent before:content-['']">
                    <time className="text-[.8rem] tracking-[.08em] text-accent">{t.kind} · {t.when}</time>
                    <strong className="text-[1.1rem]">{t.what}</strong>
                    {t.note && <span className="text-[.92rem] text-muted">{t.note}</span>}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section id="works" className={block}>
          <Reveal><h2 className={h2}>Selected Works</h2></Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {works.map((w, i) => (
              <Reveal key={w.name} className="flex" delay={i * 0.08}>
                <Tilt className="flex flex-1 flex-col">
                  <div className="relative grid aspect-[16/10] place-items-center overflow-hidden bg-[#0f0f11] transition-transform duration-[600ms] ease-expo after:absolute after:inset-0 after:bg-[rgba(11,11,12,.7)] after:transition-colors after:duration-[400ms] after:content-[''] group-hover:scale-[1.06] group-hover:after:bg-[rgba(11,11,12,.4)]">
                    <Image src={shots[i]} alt={`${w.name} 첫 화면`} placeholder="blur" sizes="(max-width: 760px) 100vw, 400px" className="absolute inset-0 size-full object-cover object-top" />
                    <span className="relative z-[1] text-[clamp(2.4rem,6vw,3.6rem)] font-black tracking-[-0.04em] opacity-90">{w.name}</span>
                  </div>
                  <div className="relative flex flex-1 flex-col px-[22px] pt-5 pb-6">
                    <small className={tag}>{w.when}</small>
                    <h3 className={`my-1 text-[1.2rem] ${h3}`}>{w.name}</h3>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {w.stack.map((s) => (
                        <span key={s} className="rounded-full border border-line px-3 py-0.5 text-[.78rem] text-muted">{s}</span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                      <a className={pill} href={w.site} {...ext}>사이트 보기 ↗</a>
                      {w.repo && <a className={ghost} href={w.repo} {...ext}>GitHub ↗</a>}
                      {w.docs && <a className={ghost} href={w.docs} {...ext}>개발 문서 ↗</a>}
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
          {profile.notion && (
            <Reveal>
              <a className="mt-6 inline-block border-b border-line pb-0.5 text-muted transition-[color,border-color] duration-200 hover:border-fg hover:text-fg" href={profile.notion} {...ext}>프로젝트 전체 기록 보기 ↗</a>
            </Reveal>
          )}
        </section>

        <section id="notes" className={block}>
          <Reveal><h2 className={h2}>Engineering Notes</h2></Reveal>
          <Reveal><p className="mb-10 max-w-[640px] text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.5] font-medium tracking-[-0.02em]">결과보다 어떤 근거로 선택했는지를 남깁니다.</p></Reveal>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5">
            {notes.map((n, i) => (
              <Reveal key={n.title} delay={(i % 2) * 0.08}>
                <article className="h-full rounded-[20px] border border-line bg-card p-7 transition-[border-color,transform] duration-300 ease-expo hover:-translate-y-[3px] hover:border-[#3a3a3d]">
                  <small className={tag}>{n.tag}</small>
                  <h3 className={`mt-1.5 mb-3 text-[1.15rem] leading-[1.4] ${h3}`}>{n.title}</h3>
                  <p className="text-[.92rem] text-muted">{n.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={block}>
          <Reveal><h2 className={h2}>Interests</h2></Reveal>
          <div className="grid grid-cols-2 gap-12 max-[760px]:grid-cols-1 max-[760px]:gap-10">
            {interests.map((x, i) => (
              <Reveal key={x.title} delay={i * 0.08}>
                <h3 className={`mb-2 text-[1.15rem] ${h3}`}>{x.title}</h3>
                <p className="text-[.95rem] text-muted">{x.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className={`${block} pb-[140px]`}>
          <Reveal>
            <h2 className={h2}>Contact</h2>
            <p className={`mt-2 mb-7 text-[clamp(2.2rem,6vw,4.6rem)] ${display}`}>같이 일해요.</p>
            <a className="inline-block border-b border-muted pb-1 text-[clamp(1.1rem,3vw,1.8rem)] transition-[color,border-color] duration-200 hover:border-accent hover:text-accent" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="mt-7 flex gap-6 text-muted [&>a:hover]:text-fg">
              <a href={profile.github} {...ext}>GitHub ↗</a>
              <a href={moving.site} {...ext}>Moving ↗</a>
              {profile.notion && <a href={profile.notion} {...ext}>Notion ↗</a>}
            </div>
          </Reveal>
        </section>
      </main>

      <footer className={`border-t border-line ${pad} py-7 text-[.82rem] text-muted`}>© 2026 singsangssong · singsangssong.com</footer>
    </>
  );
}
