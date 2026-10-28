import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Guide",
  description:
    "Step-by-step guide to the CaplinkMarkets Affiliate Programme. Learn how to share your link, track referrals, and maximise your commission earnings.",
  openGraph: {
    title: "Affiliate Guide | CaplinkMarkets",
    description:
      "Step-by-step guide to the CaplinkMarkets Affiliate Programme. Learn how to track referrals and maximise commission earnings.",
    url: "https://caplinkmarkets.com/affiliate-guide",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CaplinkMarkets — Copy Trading Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Guide | CaplinkMarkets",
    description:
      "Step-by-step guide to the CaplinkMarkets Affiliate Programme. Learn how to track referrals and maximise commission earnings.",
    images: ["/opengraph-image.png"],
  },
};

export default function AffiliateGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
