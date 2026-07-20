import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ContactPageClient } from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Martin Fernando Mora. Book a discovery call or send a direct message.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
