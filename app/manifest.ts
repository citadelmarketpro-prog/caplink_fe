import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CapLink Markets — Mirror Trading Platform",
    short_name: "CapLink Markets",
    description:
      "Mirror top traders automatically with CapLink Markets. Real-time trade mirroring and smart portfolio management.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#06811d",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
