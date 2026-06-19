"use client";

import { motion } from "framer-motion";

export default function Decorations() {
  return (
    <>
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
    </>
  );
}