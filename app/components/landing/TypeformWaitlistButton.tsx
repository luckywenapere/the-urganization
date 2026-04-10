"use client";

import { createPopup } from "@typeform/embed";
import { clsx } from "clsx";
import { useRef } from "react";

export function TypeformWaitlistButton({
  className,
  children = "Join the waitlist",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const popupRef = useRef<ReturnType<typeof createPopup> | null>(null);

  const openPopup = () => {
    popupRef.current ??= createPopup("PmaeSU86", { size: 80 });
    popupRef.current.open();
  };

  return (
    <button
      type="button"
      onClick={openPopup}
      className={clsx(className)}
    >
      {children}
    </button>
  );
}
