"use client";

import { FinalCTA } from "@nativelink/ui";
import { usePathname } from "next/navigation";

const SALES_HREF = "mailto:contact@tracemachina.com";

function secondaryCta(pathname: string): { label: string; href: string } {
  if (pathname === "/pricing") {
    return { label: "Talk to sales", href: SALES_HREF };
  }
  return { label: "See pricing", href: "/pricing" };
}

export function SiteFinalCTA() {
  const pathname = usePathname() ?? "";
  const secondary = secondaryCta(pathname.replace(/\/$/, "") || "/");

  return (
    <FinalCTA
      title="Let's build at the speed your code is being written."
      body="Open source. Self-host the moment your team is ready."
      primaryLabel="Get started"
      primaryHref="/docs"
      primaryNewTab
      secondaryLabel={secondary.label}
      secondaryHref={secondary.href}
    />
  );
}
