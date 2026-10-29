// 사이트에 들어가는 내용은 전부 여기서 수정. 출처: 송현규_이력서_범용.md, 송현규_경력기술서_씨드로닉스.pdf
export const profile = {
  email: "kuu0528888@gmail.com",
  github: "https://github.com/singsangsong28",
  // 노션 "Song's Develop's Log Book" 웹 게시 주소. 비워 두면 링크가 숨겨짐.
  notion: "https://languid-squid-a81.notion.site/Song-s-Develop-s-Log-Book-38f89958ad9c81629918e9c969b9e871",
};

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript"] },
  { group: "Frontend", items: ["React", "Next.js (App Router)", "TanStack Query", "Tailwind CSS", "Framer Motion"] },
  { group: "Backend", items: ["Express.js", "Prisma ORM", "Zod", "PostgreSQL", "MongoDB"] },
  { group: "Infra / Security", items: ["AWS IAM", "AWS Systems Manager Parameter Store (SecureString / KMS)"] },
  { group: "Tools & Collaboration", items: ["Git", "Swagger", "DBeaver", "Figma", "CodeRabbit", "Vercel", "Render", "AWS", "Supabase", "Cloudflare"] },
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
  when: "2026.08.26 – 2026.10.16",
  tag: "Team Project · Codeit 고급 프로젝트 · 2026.08.26 – 2026.10.16",
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
  // 노션 "Moving — 이사 견적 매칭 플랫폼" 웹 게시 주소. 비워 두면 버튼이 숨겨짐.
  docs: "https://languid-squid-a81.notion.site/Moving-3fe89958ad9c8190b8d9e17b41430f11",
};

export const rehearview = {
  when: "2026.10.28 –",
  stack: ["TypeScript", "Next.js", "Express", "Prisma", "PostgreSQL", "Zod"],
  site: "https://www.rehearview.shop",
  repo: "https://github.com/singsangsong28/rehearview-fe",
  // 노션 Rehearview 페이지 웹 게시 주소. 비워 두면 버튼이 숨겨짐.
  docs: "",
};

