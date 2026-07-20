import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { AdvisoryEngagementsPageClient } from "@/components/pages/AdvisoryEngagementsPageClient";

export const metadata: Metadata = {
  title: "Advisory Engagements",
  description:
    "Four engagement models: Strategic Assessment & Recommendations, Innovation & Product Strategy, Transformation Guidance, and Embedded Leadership Support.",
  alternates: { canonical: `${siteConfig.url}/advisory-engagements` },
};

export default function AdvisoryEngagementsPage() {
  return <AdvisoryEngagementsPageClient />;
}
