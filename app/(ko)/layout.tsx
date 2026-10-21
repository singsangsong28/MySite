import { RootShell } from "@/components/root-shell";
import { makeMetadata } from "../i18n";
import "../globals.css";

export const metadata = makeMetadata("ko");

export default function KoLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="ko">{children}</RootShell>;
}
