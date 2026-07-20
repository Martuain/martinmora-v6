import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { CaseStudiesPageClient } from "@/components/pages/CaseStudiesPageClient";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real initiatives across banking, payments, digital assets, and fintech. Mobile banking transformation, CBDC innovation, payments ecosystem strategy, and more.",
  alternates: { canonical: `${siteConfig.url}/case-studies` },
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient />;
}
