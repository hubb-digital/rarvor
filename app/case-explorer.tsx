"use client";
import { useMemo, useState } from "react";
import type { CaseItem, Language } from "./site-content";

export function CaseExplorer({ items, lang }: { items: readonly CaseItem[]; lang: Language }) {
  const pt = lang === "pt"; const [sector,setSector]=useState("all"); const [challenge,setChallenge]=useState("all");
  const sectors = useMemo(()=>Array.from(new Map(items.map(x=>[x.sectorKey,x.sector])).entries()),[items]);
  const challenges = useMemo(()=>Array.from(new Map(items.map(x=>[x.challengeKey,x.challenge])).entries()),[items]);
  const visible=items.filter(x=>(sector==="all"||x.sectorKey===sector)&&(challenge==="all"||x.challengeKey===challenge));
  const base=pt?"":"/en";
  return <section className="case-explorer section-pad"><div className="case-filters"><div><span>{pt?"FILTRAR POR SEGMENTO":"FILTER BY SECTOR"}</span><div><button className={sector==="all"?"active":""} onClick={()=>setSector("all")}>{pt?"Todos":"All"}</button>{sectors.map(([key,label])=><button className={sector===key?"active":""} onClick={()=>setSector(key)} key={key}>{label}</button>)}</div></div><div><span>{pt?"FILTRAR POR DESAFIO":"FILTER BY CHALLENGE"}</span><div><button className={challenge==="all"?"active":""} onClick={()=>setChallenge("all")}>{pt?"Todos":"All"}</button>{challenges.map(([key,label])=><button className={challenge===key?"active":""} onClick={()=>setChallenge(key)} key={key}>{label}</button>)}</div></div></div><p className="case-count">{String(visible.length).padStart(2,"0")} {pt?"EVIDÊNCIAS ENCONTRADAS":"RESULTS FOUND"}</p><div className="case-cards">{visible.map(item=><a href={base+"/cases/"+item.slug} key={item.slug}><header><span>{item.index}</span><b>{item.sector}</b><em>{item.status}</em></header><strong>{item.metric}</strong><h2>{item.title}</h2><p>{item.summary}</p><footer><span>{item.challenge}</span><b>{pt?"Abrir case":"Open case"} ↗</b></footer></a>)}</div></section>;
}
