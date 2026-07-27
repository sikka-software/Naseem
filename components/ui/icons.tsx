import type { LucideIcon } from "lucide-react";
import { TerminalIcon } from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;
export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export const Icons = {};

export function create({
  icon: Icon,
}: {
  icon?: LucideIcon;
}): React.ReactElement {
  return <div className="my-1">{Icon ? <Icon /> : <TerminalIcon />}</div>;
}

export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    data-testid="geist-icon"
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
    style={{ color: "currentColor" }}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
      fill="currentColor"
    ></path>
  </svg>
);
