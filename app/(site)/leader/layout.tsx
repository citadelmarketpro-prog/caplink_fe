import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Leader Trader",
  description:
    "Share your trading strategy on CapLink Markets and earn performance fees. Apply to become a Leader Trader and let others follow your success.",
  openGraph: {
    title: "Become a Leader Trader | CapLink Markets",
    description:
      "Share your trading strategy and earn performance fees. Apply to become a Leader Trader on CapLink Markets.",
    url: "https://caplinkmarkets.com/leader",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CapLink Markets — Mirror Trading Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Leader Trader | CapLink Markets",
    description:
      "Share your trading strategy and earn performance fees. Apply to become a Leader Trader on CapLink Markets.",
    images: ["/opengraph-image.png"],
  },
};

export default function LeaderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
