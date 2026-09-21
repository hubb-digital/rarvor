import type { Metadata } from "next";
import { BlogPage } from "../../section-pages";
export const metadata: Metadata = { title: "Insights", description: "Readings on strategy, business and technology for decision-makers." };
export default function Page(){ return <BlogPage lang="en" />; }
