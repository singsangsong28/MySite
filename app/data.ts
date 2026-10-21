// 사이트에 들어가는 내용은 전부 여기서 수정. 출처: 송현규_이력서_범용.md, 송현규_경력기술서_씨드로닉스.pdf
export const profile = {
  email: "kuu0528888@gmail.com",
  github: "https://github.com/singsangsong28",
};

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript"] },
  { group: "Frontend", items: ["React", "Next.js (App Router)", "TanStack Query", "Tailwind CSS", "Framer Motion"] },
  { group: "Backend", items: ["Express.js", "Prisma ORM", "PostgreSQL", "MongoDB"] },
  { group: "Infra / Security", items: ["AWS IAM", "AWS Systems Manager Parameter Store (SecureString / KMS)"] },
  { group: "Tools & Collaboration", items: ["Git (interactive rebase, --force-with-lease)", "Swagger", "DBeaver", "Figma", "CodeRabbit", "Vercel", "Render", "AWS"] },
];

// 이력서에 적힌 것만 넣음. 대학·해기사 면허·자격증은 이력서에 없어서 비워 둠.
// TODO: 추가할 항목은 아래 배열에 { kind, when, what, note } 형태로 넣으면 됨.
export const timeline = [
  { kind: "Education", when: "2026.10 수료", what: "Codeit 부트캠프 풀스택 과정", note: "React/Next.js 프론트엔드와 Express/Prisma 백엔드를 함께 다루는 커리큘럼. TanStack Query 기반 서버 상태관리를 배워 미션 프로젝트에 적용" },
  { kind: "Career", when: "2020.11 – 2024.09", what: "컨테이너선 기관사", note: "장시간 무중단 운항 환경에서 엔진 모니터링·알람 체계 운용, 24시간 교대 근무 체제의 안전 절차와 실시간 상태 판단" },
  { kind: "Training", when: "승선 실습", what: "Oil/Chemical선 실습", note: "위험물 운반 선박 환경의 안전 프로토콜 실습" },
  { kind: "Education", when: "2018.03 – 2021.02", what: "부산해사고등학교 졸업", note: "" },
];

export const stats = [
  { n: "6인", l: "팀 규모 · 부팀장" },
  { n: "20 / 70", l: "작성한 PR / 전체 PR" },
  { n: "86건", l: "남긴 코드 리뷰 코멘트" },
];

export const moving = {
  tag: "Team Project · Codeit 고급 프로젝트 · 2026.08 – 2026.10",
  title: "Moving — 이사 견적 매칭 플랫폼",
  desc: "고객이 이사 유형과 일정을 입력해 견적을 요청하면, 여러 기사님의 견적을 한 화면에서 비교하고 확정하는 서비스. MVP 완료.",
  stack: ["TypeScript", "Next.js", "Express", "Prisma", "PostgreSQL", "AWS"],
  role: [
    "팀 운영: CodeRabbit 도입과 리뷰 정책 수립, 프론트엔드 폴더 구조·컨벤션 문서 작성, ERD 통합",
    "프론트엔드: 라우트 구조·라우팅 가드·디자인 토큰 세팅, 공통 컴포넌트, 견적 요청 페이지, 랜딩 페이지 전체",
    "백엔드: 견적서 제시·확정·조회 API, 기사님 견적 관리 API, 견적 상한 검증 로직",
  ],
  site: "https://www.letsmoving.site",
  repo: "https://github.com/3unbum/13-4-MOVING_FE",
};

// 문제를 어떻게 판단했는지 보여주는 사례. 결과보다 근거를 적음.
export const notes = [
  {
    tag: "Moving · Security",
    title: "평문으로 공유되던 환경변수를 AWS Parameter Store로",
    body: "디스코드와 노션에 API 키와 DB 접속 정보를 공유하면 기록이 영구히 남고 권한을 나눌 수 없다는 점을 짚었습니다. 노출 위험도에 따라 String과 SecureString(KMS)을 나눠 쓰고, 팀원이 바뀌어도 유지되도록 개인별 대신 그룹 IAM 정책을 골랐습니다.",
  },
  {
    tag: "Moving · Debugging",
    title: "경고를 숨기지 않고 hydration mismatch의 원인을 찾기",
    body: "반응형 훅 같은 의심 원인부터 하나씩 배제한 끝에, Math.sin과 Math.cos 결과가 Node와 브라우저에서 마지막 소수점 자리가 달라진다는 걸 확인했습니다. suppressHydrationWarning 대신 양쪽 값을 소수점 6자리로 반올림해 맞췄고, 이미지 용량이 늘어나는 비용도 함께 기록했습니다.",
  },
  {
    tag: "최애의 포토 · Auth",
    title: "refresh token 해싱을 bcrypt에서 SHA-256으로",
    body: "해싱 비용과 타이밍 공격 방지를 동시에 만족해야 하는 지점에서 판단을 다시 했습니다. Node crypto의 SHA-256에 timingSafeEqual과 길이 사전 검사를 붙이는 방식으로 바꿨습니다.",
  },
  {
    tag: "판다마켓 · Caching",
    title: "데이터 성격에 맞춘 Next.js 캐싱",
    body: "revalidate, no-store, force-cache를 데이터마다 비교해 적용했습니다. 자주 바뀌지 않는 데이터는 재요청을 줄이고, 최신성이 필요한 데이터는 즉시 반영되도록 나눴습니다.",
  },
  {
    tag: "Moving · Review",
    title: "AI 리뷰를 그대로 받아들이지 않기",
    body: "직접 도입한 CodeRabbit이 IP 기반 rate limiting에 인증이 없다고 지적했을 때, 그 라우트의 유일한 비로그인 경로가 배포 전에 삭제될 쇼케이스 페이지라는 근거로 반박하고 이후 제시된 대안을 검토했습니다.",
  },
];

export const interests = [
  { title: "AI를 개발 워크플로우에 녹이는 방식", body: "CodeRabbit을 코드리뷰에 도입한 경험에서 출발해, Claude Code 같은 에이전트를 기획·문서화·개발 단계에 쓰며 생산성이 어떻게 달라지는지 지켜보고 있습니다." },
  { title: "제약 속에서의 기술적 선택", body: "무료 티어 호스팅, 짧은 개발 기간, 협업 툴의 보안 한계처럼 이상적이지 않은 조건에서 왜 이 선택을 했는지 설명할 수 있는 과정을 중요하게 여깁니다." },
];
