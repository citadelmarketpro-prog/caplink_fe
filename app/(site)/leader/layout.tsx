import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Leader Trader",
  description:
    "Share your trading strategy on CaplinkMarkets and earn performance fees. Apply to become a Leader Trader and let others follow your success.",
  openGraph: {
    title: "Become a Leader Trader | CaplinkMarkets",
    description:
      "Share your trading strategy and earn performance fees. Apply to become a Leader Trader on CaplinkMarkets.",
    url: "https://caplinkmarkets.com/leader",
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
    title: "Become a Leader Trader | CaplinkMarkets",
    description:
      "Share your trading strategy and earn performance fees. Apply to become a Leader Trader on CaplinkMarkets.",
    images: ["/opengraph-image.png"],
  },
};

export default function LeaderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
