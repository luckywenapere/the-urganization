"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import formbricks from "@formbricks/js";

export default function FormbricksProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    formbricks.setup({
      environmentId: "cmja8xlr9xzf0ad01xu8mpoas",
      appUrl: "https://app.formbricks.com", // use PUBLIC_URL if you are using multi-domain setup, otherwise use WEBAPP_URL
    });
  }, []);

  useEffect(() => {
    formbricks?.registerRouteChange();
  }, [pathname, searchParams]);

  return null;
}