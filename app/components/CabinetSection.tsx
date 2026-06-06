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
  { src: "/VectorJaune.svg", alt: "" },
  { src: "/VectorRose.svg", alt: "" },
  { src: "/VectorNoir.svg", alt: "" },
  { src: "/VectorBleu.svg", alt: "" },
  { src: "/VectorVert.svg", alt: "" },
  { src: "/VectorRond.svg", alt: "" },
];

function CabinetVectors() {
  return (
    <div className="mx-auto grid w-fit grid-cols-3 gap-0 lg:mx-0">
      {vectors.map((vector, index) => (
        <motion.img
          key={vector.src}
          src={vector.src}
          alt={vector.alt}
          whileHover={{
            scale: 1.08,
            rotate: index % 2 === 0 ? 4 : -4,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="block h-[140px] w-[140px]"
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
          <div className="max-w-[760px]">
           <h2 className="flex items-center gap-2 text-[40px] font-semibold leading-[1.02] tracking-[-0.02em] text-[#040325]">
          Le cabinet Exonéo
          <img
            src="/fr.svg"
            width={36}
            height={36}
            alt="France"
            style={{ transform: 'translateY(3px)' }}
          />
          <img
            src="/lu.svg"
            width={36}
            height={36}
            alt="Luxembourg"
            style={{ transform: 'translateY(3px)' }}
          />
</h2>
           

            <div className="mt-10 space-y-6 text-[16px] leading-[1.45] text-[#3a4252]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <CabinetVectors />
          </div>
        </div>
      </div>
    </section>
  );
}