import type { Metadata } from "next";
import { CasesPage } from "../section-pages";
export const metadata: Metadata = { title: "Cases e resultados", description: "Transformações empresariais anonimizadas: contexto, movimento e evidência." };
export default function Page(){ return <CasesPage lang="pt" />; }
