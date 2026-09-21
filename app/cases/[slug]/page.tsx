import type { Metadata } from "next"; import { notFound } from "next/navigation"; import { CaseDetailPage } from "../../section-pages"; import { caseItemsPt } from "../../site-content";
export function generateStaticParams(){return caseItemsPt.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=caseItemsPt.find(x=>x.slug===slug);return item?{title:`${item.title} — Case RARVOR`,description:item.summary}:{} }
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=caseItemsPt.find(x=>x.slug===slug);if(!item)notFound();return <CaseDetailPage lang="pt" item={item}/>}
