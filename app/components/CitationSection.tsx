"use client";

import { motion } from "framer-motion";

export default function CitationSection() {
  return (
    <section className="bg-[#4141f5] px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto flex max-w-[1400px] items-start gap-8 lg:items-center lg:gap-10">

          {/* Ligne gauche */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 hidden h-px flex-1 origin-left bg-white/60 lg:block"
          />

          {/* Texte */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mx-auto max-w-[720px] text-center text-[20px] font-bold leading-[1.45] tracking-[0.01em] text-white"
          >
            En moyenne, une entreprise perd plusieurs milliers d’euros par an à cause d’une fiscalité mal optimisé.
            <br className="hidden sm:block" />
            <span className="block mt-2">
              Combien d'années d'exonération laissez-vous passer ?
            </span>
          </motion.blockquote>

          {/* Ligne droite */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-10 hidden h-px flex-1 origin-right bg-white/60 lg:block"
          />

        </div>
      </div>
    </section>
  );
}