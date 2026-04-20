"use client";

import { clsx } from "clsx";
import { ComponentType, ReactNode, useMemo, useState } from "react";

type WaitlistModalProps = {
  ctaSource: string;
  onClose: () => void;
};

type WaitlistModalComponent = ComponentType<WaitlistModalProps>;

function WaitlistLoading({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex min-h-dvh items-center justify-center bg-black px-5 text-white"
      role="dialog"
      aria-modal="true"
      aria-label="Loading waitlist form"
    >
      <div className="w-full max-w-sm text-center">
        <p className="font-display text-4xl font-semibold tracking-[-0.04em]">
          Urganize
        </p>
        <p className="mt-4 text-sm text-white/60">
          Loading the waitlist form. This may take a moment on a slower
          connection.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-7 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/70 hover:border-white/50 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function WaitlistButton({
  className,
  children = "Join the waitlist",
  source,
}: {
  className?: string;
  children?: ReactNode;
  source?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ModalComponent, setModalComponent] =
    useState<WaitlistModalComponent | null>(null);

  const ctaSource = useMemo(() => {
    if (source) {
      return source;
    }

    return typeof children === "string"
      ? children.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "")
      : "waitlist_cta";
  }, [children, source]);

  const loadModal = async () => {
    if (ModalComponent || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const waitlistModule = await import("./WaitlistModal");
      setModalComponent(() => waitlistModule.WaitlistModal);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = () => {
    setIsOpen(true);
    void loadModal();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={clsx("cursor-pointer touch-manipulation", className)}
      >
        {children}
      </button>

      {isOpen && ModalComponent && (
        <ModalComponent ctaSource={ctaSource} onClose={closeModal} />
      )}

      {isOpen && !ModalComponent && <WaitlistLoading onClose={closeModal} />}
    </>
  );
}
