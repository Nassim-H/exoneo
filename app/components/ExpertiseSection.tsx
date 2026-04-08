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
    <img
      src="/Profil.png"
      alt="Profil"
      className="block h-auto w-full max-w-[430px]"
    />
  );
}

export default function ExpertiseSection() {
  return (
    <section className="bg-white px-6 py-24 text-[#040325] sm:px-8 lg:px-10 lg:py-[112px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[820px] text-center">
          <h2
            className="text-balance text-[clamp(2.3rem,5vw,3rem)] font-semibold leading-[1.15] text-[#040325]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Une expertise qui change la donne
          </h2>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.05fr_1.05fr_0.95fr] lg:gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[8px] bg-[#f5fbff] px-6 py-8 text-center shadow-[0_0_0_1px_rgba(200,233,253,0.5)]"
            >
              <div className={`mx-auto flex h-9 w-9 items-center justify-center rounded-[4px] ${card.iconBg}`}>
                <CardIcon icon={card.icon} />
              </div>

              <h3
                className="mt-6 text-[24px] font-bold leading-[1.4] text-[#040325]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {card.title}
              </h3>

              <p className="mx-auto mt-4 max-w-[330px] text-[16px] leading-[1.5] text-[#2e2e2e]">
                {card.description}
              </p>
            </article>
          ))}

          <PersonIllustration />
        </div>
      </div>
    </section>
  );
}
