import { nav, type Language } from "./site-content";
import { whatsappLink } from "./contact";

const Arrow = () => <span aria-hidden="true">↗</span>;

export function SiteHeader({ lang, current }: { lang: Language; current?: string }) {
  const pt = lang === "pt";
  const whatsapp = whatsappLink(lang);
  return <header className="site-header">
    <a className="brand-logo" href={pt ? "/" : "/en"} aria-label="RARVOR — início"><img src="/brand/wordmark-negative.svg" alt="RARVOR" /></a>
    <nav className="desktop-nav" aria-label={pt ? "Navegação principal" : "Main navigation"}>{nav[lang].map(([label, href]) => <a className={current === href ? "active" : ""} key={href} href={href}>{label}</a>)}</nav>
    <div className="header-actions"><a className="language-switch" href={pt ? "/en" : "/"}>{pt ? "EN" : "PT"}</a><a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">{pt ? "Vamos conversar" : "Let's talk"}<Arrow /></a><details className="mobile-menu"><summary aria-label={pt ? "Abrir menu" : "Open menu"}><i /><i /></summary><div>{nav[lang].map(([label, href]) => <a key={href} href={href}>{label}<Arrow /></a>)}<a href={pt ? "/faq" : "/en/faq"}>FAQ<Arrow /></a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp<Arrow /></a></div></details></div>
  </header>;
}

export function SiteFooter({ lang }: { lang: Language }) {
  const pt = lang === "pt"; const base = pt ? "" : "/en";
  const whatsapp = whatsappLink(lang);
  const links = pt ? [["Soluções","/solucoes"],["Tecnologia","/tecnologia"],["Cases","/cases"],["Sobre","/sobre"],["Insights","/blog"],["FAQ","/faq"]] : [["Solutions","/en/solutions"],["Technology","/en/technology"],["Cases","/en/cases"],["About","/en/about"],["Insights","/en/insights"],["FAQ","/en/faq"]];
  return <footer><div className="footer-intro"><a className="footer-logo" href={base || "/"}><img src="/brand/wordmark-negative.svg" alt="RARVOR" /></a><p>{pt ? "Estratégia, inteligência e tecnologia ao lado de quem decide." : "Strategy, intelligence and technology alongside decision-makers."}</p></div><div className="footer-nav">{links.map(([label,href]) => <a key={href} href={href}>{label}</a>)}</div><div className="footer-contact"><span>{pt ? "RIO DE JANEIRO · SÃO PAULO · BRASIL" : "RIO DE JANEIRO · SÃO PAULO · BRAZIL"}</span><a href="mailto:dugoni@rarvorsh.com">dugoni@rarvorsh.com</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp · +55 21 97824-7667 ↗</a><a href="https://www.linkedin.com/company/rarvor/" rel="noreferrer" target="_blank">LinkedIn ↗</a></div><small>© 2026 RARVOR Strategy House · {pt ? "Confidencialidade por princípio." : "Confidentiality by principle."}</small></footer>;
}

export function PageTop({ lang, current, overline, title, intro }: { lang: Language; current: string; overline: string; title: string; intro: string }) {
  return <><SiteHeader lang={lang} current={current} /><section className="page-top inverse"><div className="page-grid" aria-hidden="true"><span /><span /><span /><span /></div><p className="page-overline">{overline}</p><h1>{title}</h1><p className="page-intro">{intro}</p><img className="page-symbol" src="/brand/symbol-negative.svg" alt="" /></section></>;
}

export function ContactBand({ lang }: { lang: Language }) {
  const pt = lang === "pt";
  return <section className="contact-band inverse" id="contato"><span>{pt ? "PRÓXIMO MOVIMENTO" : "NEXT MOVEMENT"}</span><h2>{pt ? "Traga o problema. A leitura começa aqui." : "Bring the problem. The reading starts here."}</h2><a href={whatsappLink(lang)} target="_blank" rel="noreferrer">{pt ? "Conversar pelo WhatsApp" : "Talk on WhatsApp"}<Arrow /></a></section>;
}
