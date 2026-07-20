import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { AboutPageClient } from "@/components/pages/AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "18+ years across banking, payments, fintech, blockchain, and enterprise technology. Product, Innovation, Payments & Transformation Advisor based in Madrid, Spain.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
