"use client";

import { motion } from "framer-motion";

interface FounderPOVProps {
  quote: string;
  attribution?: string;
}

export default function FounderPOV({
  quote,
  attribution = "Founder, Urganize",
}: FounderPOVProps) {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-8">
          {quote}
        </p>

        <span className="text-sm uppercase tracking-[0.25em] text-neutral-500 font-semibold">
          — {attribution}
        </span>
      </motion.div>
    </section>
  );
}
