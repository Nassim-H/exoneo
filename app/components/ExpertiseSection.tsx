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
  if (icon === "euros") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.25 7.25C12.5417 6.49792 11.5208 6.04167 10.375 6.04167C8.10417 6.04167 6.16667 7.8125 6.16667 10C6.16667 12.1875 8.10417 13.9583 10.375 13.9583C11.5625 13.9583 12.6667 13.5 13.4167 12.7083" stroke="#040325" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 8.5V11.5" stroke="#040325" strokeWidth="1.35" strokeLinecap="round" />
        <path d="M8.75 9.5H11.125" stroke="#040325" strokeWidth="1.35" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3.75L16 5.95833V9.58333C16 13.3875 13.6433 15.9667 10 16.25C6.35667 15.9667 4 13.3875 4 9.58333V5.95833L10 3.75Z" stroke="#040325" strokeWidth="1.35" strokeLinejoin="round" />
      <path d="M10 7.04167V12.9583" stroke="#040325" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M7.75 9.5H12.25" stroke="#040325" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function PersonIllustration() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src="/Profil.png"
        alt="Profil"
        width={760}
        height={980}
        className="ml-auto block h-full w-auto min-w-[420px] max-w-none object-contain lg:translate-x-[10%] xl:translate-x-[16%]"
        priority={false}
      />
    </div>
  );
}

export default function ExpertiseSection() {
  return (
    <section className="overflow-hidden bg-white px-6 py-28 text-[#040325] sm:px-8 lg:px-10 lg:py-[128px]">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-balance text-[clamp(2.5rem,5vw,3.2rem)] font-semibold leading-[1.15] text-[#040325]">
            Une expertise qui change la donne
          </h2>
        </div>

        <div className="mt-20 grid items-stretch gap-8 lg:grid-cols-[1.05fr_1.05fr_1.15fr] lg:gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[8px] bg-[#f5fbff] px-8 py-10 text-center shadow-[0_0_0_1px_rgba(200,233,253,0.5)]"
            >
              <div className={`mx-auto flex h-11 w-11 items-center justify-center rounded-[6px] ${card.iconBg}`}>
                <CardIcon icon={card.icon} />
              </div>

              <h3 className="mt-7 text-[28px] font-bold leading-[1.35] text-[#040325]">
                {card.title}
              </h3>

              <p className="mx-auto mt-5 max-w-[380px] text-[18px] leading-[1.6] text-[#2e2e2e]">
                {card.description}
              </p>
            </article>
          ))}

          <div className="relative min-h-[420px] lg:min-h-[560px]">
            <PersonIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}