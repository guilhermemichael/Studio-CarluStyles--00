import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "../../lib/cn";

type ButtonTone = "gold" | "ghost" | "dark";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  tone?: ButtonTone;
  icon?: ReactNode;
};

const tones: Record<ButtonTone, string> = {
  gold: "bg-gold text-black hover:bg-champagne",
  ghost:
    "border border-pearl/25 bg-black/25 text-pearl hover:border-gold hover:text-gold",
  dark: "border border-black/10 bg-black text-pearl hover:bg-graphite",
};

export function ButtonLink({
  className,
  children,
  tone = "gold",
  icon,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-ui text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
        tones[tone],
        className,
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
