import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { InsightsPageClient } from "@/components/pages/InsightsPageClient";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Writing on payments, banking, digital assets, AI, and transformation from Martin Fernando Mora.",
  alternates: { canonical: `${siteConfig.url}/insights` },
};

export default function InsightsPage() {
  return <InsightsPageClient />;
}
