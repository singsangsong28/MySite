import type { Metadata } from "next";
import { Geist, Noto_Sans_KR } from "next/font/google";
import { Smooth, ProgressBar } from "@/components/motion";
import "./globals.css";

const geist = Geist({ variable: "--font-en", subsets: ["latin"] });
const noto = Noto_Sans_KR({ variable: "--font-ko", subsets: ["latin"], weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://singsangssong.com"),
  title: "송현규 | 풀스택 개발자",
  description: "선박기관사에서 풀스택 개발자로. 송현규의 포트폴리오.",
  openGraph: { title: "송현규 | 풀스택 개발자", description: "선박기관사에서 풀스택 개발자로.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${geist.variable} ${noto.variable}`}>
      <body className="overflow-x-hidden bg-bg leading-[1.7] text-fg antialiased">
        <ProgressBar />
        <Smooth>{children}</Smooth>
      </body>
    </html>
  );
}