// Works에 설명 없이 배포 주소만 나열
export const otherWorks = [
  { name: "공부의 숲", when: "2026.05.18 – 2026.06.08", stack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "Zod"], url: "https://13-study-forest-team2-fe.netlify.app/", repo: "https://github.com/damdadaxx/13-study-forest-team2-fe" },
  { name: "최애의 포토", when: "2026.07.08 – 2026.07.31", stack: ["Next.js", "React", "Node.js", "Express", "Prisma", "PostgreSQL"], url: "https://13-favorite-photo-4-fe-82g5.vercel.app/", repo: "https://github.com/jin-story/13-favorite-photo-4-FE" },
];

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
    tag: "Moving · Payment",
    title: "결제 승인 API에서 클라이언트 값을 믿지 않기",
    body: "토스 결제 성공 URL의 금액과 주문 정보는 주소창에서 바꿀 수 있어서, 승인 전에 서버가 계산한 기준 금액과 주문번호 규칙으로 먼저 비교해 틀린 요청이 토스에 닿지 않게 했습니다. 이중 결제는 상태 조건을 건 updateMany의 갱신 행 수로 막았습니다. 키가 없는 로컬 편의 모드에서 가짜 paymentKey가 결제 완료로 통과하는 사고도 직접 겪었고, 이를 배포 전 위험으로 기록했습니다.",
  },
  {
    tag: "Moving · Realtime",
    title: "SSE로 채팅을 만들고, 신호만 보내기",
    body: "알림에 쓰던 SSE 연결 하나를 채팅과 함께 쓰도록 넓혔습니다. 서버는 본문 대신 새 메시지가 있다는 신호만 보내고, 브라우저가 API로 내용을 다시 받습니다. 알림 문구를 조회 때 조립하는 규칙이 두 곳으로 갈라지는 걸 피하고, 신호가 유실돼도 재조회로 맞춰지게 하려는 선택이었습니다. 신호는 트랜잭션이 커밋된 뒤에만 발행해 롤백된 알림이 클라이언트에 나가지 않게 했고, 서버 1대 전제라는 한계도 문서에 남겼습니다.",
  },
  {
    tag: "Moving · Security",
    title: "로그인 봇 검증을 rate limit보다 앞에 두기",
    body: "계정별 rate limit만으로는 계정을 바꿔 가며 시도하는 요청을 막지 못해 Cloudflare Turnstile을 도입했습니다. 검증을 rate limit 앞에 둔 이유는 뒤에 두면 봇이 남의 계정 시도 횟수를 먼저 소진시켜 정상 사용자를 잠글 수 있기 때문입니다. 서버는 검증 호출이 실패하면 막는 fail-closed로 두었고, 요청 자체를 못 받게 하지는 못한다는 한계도 함께 적었습니다.",
  },
  {
    tag: "Moving · Auth",
    title: "클라이언트 훅 가드를 서버 컴포넌트 가드로",
    body: "useEffect 안에서 하는 route guard는 화면이 그려진 뒤에 판정해서 보호된 화면이 잠깐 보이고, 캐시된 상태가 낡으면 잘못 보낼 수도 있습니다. 그래서 판정은 서버 레이아웃에서 redirect()로 하고, 진짜 방어선은 BE의 requireAuth와 requireRole에 두었습니다. FE 가드는 어디까지가 안내용인지 먼저 정한 셈입니다.",
  },
  {
    tag: "Moving · Review",
    title: "AI 리뷰를 그대로 받아들이지 않기",
    body: "직접 도입한 CodeRabbit이 IP 기반 rate limiting에 인증이 없다고 지적했을 때, 그 라우트의 유일한 비로그인 경로가 배포 전에 삭제될 쇼케이스 페이지라는 근거로 반박하고 이후 제시된 대안을 검토했습니다.",
  },
  {
    tag: "Rehearview · LLM",
    title: "무료 티어 한도에 걸려도 에러를 보여 주지 않기",
    body: "결제수단을 연결하지 않는다는 원칙을 먼저 정했고, 그 안에서 면접이 끊기지 않는 방법을 찾았습니다. 상위 모델은 하루 20회 한도가 금방 차서 모델을 낮추고, 질문마다 보내는 브리프와 지난 답변의 길이를 제한해 토큰을 줄였습니다. 모든 제공사의 한도가 찼을 때는 에러를 내는 대신 정해진 시간까지 기다렸다 다시 시도하게 했고, 이 대기가 프록시 시간 제한 안에서 실제로 버티는지는 아직 검증이 남았다고 기록했습니다.",
  },
  {
    tag: "Rehearview · Security",
    title: "사용자가 넣은 URL을 서버가 대신 열 때의 SSRF",
    body: "채용 공고 URL을 서버가 대신 가져오는 기능이라, 내부망 주소를 넣으면 서버가 내부 자원을 부르게 됩니다. 기능은 유지하되 요청 전에 대상 IP를 검사해 사설·내부 대역을 막는 쪽을 골랐습니다. 요청에는 undici를 사용했습니다.",
  },
  {
    tag: "Rehearview · Infra",
    title: "프록시를 두 번 거치면 모든 요청이 한 IP로 보인다",
    body: "프론트는 Vercel, 백엔드는 Caddy 뒤에 있어서 백엔드가 모든 요청을 프록시 IP로 봐 IP별 요청 제한이 의미가 없었습니다. Caddy가 Vercel이 넘기는 클라이언트 IP 헤더를 X-Forwarded-For로 옮기고, 백엔드는 프록시 한 단계만 신뢰하도록 설정해 제한이 동작하는 것을 확인했습니다. 백엔드에 직접 요청하면 헤더를 위조할 수 있다는 한계는 그대로 남겨 두고 문서에 적었습니다.",
  },
  {
    tag: "Rehearview · Privacy",
    title: "이력서가 오가는 서비스에서 무료 AI 티어를 쓰는 대가",
    body: "Gemini 무료 티어는 입력과 출력이 제품 개선에 쓰이고 사람이 검토할 수 있다는 점을 공식 약관에서 확인했습니다. 이력서와 자소서가 들어가는 서비스라, 서류 원문을 DB에 저장하지 않고 브라우저에만 두는 쪽으로 설계했습니다. 처리방침에는 국외 이전과 분석 도구의 보관 기간까지 적었고, 공개 전에는 유료 전환이나 별도 고지가 필요하다는 점을 남은 일로 기록했습니다.",
  },
];

export const interests = [
  { title: "AI를 개발 워크플로우에 녹이는 방식", body: "CodeRabbit을 코드리뷰에 도입한 경험에서 출발해, Claude Code 같은 에이전트를 기획·문서화·개발 단계에 쓰며 생산성이 어떻게 달라지는지 지켜보고 있습니다." },
  { title: "제약 속에서의 기술적 선택", body: "무료 티어 호스팅, 짧은 개발 기간, 협업 툴의 보안 한계처럼 이상적이지 않은 조건에서 왜 이 선택을 했는지 설명할 수 있는 과정을 중요하게 여깁니다." },
];
