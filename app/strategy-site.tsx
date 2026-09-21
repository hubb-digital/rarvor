import type { CSSProperties } from "react";
import { about, cases, faq, home, posts, solutions, technology, type Language } from "./site-content";
import { ContactBand, SiteFooter, SiteHeader } from "./site-frame";
import { whatsappLink } from "./contact";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function StrategySite({ lang }: { lang: Language }) {
  const pt = lang === "pt"; const t = home[lang]; const base = pt ? "" : "/en";
  const caseData = cases[lang].items; const sol = solutions[lang]; const tech = technology[lang]; const person = about[lang];
  const faqItems = faq[lang].groups.flatMap(group => group.items).slice(0, 5);
  return <main lang={t.locale}>
    <SiteHeader lang={lang} current={pt ? "/" : "/en"} />
    <section className="hero" id="top"><div className="hero-grid" aria-hidden="true"><span/><span/><span/><span/><span/><span/></div><div className="hero-meta"><span>{t.eyebrow}</span><span>RIO · SÃO PAULO · BRASIL</span></div><div className="hero-lockup"><img className="signal-mark" src="/brand/symbol-negative.svg" alt=""/><h1>{t.title.map(line=><span key={line}>{line}</span>)}</h1><p>{t.subtitle}</p><div className="hero-actions"><a href={whatsappLink(lang)} target="_blank" rel="noreferrer">{pt ? "Vamos conversar" : "Let's talk"}<Arrow/></a><a href={base+"/cases"}>{t.secondaryCta}<Arrow/></a></div></div><div className="method-strip">{sol.process.map(([title,copy],i)=><a href={base+(pt?"/solucoes":"/solutions")} key={title}><b>0{i+1}</b><strong>{title}</strong><span>{copy}</span></a>)}</div></section>

    <section className="proof-ledger section-pad"><div className="proof-heading"><p className="section-tag">{pt?"EVIDÊNCIAS / RECORTES":"EVIDENCE / SNAPSHOTS"}</p><h2>{pt?"Resultado sem esconder o contexto.":"Results without hiding context."}</h2><p>{pt?"Cada número abaixo preserva a fonte, o período e o limite de atribuição. Nome de cliente só aparece com autorização.":"Every number preserves source, period and attribution limits. Client names only appear with permission."}</p></div><div className="proof-grid">{[["≈ R$ 1,1 mi",pt?"negócios reportados":"reported business",pt?"Serviços financeiros · sem mídia paga":"Financial services · no paid media"],["+46,9%",pt?"visitas ao perfil":"profile visits",pt?"Varejo especializado":"Specialized retail"],["+114%",pt?"visualizações":"views",pt?"Varejo de iluminação":"Lighting retail"],["3º MÊS",pt?"acima da referência":"above benchmark",pt?"Negócio de alto valor":"High-value business"]].map(([metric,label,detail],i)=><article key={metric}><span>0{i+1}</span><strong>{metric}</strong><h3>{label}</h3><p>{detail}</p></article>)}</div><a className="line-link" href={base+"/cases"}>{pt?"Abrir evidências completas":"Open full evidence"}<Arrow/></a></section>

    <section className="entry-system section-pad"><div className="entry-head"><p className="section-tag">{pt?"QUANDO ENTRAMOS":"WHEN WE ENTER"}</p><div><h2>{t.situationsTitle}</h2><p>{t.situationsIntro}</p></div></div><div className="entry-grid">{t.situations.map(([label,title,outcome],i)=><article key={label}><span>0{i+1} / {label}</span><h3>{title}</h3><p>{outcome}</p><i/></article>)}</div></section>

    <section className="solutions-home section-pad"><div className="home-section-head"><p className="section-tag">{pt?"SOLUÇÕES / 05":"SOLUTIONS / 05"}</p><div><h2>{t.solutionTitle}</h2><p>{t.solutionIntro}</p></div><a className="line-link" href={base+(pt?"/solucoes":"/solutions")}>{pt?"Ver arquitetura":"See architecture"}<Arrow/></a></div><div className="solution-routes">{sol.items.map(item=><a href={base+(pt?"/solucoes":"/solutions")+"#"+item.key} key={item.key}><span>{item.number}</span><strong>{item.title}</strong><p>{item.promise}</p><Arrow/></a>)}</div></section>

    <section className="technology-home inverse section-pad"><div><p className="section-tag">RARVOR OS / {pt?"TECNOLOGIA PROPRIETÁRIA":"PROPRIETARY TECHNOLOGY"}</p><h2>{t.technologyTitle}</h2><p>{t.technologyCopy}</p><a className="line-link" href={base+(pt?"/tecnologia":"/technology")}>{pt?"Conhecer o sistema":"Explore the system"}<Arrow/></a></div><div className="os-orbit"><img src="/brand/symbol-negative.svg" alt=""/><span>RARVOR OS</span>{tech.flow.map((item,i)=><b key={item} style={{"--i":i} as CSSProperties}>{item}</b>)}</div></section>

    <section className="home-cases section-pad"><div className="home-section-head"><p className="section-tag">CASES / 07</p><h2>{t.casesTitle}</h2><a className="line-link" href={base+"/cases"}>{t.casesCta}<Arrow/></a></div><div className="case-preview-grid">{caseData.slice(0,4).map(item=><a href={base+"/cases/"+item.slug} key={item.slug}><span>{item.index} / {item.sector}</span><strong>{item.metric}</strong><p>{item.title}</p><i>↗</i></a>)}</div></section>

    <section className="founder-home section-pad"><div className="founder-mark" aria-hidden="true">RD</div><div><p className="section-tag">{pt?"LIDERANÇA / ROMULO DUGONI":"LEADERSHIP / ROMULO DUGONI"}</p><h2>{t.founderTitle}</h2><p>{t.founderCopy}</p><blockquote>{person.thesis}</blockquote><a className="line-link" href={base+(pt?"/sobre":"/about")}>{pt?"Conhecer a trajetória":"Read the story"}<Arrow/></a></div></section>

    <section className="home-blog section-pad"><div className="home-section-head"><p className="section-tag">INSIGHTS / 03</p><h2>{t.blogTitle}</h2><a className="line-link" href={base+(pt?"/blog":"/insights")}>{t.blogCta}<Arrow/></a></div><div className="post-preview-grid">{posts[lang].map((post,i)=><a className={i===0?"featured":""} href={base+(pt?"/blog/":"/insights/")+post.slug} key={post.slug}><span>{post.category} · {post.date}</span><h3>{post.title}</h3><p>{post.excerpt}</p><b>{post.read} ↗</b></a>)}</div></section>

    <section className="home-faq section-pad"><div className="home-section-head"><p className="section-tag">FAQ / {pt?"EMPRESAS":"COMPANIES"}</p><h2>{t.faqTitle}</h2><a className="line-link" href={base+"/faq"}>{t.faqCta}<Arrow/></a></div><div className="faq-preview">{faqItems.map(([question,answer],i)=><details key={question} open={i===0}><summary><span>0{i+1}</span><strong>{question}</strong><i/></summary><p>{answer}</p></details>)}</div></section>
    <ContactBand lang={lang}/><SiteFooter lang={lang}/>
  </main>;
}
