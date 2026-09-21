import type { Metadata } from "next";
import { CasesPage } from "../../section-pages";
export const metadata: Metadata = { title: "Cases and results", description: "Anonymized business transformations: context, movement and evidence." };
export default function Page(){ return <CasesPage lang="en" />; }
