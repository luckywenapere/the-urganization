"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import formbricks from "@formbricks/js";

export default function FormbricksProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize Formbricks once
  useEffect(() => {
    formbricks.setup({
      environmentId: "cmja8xlr9xzf0ad01xu8mpoas",
      appUrl: "https://app.formbricks.com"
    });
  }, []);

  // Track route changes for surveys
  useEffect(() => {
    formbricks?.registerRouteChange();
  }, [pathname, searchParams]);

  return null;
}