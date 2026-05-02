"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "Exoneo est un cabinet réunissant des avocats fiscalistes expérimentés, intervenant en France et au Luxembourg.",
  "Nous accompagnons une clientèle exigeante composée de chefs d'entreprise, de professionnels de santé et de freelances souhaitant structurer, sécuriser et optimiser leur situation fiscale et sociale.",
  "Cabinet 100 % digital, Exoneo se distingue par une approche moderne, réactive et accessible, tout en conservant une relation profondément humaine et personnalisée avec chacun de ses clients. Chaque situation est unique : notre accompagnement l'est aussi.",
  "Notre mission est claire : vous aider à restructurer votre patrimoine professionnel et personnel afin de réduire durablement votre charge fiscale et sociale, tout en intégrant vos objectifs à moyen et long terme de développement d'activité, investissements, transmission ou expatriation.",
  "Parce qu'une stratégie fiscale efficace s'inscrit dans un écosystème global, nous travaillons en étroite collaboration avec des experts-comptables, commissaires aux comptes et gestionnaires de patrimoine spécialisés dans chaque secteur d'activité. Cette approche pluridisciplinaire garantit à nos clients un suivi comptable rigoureux et cohérent à l'issue de notre approche.",
  "Exoneo, c'est l'alliance de l'expertise technique, de la vision stratégique et d'un accompagnement sur mesure.",
];

const vectors = [
  {
    src: "/VectorJaune.svg",
    alt: "",
    initial: { opacity: 0, y: -50, rotate: -20, scale: 0.8 },
    animate: { opacity: 1, y: 0, rotate: 0, scale: 1 },
  },
  {
    src: "/VectorRose.svg",
    alt: "",
    initial: { opacity: 0, x: 50, rotate: 25, scale: 0.7 },
    animate: { opacity: 1, x: 0, rotate: 0, scale: 1 },
  },
  {
    src: "/VectorNoir.svg",
    alt: "",
    initial: { opacity: 0, scale: 0.4, rotate: 180 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
  },
  {
    src: "/VectorBleu.svg",
    alt: "",
    initial: { opacity: 0, x: -50, rotate: -25, scale: 0.8 },
    animate: { opacity: 1, x: 0, rotate: 0, scale: 1 },
  },
  {
    src: "/VectorVert.svg",
    alt: "",
    initial: { opacity: 0, y: 50, rotate: 18, scale: 0.75 },
    animate: { opacity: 1, y: 0, rotate: 0, scale: 1 },
  },
  {
    src: "/VectorRond.svg",
    alt: "",
    initial: { opacity: 0, scale: 0, rotate: -180 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
  },
];

function CabinetVectors() {
  return (
    <div className="mx-auto grid w-full max-w-[420px] grid-cols-3 lg:mx-0 lg:max-w-[500px]">
      {vectors.map((vector, index) => (
        <motion.img
          key={vector.src}
          src={vector.src}
          alt={vector.alt}
          initial={vector.initial}
          whileInView={vector.animate}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.6,
            delay: index * 0.16,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.08,
            rotate: index % 2 === 0 ? 4 : -4,
          }}
          className={[
            "block h-auto w-full justify-self-center",
            index === 2 || index === 5 ? "max-w-[132px]" : "max-w-[124px]",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default function CabinetSection() {
  return (
    <section
      className="bg-white px-6 py-28 text-[#040325] sm:px-8 lg:px-10 lg:py-[128px]"
      id="a-propos"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-[760px]"
          >
            <h2 className="font-semibold leading-[1.08] tracking-[-0.02em] text-[#040325] text-[40px]">
              Le cabinet Exonéo
            </h2>

            <div className="mt-10 space-y-6 text-[16px] leading-[1.45] text-[#3a4252]">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + index * 0.06,
                    ease: "easeOut",
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <CabinetVectors />
          </motion.div>
        </div>
      </div>
    </section>
  );
}