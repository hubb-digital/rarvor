import type { Metadata } from "next";
import { BlogPage } from "../section-pages";
export const metadata: Metadata = { title: "Insights", description: "Leituras sobre estratégia, negócios e tecnologia para quem decide." };
export default function Page(){ return <BlogPage lang="pt" />; }
