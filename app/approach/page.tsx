import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ApproachPageClient } from "@/components/pages/ApproachPageClient";

export const metadata: Metadata = {
  title: "My Approach",
  description:
    "How Martin Mora works: the Discover → Align → Prioritize → Enable → Measure & Improve framework built from 18+ years across banking, payments, fintech, and transformation.",
  alternates: { canonical: `${siteConfig.url}/approach` },
};

export default function ApproachPage() {
  return <ApproachPageClient />;
}
