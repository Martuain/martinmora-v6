import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, caseStudies } from "@/content/caseStudies";
import { siteConfig } from "@/lib/site";
import { CaseStudyPageClient } from "@/components/pages/CaseStudyPageClient";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.title.en,
    description: cs.headline.en,
    alternates: { canonical: `${siteConfig.url}/case-studies/${cs.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return <CaseStudyPageClient slug={slug} />;
}
