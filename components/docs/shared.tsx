import type { Folder, Item, Node, Root, Separator } from "fumadocs-core/page-tree";
import type { FC, ReactNode } from "react";
import { notFound } from "next/navigation";

export const layoutVariables = {
  "--fd-layout-offset": "max(calc(50vw - var(--fd-sidebar-width) / 2), 0px)",
};

export interface TabOptions {
  transform?: (option: unknown, node: Folder) => unknown | null;
}

export interface SidebarOptions {
  enabled: boolean;
  component: ReactNode;

  collapsible?: boolean;
  components?: Partial<SidebarComponents>;

  tabs?: unknown[] | TabOptions | false;

  banner?: ReactNode;
  footer?: ReactNode;

  hideSearch?: boolean;
}

export interface SidebarComponents {
  Item: FC<{ item: Item }>;
  Folder: FC<{ item: Folder; level: number; children: ReactNode }>;
  Separator: FC<{ item: Separator }>;
}

export function checkPageTree(passed: unknown) {
  if (!passed) notFound();
  if (
    typeof passed === "object" &&
    "children" in passed &&
    Array.isArray(passed.children)
  )
    return;

  throw new Error(
    "You passed an invalid page tree to `<DocsLayout />`. Check your usage in layout.tsx if you have enabled i18n."
  );
}

export function getSidebarTabsFromOptions(
  options: SidebarOptions["tabs"],
  tree: Root
) {
  if (Array.isArray(options)) {
    return options;
  } else if (typeof options === "object") {
    return getSidebarTabs(tree, options);
  } else if (options !== false) {
    return getSidebarTabs(tree);
  }
}

const defaultTransform: TabOptions["transform"] = (_option, node) => {
  if (!node.icon) return _option;

  const option = _option as Record<string, unknown>;
  return {
    ...option,
    icon: (
      <div className="bg-fd-secondary rounded-md border p-1 shadow-md [&_svg]:size-5">
        {node.icon}
      </div>
    ),
  };
};

function getSidebarTabs(
  pageTree: Root,
  { transform = defaultTransform }: TabOptions = {}
): unknown[] {
  function findOptions(node: Folder): unknown[] {
    const results: unknown[] = [];

    if (node.root) {
      const index = node.index ?? node.children.at(0);

      if (index?.type === "page") {
        const option: unknown = {
          description: node.description,
          icon: node.icon,
          title: node.name,
          url: index.url,

          urls: getFolderUrls(node, new Set()),
        };

        const mapped = transform ? transform(option, node) : option;
        if (mapped) results.push(mapped);
      }
    }

    for (const child of node.children) {
      if (child.type === "folder") results.push(...findOptions(child));
    }

    return results;
  }

  return findOptions(pageTree as Folder);
}

function getFolderUrls(
  folder: Folder,
  output: Set<string>
): Set<string> {
  if (folder.index) output.add(folder.index.url);

  for (const child of folder.children) {
    if (child.type === "page") output.add(child.url);
    if (child.type === "folder") getFolderUrls(child, output);
  }

  return output;
}
