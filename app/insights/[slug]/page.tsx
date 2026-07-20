import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getInsight, insights } from "@/content/insights";
import { siteConfig } from "@/lib/site";
import { InsightPageClient } from "@/components/pages/InsightPageClient";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  // Only generate pages for articles without an external URL
  return insights
    .filter((i) => !i.externalUrl)
    .map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: insight.title.en,
    description: insight.excerpt.en,
    alternates: { canonical: `${siteConfig.url}/insights/${insight.slug}` },
    openGraph: {
      title: insight.title.en,
      description: insight.excerpt.en,
      type: "article",
      publishedTime: insight.date,
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  // External articles redirect to their canonical source
  if (insight.externalUrl) {
    redirect(insight.externalUrl);
  }

  return <InsightPageClient slug={slug} />;
}
