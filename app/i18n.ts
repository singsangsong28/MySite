import type { Metadata } from "next";
import * as ko from "./data";
import * as en from "./data.en";

export type Locale = "ko" | "en";

export const data = { ko, en };

// 화면에 직접 쓰이는 문구. 이력·노트 같은 긴 내용은 data.ts / data.en.ts에 있음.
export const ui = {
  ko: {
    contactBtn: "연락하기",
    heroLine1: "선박의 심장을 다루던 손으로,",
    heroPre: "서비스를 ",
    heroEm: "만듭니다",
    heroPost: ".",
    lead:
      "컨테이너선 기관사로 장시간 무중단 운항 환경의 모니터링·안전 체계를 운용했습니다. 지금은 React·Next.js·TypeScript로 화면을, Express·Prisma로 서버를 만들고, 인증·캐시·배포 구조처럼 눈에 보이지 않는 부분까지 근거를 남기며 설계하는 풀스택 개발자입니다.",
    name: "송현규",
    nameSub: "Hyeongyu Song",
    aboutBig: "백엔드와 프론트엔드를 모두 다루는 풀스택 개발자입니다.",
    aboutBody:
      "기능을 구현하는 데서 멈추지 않고, 인증 토큰 저장 방식, 캐시 전략, 환경변수 관리 구조 같은 선택지를 비교하고 근거를 남겨 판단합니다. 작은 판단 착오가 큰 사고로 이어지는 배 위에서 절차를 지키고 기록하던 습관이 지금도 코드에 그대로 남아 있습니다.",
    photoAlt: "송현규 증명사진",
    viewSite: "사이트 보기 ↗",
    docs: "개발 문서 ↗",
    fullLog: "프로젝트 전체 기록 보기 ↗",
    shotAlt: (n: string) => `${n} 첫 화면`,
    notesBig: "결과보다 어떤 근거로 선택했는지를 남깁니다.",
    contactBig: "같이 일해요.",
    switchLabel: "EN",
    switchHref: "/en",
    switchTitle: "View this site in English",
  },
  en: {
    contactBtn: "Contact me",
    heroLine1: "With the hands that once tended a ship's engine,",
    heroPre: "I ",
    heroEm: "build services",
    heroPost: ".",
    lead:
      "I worked as a marine engineer on container ships, running monitoring and safety systems for long, non-stop voyages. Now I'm a full-stack developer: I build screens with React, Next.js and TypeScript and servers with Express and Prisma, and I design the invisible parts, like authentication, caching and deployment, with my reasoning on record.",
    name: "Hyeongyu Song",
    nameSub: "송현규",
    aboutBig: "I'm a full-stack developer who works on both the backend and the frontend.",
    aboutBody:
      "I don't stop at making features work. I compare options such as where to store auth tokens, caching strategy and how to manage environment variables, and I decide with the reasons written down. On a ship, a small misjudgment can become a serious accident, and the habit of following procedure and keeping records there still shows up in my code.",
    photoAlt: "Portrait of Hyeongyu Song",
    viewSite: "View site ↗",
    docs: "Dev docs ↗",
    fullLog: "Read the full project log ↗",
    shotAlt: (n: string) => `${n} landing page`,
    notesBig: "I record why I chose something, not just what came out.",
    contactBig: "Let's work together.",
    switchLabel: "KO",
    switchHref: "/",
    switchTitle: "한국어로 보기",
  },
};

const meta = {
  ko: {
    title: "송현규 | 풀스택 개발자",
    description: "선박기관사에서 풀스택 개발자로. 송현규의 포트폴리오.",
    ogDescription: "선박기관사에서 풀스택 개발자로.",
    ogLocale: "ko_KR",
  },
  en: {
    title: "Hyeongyu Song | Full-stack Developer",
    description: "From marine engineer to full-stack developer. Hyeongyu Song's portfolio.",
    ogDescription: "From marine engineer to full-stack developer.",
    ogLocale: "en_US",
  },
};

export function makeMetadata(locale: Locale): Metadata {
  const m = meta[locale];
  return {
    metadataBase: new URL("https://singsangssong.com"),
    title: m.title,
    description: m.description,
    openGraph: { title: m.title, description: m.ogDescription, type: "website", locale: m.ogLocale, url: locale === "ko" ? "/" : "/en" },
    alternates: { canonical: locale === "ko" ? "/" : "/en", languages: { ko: "/", en: "/en" } },
  };
}
