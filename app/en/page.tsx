import type { Metadata } from "next";
import StrategySite from "../strategy-site";

export const metadata: Metadata = {
  title: "Business Intelligence Consultancy",
  description: "The intelligent infrastructure beside decision-makers. We understand the whole, guide the decision and mobilize the solution.",
};

export default function EnglishHome() {
  return <StrategySite lang="en" />;
}
