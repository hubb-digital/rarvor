import type { Metadata } from "next";
import { FaqPage } from "../../section-pages";

export const metadata: Metadata = {
  title: "FAQ for companies",
  description: "Answers about engagements, execution, measurement, confidentiality and technology at RARVOR.",
};

export default function Page() { return <FaqPage lang="en" />; }
