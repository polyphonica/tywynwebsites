import type { MetadataRoute } from "next";
import { projectDetails, prototypes } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/work/starter-sites",
    "/work/custom-apps",
    "/prototypes",
    "/about",
    "/contact",
    "/de",
    ...projectDetails.map((project) => `/projects/${project.slug}`),
    ...prototypes.map((prototype) => `/prototypes/${prototype.slug}`),
  ];
  return paths.map((path) => ({ url: `${siteUrl}${path}` }));
}
