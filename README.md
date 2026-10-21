# singsangssong.com

풀스택 개발자 송현규의 포트폴리오 사이트. 선박기관사에서 풀스택 개발자로 전환한 과정과 팀 프로젝트 Moving의 작업 기록을 담았습니다.

https://singsangssong.com

## 구성

- 소개, 기술 스택, 이력 타임라인
- Selected Works: 팀 프로젝트 Moving 상세, 공부의 숲·최애의 포토 배포 링크
- Engineering Notes: 결제 검증, SSE 채팅, 봇 검증, 인증 가드 등 판단 근거를 남긴 사례

## 기술 스택

Next.js (App Router, `output: "export"` 정적 빌드), TypeScript, Tailwind CSS v4, Framer Motion, Lenis. Vercel로 배포하고 도메인은 Cloudflare DNS로 연결했습니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 정적 결과물이 out/ 에 생성됨
```

## 내용 수정

사이트에 들어가는 문구와 링크는 전부 `app/data.ts` 한 파일에서 고칩니다.

| 항목 | 위치 |
| --- | --- |
| 연락처, GitHub | `profile` |
| 기술 스택 | `skills` |
| 이력 | `timeline` |
| Moving 카드 | `moving` (`docs`에 Notion 문서 URL을 넣으면 "개발 문서" 버튼이 나타남) |
| 그 외 프로젝트 링크 | `otherWorks` |
| Engineering Notes | `notes` |
