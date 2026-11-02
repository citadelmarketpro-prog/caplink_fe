import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the CapLink Markets Terms of Service. Understand your rights, responsibilities, and the conditions governing use of our mirror trading platform.",
  openGraph: {
    title: "Terms of Service | CapLink Markets",
    description: "Read the CapLink Markets Terms of Service governing use of our mirror trading platform.",
    url: "https://caplinkmarkets.com/terms",
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
    title: "Terms of Service | CapLink Markets",
    description: "Read the CapLink Markets Terms of Service governing use of our mirror trading platform.",
    images: ["/opengraph-image.png"],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
