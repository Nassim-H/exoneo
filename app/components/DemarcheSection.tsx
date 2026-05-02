"use client";

import { motion } from "framer-motion";

type Step = {
  number: string;
  numberColor: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "1",
    numberColor: "text-[#4141f5]",
    title: "Prise de contact",
    description:
      "Un premier échange rapide pour comprendre votre situation...",
  },
  {
    number: "2",
    numberColor: "text-[#ec8dcf]",
    title: "Consultation",
    description:
      "Une analyse approfondie de votre situation fiscale...",
  },
  {
    number: "3",
    numberColor: "text-[#68e181]",
    title: "Mise en oeuvre & Accompagnement",
    description:
      "Nous déployons la stratégie validée...",
  },
];

export default function DemarcheSection() {
  return (
    <section className="bg-white px-6 py-28 text-[#040325] sm:px-8 lg:px-10 lg:py-[128px]" id="services">
      <div className="mx-auto max-w-[1280px]">

        {/* TITRE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[980px] text-center"
        >
          <h2 className="text-balance font-semibold leading-[1.15] text-[#040325] text-[40px]">
            Une démarche claire
          </h2>

          <p className="mx-auto mt-5 max-w-[820px] text-[18px] leading-[1.4] text-[#205fed]">
            Notre objectif : vous faire passer d'une situation floue à une structure fiscalement optimisée...
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="mt-20 grid gap-14 lg:grid-cols-3 lg:gap-10">
          {steps.map((step, i) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, x: -60 }} // arrive de la gauche
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: i * 0.25, // 👈 cascade gauche → droite
                ease: "easeOut",
              }}
              className="text-center"
            >
              {/* NUMERO */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.25 + 0.1 }}
                className={`text-[clamp(5rem,9vw,6.5rem)] font-semibold leading-none ${step.numberColor}`}
              >
                {step.number}
              </motion.div>

              {/* TITRE */}
              <h3 className="mt-6 text-[26px] font-bold leading-[1.35] text-[#040325]">
                {step.title}
              </h3>

              {/* TEXTE */}
              <p className="mx-auto mt-4 max-w-[380px] text-[18px] leading-[1.45] text-[#5e697a]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}