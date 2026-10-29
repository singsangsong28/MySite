import { Geist, Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
import { Smooth, ProgressBar, BackToTop } from "./motion";

// 구글 애널리틱스 측정 ID. 빌드할 때 환경변수에서 읽고, 없으면 태그가 들어가지 않음.
const gaId = process.env.NEXT_PUBLIC_GA_ID;

const geist = Geist({ variable: "--font-en", subsets: ["latin"] });
const noto = Noto_Sans_KR({ variable: "--font-ko", subsets: ["latin"], weight: ["400", "500", "700", "900"] });

// 언어마다 <html lang>이 달라야 해서 라우트 그룹별 루트 레이아웃이 이 껍데기를 공유함
export function RootShell({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${geist.variable} ${noto.variable}`}>
      <body className="overflow-x-hidden bg-bg leading-[1.7] text-fg antialiased">
        <ProgressBar />
        <Smooth>{children}</Smooth>
        <BackToTop label={lang === "ko" ? "맨 위로" : "Back to top"} />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
