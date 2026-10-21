import Image from "next/image";
import { Lines, Marquee, Reveal, Tilt } from "@/components/motion";
import photo from "@/assets/profile.jpg"; // 정적 import → 해시 파일명(/_next/static/media)으로 장기 캐시 가능
import { profile, skills, timeline, stats, moving, otherWorks, notes, interests } from "./data";

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">singsangssong<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#notes">Notes</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="pill" href={`mailto:${profile.email}`}>연락하기</a>
      </header>

      <main id="top">
        <section className="hero">
          <span className="badge"><b />Open to Opportunities</span>
          <Lines
            className="display"
            lines={["선박의 심장을 다루던 손으로,", <span key="l2">화면을 <em>만듭니다</em>.</span>]}
          />
          <Reveal delay={0.6}>
            <p className="lead">
              컨테이너선 기관사로 장시간 무중단 운항 환경의 모니터링·안전 체계를 운용했습니다.
              지금은 React·Next.js·TypeScript로 화면을, Express·Prisma로 서버를 만들고, 인증·캐시·배포 구조처럼
              눈에 보이지 않는 부분까지 근거를 남기며 설계하는 풀스택 개발자입니다.
            </p>
          </Reveal>
          <div className="scroll">Scroll</div>
        </section>

        <Marquee items={["FULLSTACK", "REACT", "NEXT.JS", "TYPESCRIPT", "EXPRESS", "DETAIL"]} />

        <section id="about" className="block">
          <Reveal><h2>About</h2></Reveal>
          <div className="about">
            <Reveal>
              <div className="portrait">
                <Image src={photo} alt="송현규 증명사진" placeholder="blur" sizes="(max-width: 760px) 280px, 320px" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="big">
                백엔드와 프론트엔드를 모두 다루는 풀스택 개발자입니다.
              </p>
              <p className="muted">
                화면을 만드는 데서 멈추지 않고, 인증 토큰 저장 방식, 캐시 전략, 환경변수 관리 구조 같은 선택지를
                비교하고 근거를 남겨 판단합니다. 작은 판단 착오가 큰 사고로 이어지는 배 위에서 절차를 지키고
                기록하던 습관이 지금도 코드에 그대로 남아 있습니다.
              </p>

              <div className="skillgroups">
                {skills.map((g) => (
                  <div key={g.group}>
                    <small>{g.group}</small>
                    <div className="skills">{g.items.map((s) => <span key={s}>{s}</span>)}</div>
                  </div>
                ))}
              </div>

              <ol className="timeline">
                {timeline.map((t) => (
                  <li key={t.what}>
                    <time>{t.kind} · {t.when}</time>
                    <strong>{t.what}</strong>
                    {t.note && <span>{t.note}</span>}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section id="works" className="block">
          <Reveal><h2>Selected Works</h2></Reveal>
          <div className="works">
            <Reveal className="feature-wrap">
              <Tilt className="feature">
                <div className="thumb" style={{ ["--h" as string]: 18 }}><span>Moving</span></div>
                <div className="meta">
                  <small>{moving.tag}</small>
                  <h3>{moving.title}</h3>
                  <p>{moving.desc}</p>
                  <div className="stats">
                    {stats.map((s) => (
                      <div key={s.l}><b>{s.n}</b><span>{s.l}</span></div>
                    ))}
                  </div>
                  <ul className="role">{moving.role.map((r) => <li key={r}>{r}</li>)}</ul>
                  <div className="chips">{moving.stack.map((s) => <span key={s}>{s}</span>)}</div>
                  <div className="actions">
                    <a className="pill" href={moving.site} target="_blank" rel="noopener noreferrer">사이트 보기 ↗</a>
                    <a className="ghost" href={moving.repo} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                    {moving.docs && <a className="ghost" href={moving.docs} target="_blank" rel="noopener noreferrer">개발 문서 ↗</a>}
                  </div>
                </div>
              </Tilt>
            </Reveal>
            <Reveal>
              <ul className="others">
                {otherWorks.map((w) => (
                  <li key={w.name}>
                    <span>{w.name}</span>
                    <small>{w.when}</small>
                    <a className="url" href={w.url} target="_blank" rel="noopener noreferrer">{w.url.replace(/^https:\/\/|\/$/g, "")} ↗</a>
                  </li>
                ))}
              </ul>
            </Reveal>

          </div>
        </section>

        <section id="notes" className="block">
          <Reveal><h2>Engineering Notes</h2></Reveal>
          <Reveal><p className="big narrow">결과보다 어떤 근거로 선택했는지를 남깁니다.</p></Reveal>
          <div className="notes">
            {notes.map((n, i) => (
              <Reveal key={n.title} delay={(i % 2) * 0.08}>
                <article className="note">
                  <small>{n.tag}</small>
                  <h3>{n.title}</h3>
                  <p>{n.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="block">
          <Reveal><h2>Interests</h2></Reveal>
          <div className="interests">
            {interests.map((x, i) => (
              <Reveal key={x.title} delay={i * 0.08}>
                <h3>{x.title}</h3>
                <p>{x.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="block contact">
          <Reveal>
            <h2>Contact</h2>
            <p className="display sm">같이 일해요.</p>
            <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="links">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href={moving.site} target="_blank" rel="noopener noreferrer">Moving ↗</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="foot">© 2026 singsangssong · singsangssong.com</footer>
    </>
  );
}
