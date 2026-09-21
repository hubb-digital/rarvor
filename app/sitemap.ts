import type { MetadataRoute } from "next";
import { caseItemsPt, posts } from "./site-content";
import { siteUrl } from "./site-url";
export default function sitemap():MetadataRoute.Sitemap{const routes=["","/solucoes","/tecnologia","/cases","/sobre","/blog","/faq","/en","/en/solutions","/en/technology","/en/cases","/en/about","/en/insights","/en/faq",...caseItemsPt.flatMap(x=>[`/cases/${x.slug}`,`/en/cases/${x.slug}`]),...posts.pt.map(x=>`/blog/${x.slug}`),...posts.en.map(x=>`/en/insights/${x.slug}`)];return routes.map(route=>({url:siteUrl+route,lastModified:new Date("2026-09-16"),changeFrequency:route.includes("blog")||route.includes("insights")?"monthly":"weekly",priority:route===""?1:route.includes("cases") ? .8 : .7}))}
