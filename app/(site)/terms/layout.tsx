import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the CaplinkMarkets Terms of Service. Understand your rights, responsibilities, and the conditions governing use of our copy trading platform.",
  openGraph: {
    title: "Terms of Service | CaplinkMarkets",
    description: "Read the CaplinkMarkets Terms of Service governing use of our copy trading platform.",
    url: "https://caplinkmarkets.com/terms",
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
    title: "Terms of Service | CaplinkMarkets",
    description: "Read the CaplinkMarkets Terms of Service governing use of our copy trading platform.",
    images: ["/opengraph-image.png"],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
