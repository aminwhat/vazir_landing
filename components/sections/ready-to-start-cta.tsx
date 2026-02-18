"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";

type ReadyToStartCtaProps = {
  subtitle: string;
  showSecondaryIcon?: boolean;
};

export default function ReadyToStartCta({
  subtitle,
  showSecondaryIcon = false,
}: ReadyToStartCtaProps) {
  return (
    <section className="py-24 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-950/30 to-purple-950/30 rounded-3xl p-12 border border-white/10 overflow-hidden"
      >
        <BorderBeam
          size={300}
          duration={15}
          colorFrom="#3b82f6"
          colorTo="#8b5cf6"
        />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
          آماده برای شروع هستید؟
        </h2>
        <p className="text-xl text-neutral-300 mb-8 relative z-10">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <Link href="/contact">
            <span className="group relative flex w-fit overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-blue-700/20 via-blue-600/15 to-purple-700/20 transition-transform duration-300 hover:-translate-y-0.5">
              <ShineBorder
                borderWidth={1.5}
                duration={10}
                shineColor={["#60a5fa", "#22d3ee", "#a78bfa"]}
                className="rounded-full"
              />
              <span className="pointer-events-none absolute inset-[1px] rounded-full bg-neutral-950/90" />
              <span className="relative z-10 flex items-center gap-2 px-10 py-4 font-bold text-white text-lg">
                شروع رایگان
              </span>
            </span>
          </Link>
          <Link href="/contact">
            <button className="px-10 py-4 rounded-full border border-white/20 hover:bg-white/5 transition font-bold text-lg flex items-center gap-2">
              تماس با فروش
              {showSecondaryIcon && <ArrowRight className="w-5 h-5" />}
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
