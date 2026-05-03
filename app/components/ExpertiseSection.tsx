"use client";

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
    <Image src={src} alt="" width={20} height={20} className="h-5 w-5" />
  );
}

function PersonIllustration() {
  return (
    <div className="absolute bottom-0 right-[calc(50%-40vw+120px)] h-[400px] lg:h-[500px]">
      <Image
        src="/Profil.svg"
        alt="Profil"
        width={500}
        height={700}
        className="h-full w-auto object-contain object-bottom scale-x-[-1]"
      />
    </div>
  );
}

export default function ExpertiseSection() {
  return (
    <section className="overflow-hidden bg-white px-6 py-28 text-[#040325] sm:px-8 lg:px-10 lg:py-[128px]">
      <div className="mx-auto max-w-[1280px]">
        {/* Titre */}
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-balance text-[40px] font-semibold leading-[1.15] text-[#040325]">
            Une expertise qui change la donne
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr_1fr] lg:items-center pt-10">
          {cards.map((card) => (
            <article
              key={card.title}
className="flex min-h-[320px] flex-col justify-center rounded-[8px] bg-[#f5fbff] px-8 py-8 text-center shadow-[0_0_0_1px_rgba(200,233,253,0.5)] lg:translate-y-20"            >
              <div
                className={`mx-auto flex h-11 w-11 items-center justify-center rounded-[6px] ${card.iconBg}`}
              >
                <CardIcon icon={card.icon} />
              </div>

              <h3 className="mt-5 text-[26px] font-bold leading-[1.3] text-[#040325]">
                {card.title}
              </h3>

              <p className="mx-auto mt-3 max-w-[340px] text-[15px] leading-[1.4] text-[#2e2e2e]">
                {card.description}
              </p>
            </article>
          ))}

          {/* Image */}
          <div className="relative hidden lg:block min-h-[520px] -mb-28 lg:min-h-[620px] lg:-mb-[128px]">
            <PersonIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}