import { RootShell } from "@/components/root-shell";
import { makeMetadata } from "../../i18n";
import "../../globals.css";

export const metadata = makeMetadata("en");

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
