import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "RARVOR — Estratégia e Inteligência Empresarial", template: "%s | RARVOR" },
  description: "Consultoria de estratégia e inteligência empresarial. Organizamos decisões e mobilizamos tecnologia e especialistas para empresas em movimento.",
  keywords: ["consultoria estratégica", "inteligência empresarial", "estratégia de crescimento", "posicionamento", "tecnologia empresarial", "RARVOR"],
  alternates: {
    languages: { "pt-BR": "/", en: "/en" },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: { type: "website", locale: "pt_BR", siteName: "RARVOR Strategy House", title: "RARVOR — Inteligência para empresas em movimento", description: "Estratégia, inteligência e tecnologia ao lado de quem decide." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"RARVOR Strategy House",url:siteUrl,email:"dugoni@rarvorsh.com",founder:{"@type":"Person",name:"Romulo Dugoni"},areaServed:"Brazil"},{"@type":"Person",name:"Romulo Dugoni",jobTitle:"Strategic Advisor",worksFor:{"@type":"Organization",name:"RARVOR Strategy House"}}]})}} />{children}</body>
    </html>
  );
}
