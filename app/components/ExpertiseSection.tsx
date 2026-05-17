"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type Card = {
  icon: "euros" | "target";
  iconBg: string;
  title: string;
  description: ReactNode;
};

const cards: Card[] = [
  {
    icon: "euros",
    iconBg: "bg-[#68E181]",
    title: "Honoraires",
    description: (
      <>
        Honoraires forfaitaires, clairs et définis dès le départ.
        <br />
        Une tarification pensée pour rester proportionnée aux économies fiscales
        et sociales obtenues, avec un engagement simple : nos honoraires
        n’excèdent jamais les économies réalisées.
      </>
    ),
  },
  {
    icon: "target",
    iconBg: "bg-[#EC8DCF]",
    title: "Stratégie sur mesure",
    description:
      "Chaque client bénéficie d’une analyse personnalisée de son potentiel fiscal.",
  },
];

function CardIcon({ icon }: { icon: Card["icon"] }) {
  const src = icon === "euros" ? "/Euro.svg" : "/Cercle.svg";

  return (
    <Image src={src} alt="" width={24} height={24} className="h-6 w-6" />
  );
}

export default function ExpertiseSection() {
  return (
    <section className="overflow-hidden bg-white px-6 py-16 text-center text-[#040325] sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-14">
        <h2 className="w-full max-w-[768px] text-[40px] font-semibold leading-[120%]">
          Une expertise qui change la donne
        </h2>

        <div className="grid w-full items-center gap-8 lg:grid-cols-[460px_460px_420px]">
          {cards.map((card) => (
            <article
  key={card.title}
  className="flex h-[340px] flex-col items-center rounded-[8px] bg-[#F5FBFF] px-6 py-8"
>
  <div className="flex h-[48px] items-center justify-center">
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-[4px] ${card.iconBg}`}
    >
      <CardIcon icon={card.icon} />
    </div>
  </div>

  <div className="mt-6 flex h-[34px] items-center justify-center">
    <h3 className="text-[24px] font-bold leading-[140%]">
      {card.title}
    </h3>
  </div>

  <p className="mt-4 w-full text-[16px] leading-[150%]">
    {card.description}
  </p>
</article>
          ))}

          <div className="hidden h-[420px] w-[420px] items-center justify-center overflow-hidden lg:flex">
  <Image
    src="/Profil.svg"
    alt="Profil"
    width={420}
    height={420}
    className="h-full w-full object-contain scale-x-[-1] translate-x-10"
    priority
  />
</div>
        </div>
      </div>
    </section>
  );
}