import type { Metadata } from "next";
import { FaqPage } from "../section-pages";

export const metadata: Metadata = {
  title: "FAQ para empresas",
  description: "Respostas sobre projetos, execução, mensuração, confidencialidade e tecnologia na RARVOR.",
};

export default function Page() { return <FaqPage lang="pt" />; }
