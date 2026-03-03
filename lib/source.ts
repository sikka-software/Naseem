import { docs, blog, meta } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { create } from "@/components/ui/icons";
import { icons } from "lucide-react";
import { i18n } from "./i18n";

export const source = loader({
  baseUrl: "/docs",
  icon(icon) {
    if (icon && icon in icons)
      return create({ icon: icons[icon as keyof typeof icons] });
  },
  source: toFumadocsSource(docs, meta),
});

export const blogLoader = loader({
  baseUrl: "/blog",
  source: toFumadocsSource(blog, []),
  i18n,
});
