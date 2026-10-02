import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HEROY Digital Solutions",
    short_name: "HEROY",
    description:
      "HEROY is a full-service digital transformation agency from Ethiopia — digital marketing, SEO, branding, web and mobile development, UI/UX, AI, and 3D interactive experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#080810",
    theme_color: "#080810",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
