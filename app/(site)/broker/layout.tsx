import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Broker Partnership",
  description:
    "Partner with CapLink Markets as a broker. Integrate our mirror trading technology, grow your client base, and offer best-in-class social investing tools.",
  openGraph: {
    title: "Broker Partnership | CapLink Markets",
    description:
      "Partner with CapLink Markets as a broker. Integrate mirror trading technology and offer best-in-class social investing tools.",
    url: "https://caplinkmarkets.com/broker",
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
    title: "Broker Partnership | CapLink Markets",
    description:
      "Partner with CapLink Markets as a broker. Integrate mirror trading technology and offer best-in-class social investing tools.",
    images: ["/opengraph-image.png"],
  },
};

export default function BrokerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
