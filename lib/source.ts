import { blog as blogPosts, docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { create } from "@/components/ui/icons";
import { icons } from "lucide-react";
import { i18n } from "./i18n";
export const source = loader({
  baseUrl: "/docs",
  icon(icon) {
    if (icon && icon in icons)
      return create({ icon: icons[icon as keyof typeof icons] });
  },
  source: createMDXSource(docs, meta),
});

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts, []),
  i18n,
});
