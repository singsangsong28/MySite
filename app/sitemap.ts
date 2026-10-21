import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { ko: "https://singsangssong.com", en: "https://singsangssong.com/en" };
  return [
    { url: languages.ko, lastModified: new Date(), alternates: { languages } },
    { url: languages.en, lastModified: new Date(), alternates: { languages } },
  ];
}
