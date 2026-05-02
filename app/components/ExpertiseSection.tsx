import Image from "next/image";

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
    <Image
      src="/Profil.png"
      alt="Profil"
      width={760}
      height={980}
      className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom"
      priority={false}
    />
  );
}

export default function ExpertiseSection() {
  return (
    <section className="overflow-hidden bg-white px-6 py-28 text-[#040325] sm:px-8 lg:px-10 lg:py-[128px]">
      <div className="mx-auto max-w-[1280px]">
        {/* Titre */}
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-balance font-semibold leading-[1.15] text-[#040325] text-[40px]">
            Une expertise qui change la donne
          </h2>
        </div>

        {/* Grid 3 colonnes */}
        <div className="mt-20 grid items-stretch gap-8 lg:grid-cols-[1fr_1fr_1fr]">
          {/* Les 2 cards — même hauteur grâce à h-full */}
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full mt-15  flex-col rounded-[8px] bg-[#f5fbff] px-8 py-10 text-center shadow-[0_0_0_1px_rgba(200,233,253,0.5)]"
            >
              <div className={`mx-auto flex h-11 w-11 items-center justify-center rounded-[6px] ${card.iconBg}`}>
                <CardIcon icon={card.icon} />
              </div>

              <h3 className="mt-7 text-[28px] font-bold leading-[1.35] text-[#040325]">
                {card.title}
              </h3>

              <p className="mx-auto mt-5 max-w-[380px] text-[16px] leading-[1.45] text-[#2e2e2e]">
                {card.description}
              </p>
            </article>
          ))}

          {/* Colonne image — dépasse en haut et en bas, colle le bord droit, sans fond */}
          <div className="relative -mb-28 -mr-10 lg:-mb-[128px] lg:-mr-10">
            <PersonIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}