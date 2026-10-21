import { Geist, Noto_Sans_KR } from "next/font/google";
import { Smooth, ProgressBar } from "./motion";

const geist = Geist({ variable: "--font-en", subsets: ["latin"] });
const noto = Noto_Sans_KR({ variable: "--font-ko", subsets: ["latin"], weight: ["400", "500", "700", "900"] });

// 언어마다 <html lang>이 달라야 해서 라우트 그룹별 루트 레이아웃이 이 껍데기를 공유함
export function RootShell({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${geist.variable} ${noto.variable}`}>
      <body className="overflow-x-hidden bg-bg leading-[1.7] text-fg antialiased">
        <ProgressBar />
        <Smooth>{children}</Smooth>
      </body>
    </html>
  );
}
