"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-[#040325]">
      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] w-full max-w-[1500px] items-center px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="pointer-events-none absolute left-[35px] top-[172px] block lg:left-[34px] lg:top-[208px]"
        >
          <motion.img
            src="/VectorVert.svg"
            alt=""
            width={121}
            height={122}
            className="h-auto w-[58px] sm:w-[66px] lg:w-[84px]"
            animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.25, ease: "easeOut" }}
          className="pointer-events-none absolute left-[65px] top-[16px] block lg:left-[170px] lg:top-[40px]"
        >
          <motion.img
            src="/VectorRose.svg"
            alt=""
            width={120}
            height={122}
            className="h-auto w-[58px] sm:w-[66px] lg:w-[86px]"
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.4, ease: "easeOut" }}
          className="pointer-events-none absolute right-[38px] top-[22px] block lg:right-[120px] lg:top-[52px]"
        >
          <motion.div
            className="h-[48px] w-[48px] rounded-full bg-[#08072e] sm:h-[58px] sm:w-[58px] lg:h-[86px] lg:w-[86px]"
            animate={{ scale: [1, 1.08, 1], y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.55, ease: "easeOut" }}
          className="pointer-events-none absolute left-[42px] bottom-[84px] block lg:left-[190px] lg:bottom-[104px]"
        >
          <motion.img
            src="/VectorBleu.svg"
            alt=""
            width={121}
            height={122}
            className="h-auto w-[58px] sm:w-[66px] lg:w-[86px]"
            animate={{ y: [0, -10, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.7, ease: "easeOut" }}
          className="pointer-events-none absolute right-[58px] bottom-[74px] block lg:right-[132px] lg:bottom-[70px]"
        >
          <motion.img
            src="/VectorJaune.svg"
            alt=""
            width={121}
            height={122}
            className="h-auto w-[58px] sm:w-[66px] lg:w-[86px]"
            animate={{ y: [0, 12, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.85, ease: "easeOut" }}
          className="pointer-events-none absolute right-[8px] top-[250px] block lg:right-[42px] lg:top-[388px]"
        >
          <motion.div
            className="h-[52px] w-[52px] rounded-full bg-[#4c4cff] sm:h-[62px] sm:w-[62px] lg:h-[88px] lg:w-[88px]"
            animate={{ scale: [1, 1.1, 1], y: [0, 10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-[920px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="mb-6 inline-flex flex-wrap items-center justify-center rounded-[6px] bg-[#f7f095] px-4 py-2.5 text-center text-[18px] leading-[1.4] text-[#040325] sm:mb-8 sm:px-6 sm:py-3"
          >
            <span className="font-semibold">30K€</span>
            <span className="ml-1.5 sm:ml-2">/moyenne exonérés par client</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: "easeOut" }}
            className="text-balance text-[clamp(3rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#040325]"
          >
            Réduisons ensemble votre
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            charge fiscale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-[880px] text-[18px] leading-[1.55] text-[#040325] sm:mt-7"
          >
            Nos avocats fiscalistes accompagnent les professions libérales,
            freelances et TPE/PME dans la gestion de l&apos;ensemble de leurs
            problématiques fiscales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55, ease: "easeOut" }}
            className="mt-8 flex justify-center sm:mt-10 lg:mt-12"
          >
            <motion.a
              href="https://forms.gle/s4Dc2FMC87wEpVse8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center rounded-[6px] bg-[#4141f5] px-6 py-3 text-center text-[18px] font-bold leading-[1.4] text-white transition-opacity duration-200 hover:opacity-90 sm:w-auto sm:max-w-none sm:px-7"
            >
              Réserver un appel gratuit
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}