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
    <div className="mx-auto grid w-full max-w-[340px] grid-cols-3 lg:max-w-[390px]">
      {vectors.map((vector, index) => (
        <img
          key={vector.src}
          src={vector.src}
          alt={vector.alt}
          className={[
            "block h-auto w-full",
            index === 2 || index === 5 ? "max-w-[100px] justify-self-center" : "max-w-[98px] justify-self-center",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default function CabinetSection() {
  return (
    <section className="bg-white px-6 py-20 text-[#040325] sm:px-8 lg:px-10 lg:py-[96px] " id='a-propos'>
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-[560px]">
            <h2
              className="text-[clamp(2.25rem,4vw,3.15rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-[#040325]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Le cabinet Exonéo
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-[1.35] text-[#3a4252] sm:text-[16px] lg:text-[17px]">
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