"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Card = {
  icon: "euros" | "target";
  iconBg: string;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    icon: "euros",
    iconBg: "bg-[#68e181]",
    title: "Honoraires",
    description:
      "Honoraires forfaitaires, clairs et définis dès le départ. Une tarification pensée pour rester proportionnée aux économies fiscales et sociales obtenues, avec un engagement simple : nos honoraires n'excèdent jamais les économies réalisées.",
  },
  {
    icon: "target",
    iconBg: "bg-[#ec8dcf]",
    title: "Stratégie sur mesure",
    description:
      "Chaque client bénéficie d'une analyse personnalisée de son potentiel fiscal.",
  },
];

function CardIcon({ icon }: { icon: Card["icon"] }) {
  const src = icon === "euros" ? "/Euro.svg" : "/Cercle.svg";

  return (
    <Image
      src={src}
      alt=""
      width={20}
      height={20}
      className="h-5 w-5"
    />
  );
}

function PersonIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className="absolute bottom-0 right-0 h-full w-auto"
    >
      <Image
        src="/Profil.png"
        alt="Profil"
        width={760}
        height={980}
        className="h-full w-auto object-contain object-bottom"
      />
    </motion.div>
  );
}

export default function ExpertiseSection() {
  return (
    <section className="overflow-hidden bg-white px-6 py-28 text-[#040325] sm:px-8 lg:px-10 lg:py-[128px]">
      <div className="mx-auto max-w-[1280px]">
        
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[980px] text-center"
        >
          <h2 className="text-balance font-semibold leading-[1.15] text-[#040325] text-[40px]">
            Une expertise qui change la donne
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="mt-20 grid items-stretch gap-8 lg:grid-cols-[1fr_1fr_1fr]">
          
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="flex h-full mt-15 flex-col rounded-[8px] bg-[#f5fbff] px-8 py-10 text-center shadow-[0_0_0_1px_rgba(200,233,253,0.5)]"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`mx-auto flex h-11 w-11 items-center justify-center rounded-[6px] ${card.iconBg}`}
              >
                <CardIcon icon={card.icon} />
              </motion.div>

              <h3 className="mt-7 text-[28px] font-bold leading-[1.35] text-[#040325]">
                {card.title}
              </h3>

              <p className="mx-auto mt-5 max-w-[380px] text-[16px] leading-[1.45] text-[#2e2e2e]">
                {card.description}
              </p>
            </motion.article>
          ))}

          {/* Image */}
          <div className="relative -mb-28 -mr-10 lg:-mb-[128px] lg:-mr-10">
            <PersonIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}