// 영문판 내용. 형태는 data.ts와 같고, 링크·기술 스택처럼 언어와 무관한 값은 그대로 가져옴.
import { moving, otherWorks as otherWorksKo, profile, rehearview, skills } from "./data";

export { moving, profile, rehearview, skills };

export const timeline = [
  { kind: "Education", when: "Completed 2026.10", what: "Codeit Bootcamp, Full-stack Course", note: "A curriculum that covers React/Next.js frontend and Express/Prisma backend together. Learned server-state management with TanStack Query and applied it in mission projects." },
  { kind: "Career", when: "2020.11 – 2024.09", what: "Marine engineer on a container ship", note: "Operated engine monitoring and alarm systems on long, non-stop voyages, following safety procedures and judging equipment status in real time under a 24-hour watch system." },
  { kind: "Training", when: "At-sea training", what: "Oil/chemical tanker training", note: "Practiced safety protocols aboard ships that carry hazardous cargo." },
  { kind: "Education", when: "2018.03 – 2021.02", what: "Graduated from Busan Maritime High School", note: "" },
];

const names = ["Study Forest", "Bias Photo"];
export const otherWorks = otherWorksKo.map((w, i) => ({ ...w, name: names[i] }));

export const notes = [
  {
    tag: "Moving · Security",
    title: "Moving plaintext-shared environment variables to AWS Parameter Store",
    body: "I pointed out that sharing API keys and DB credentials over Discord and Notion leaves a permanent record and gives no way to split permissions. I used String and SecureString (KMS) according to how risky each value is to expose, and chose a group IAM policy over per-person ones so it keeps working when team members change.",
  },
  {
    tag: "Moving · Debugging",
    title: "Finding the cause of a hydration mismatch instead of hiding the warning",
    body: "After ruling out suspects one by one, starting with the responsive hook, I confirmed that Math.sin and Math.cos return results that differ in the last decimal digits between Node and the browser. Instead of suppressHydrationWarning, I rounded both sides to six decimal places, and I recorded the cost of the larger image size too.",
  },
  {
    tag: "Moving · Payment",
    title: "Not trusting client values in the payment approval API",
    body: "The amount and order info in the Toss payment success URL can be edited in the address bar, so before approving I compared them with the amount the server calculates and the order number rule. A wrong request never reaches Toss. I blocked double payment with the updated-row count of an updateMany guarded by a status condition. I also hit an incident in the local convenience mode, where a fake paymentKey went through as paid when no key was set, and I recorded it as a pre-release risk.",
  },
  {
    tag: "Moving · Realtime",
    title: "Building chat on SSE and sending only a signal",
    body: "I widened the single SSE connection used for notifications to carry chat as well. The server sends only a signal that a new message exists, and the browser fetches the content again through the API. I chose this so the rule for assembling notification text does not split across two places, and so a lost signal is fixed by re-fetching. Signals are published only after the transaction commits, so rolled-back notifications never reach clients, and I wrote the single-server assumption down as a known limit.",
  },
  {
    tag: "Moving · Security",
    title: "Putting bot verification before the rate limit",
    body: "A per-account rate limit alone cannot stop requests that rotate through accounts, so I introduced Cloudflare Turnstile. I put the check before the rate limit because, placed after it, a bot could use up other people's attempt counts and lock out real users. The server fails closed when the verification call fails, and I noted the limit that it cannot stop the requests from arriving in the first place.",
  },
  {
    tag: "Moving · Auth",
    title: "From a client hook guard to a server component guard",
    body: "A route guard inside useEffect decides after the screen is painted, so a protected screen can flash, and a stale cache can send people to the wrong place. So the decision is made in a server layout with redirect(), and the real line of defense is the backend's requireAuth and requireRole. In effect, I decided up front how far the frontend guard is responsible.",
  },
  {
    tag: "Moving · Review",
    title: "Not accepting AI review as-is",
    body: "When CodeRabbit, which I had introduced, flagged that IP-based rate limiting had no authentication, I pushed back on the grounds that the route's only logged-out path was a showcase page that would be deleted before release, and then reviewed the alternatives it proposed.",
  },
  {
    tag: "Rehearview · LLM",
    title: "Not showing an error when the free tier hits its limit",
    body: "I first set the rule that no payment method gets attached, and looked for a way to keep interviews from breaking within it. The top model hit its 20-calls-a-day limit quickly, so I moved to a lighter model and capped the length of the brief and previous answers sent with each question to cut tokens. When every provider is at its limit, the server waits up to a set time and retries instead of returning an error, and I recorded that it is still unverified whether this wait survives the proxy timeout.",
  },
  {
    tag: "Rehearview · Security",
    title: "SSRF when the server opens a URL the user typed",
    body: "The server fetches a job posting URL on the user's behalf, so an internal address would make it call internal resources. I kept the feature and chose to check the target IP before the request and block private and internal ranges. Requests go through undici.",
  },
  {
    tag: "Rehearview · Infra",
    title: "Behind two proxies, every request looks like one IP",
    body: "The frontend is on Vercel and the backend sits behind Caddy, so the backend saw every request as the proxy's IP and per-IP rate limits meant nothing. Caddy now moves the client IP header that Vercel passes into X-Forwarded-For, and the backend trusts only one proxy hop; I confirmed the limit works. The limit that headers can be forged on direct requests to the backend remains, and I wrote it down.",
  },
  {
    tag: "Rehearview · Privacy",
    title: "The cost of a free AI tier in a service that handles résumés",
    body: "I confirmed in the official terms that the Gemini free tier may use inputs and outputs to improve products and that humans may review them. Since résumés and cover letters go in, I designed it so the original documents are never stored in the DB and stay only in the browser. The privacy policy covers overseas transfer and the analytics retention period, and I logged that moving to a paid tier or adding a separate notice is needed before a public launch.",
  },
];

export const interests = [
  { title: "How AI fits into a development workflow", body: "Starting from adopting CodeRabbit for code review, I'm watching how productivity changes when agents like Claude Code are used across planning, documentation and development." },
  { title: "Technical choices under constraints", body: "I value being able to explain why I made a choice under less-than-ideal conditions: free-tier hosting, short schedules, the security limits of collaboration tools." },
];
