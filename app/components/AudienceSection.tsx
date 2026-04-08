type AudienceCard = {
  icon: "medical" | "company" | "freelance";
  iconBg: string;
  title: string;
  subtitle: string;
  description: string;
  helpTitle: string;
  bullets: string[];
};

const cards: AudienceCard[] = [
  {
    icon: "medical",
    iconBg: "bg-[#68e181]",
    title: "Professions médicales",
    subtitle: "Médecins, chirurgiens, dentistes et plus largement professionnels de santé",
    description:
      "Passage en SEL, création d'une holding patrimoniale pour investir via votre structure, mise en place de schémas plus élaborés...",
    helpTitle: "Nous vous aidons à :",
    bullets: [
      "Optimiser la structuration de votre passage en SEL",
      "Mettre en place une holding patrimoniale pour piloter efficacement vos investissements, notamment via la création, le cas échéant, d'une société d'achat-revente de prothèses au service de votre cabinet",
      "Sécuriser la réduction de votre charge fiscale et sociale",
    ],
  },
  {
    icon: "company",
    iconBg: "bg-[#4141f5]",
    title: "Dirigeants de TPE / PME",
    subtitle: "Entrepreneurs, gérants, actionnaires",
    description:
      "Votre entreprise génère des résultats, mais vous avez le sentiment que la fiscalité absorbe une part excessive de vos profits. Vous cherchez à organiser les flux (dividendes, rémunérations, réinvestissement) de façon plus efficace.",
    helpTitle: "Nous vous aidons à :",
    bullets: [
      "Optimiser la fiscalité de votre société ainsi que votre stratégie de rémunération",
      "Structurer votre patrimoine professionnel au travers d'une holding afin de soutenir vos projets d'investissement",
      "Anticiper et préparer la transmission ou la cession de votre entreprise dans des conditions optimales",
    ],
  },
  {
    icon: "freelance",
    iconBg: "bg-[#ec8dcf]",
    title: "Freelances et indépendants",
    subtitle: "Consultants, professions libérales, créateurs",
    description:
      "Vous avez démarré en micro-entreprise ou en EI, mais votre activité se développe. Vous vous demandez s'il est temps de passer en société, si une domiciliation en QPV est pertinente, ou comment structurer votre croissance.",
    helpTitle: "Nous vous aidons à :",
    bullets: [
      "Déterminer le moment opportun pour votre passage en société",
      "Vous accompagner dans une domiciliation en QPV afin de bénéficier d'une exonération totale d'impôt",
      "Construire une structure simple, solide et évolutive",
    ],
  },
];

function CardIcon({ type }: { type: AudienceCard["icon"] }) {
  if (type === "medical") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12V9.5C6 7.01472 8.01472 5 10.5 5C12.9853 5 15 7.01472 15 9.5V12" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 12V8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M9.5 12H14.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 13.5C6 16.5376 8.46243 19 11.5 19H12.5C15.5376 19 18 16.5376 18 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "company") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 19V6.5C6 6.22386 6.22386 6 6.5 6H14.5C14.7761 6 15 6.22386 15 6.5V19" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 6V4.5C9 4.22386 9.22386 4 9.5 4H16.5C16.7761 4 17 4.22386 17 4.5V19" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 10H10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 13H10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 16H10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 10H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 13H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 16H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 18H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 18V11.5C10 10.1193 11.1193 9 12.5 9C13.8807 9 15 10.1193 15 11.5V18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.5 9.5C8.5 8.11929 9.61929 7 11 7C12.3807 7 13.5 8.11929 13.5 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 14.5C16 13.1193 17.1193 12 18.5 12C19.8807 12 21 13.1193 21 14.5V18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function AudienceSection() {
  return (
    <section className="bg-[#f5fbff] px-6 py-20 text-[#040325] sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[820px] text-center">
          <h2
            className="text-balance text-[clamp(2rem,4vw,2.5rem)] font-semibold leading-[1.2] text-[#040325]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            À qui s'adresse notre expertise ?
          </h2>
          <p className="mx-auto mt-3 max-w-[680px] text-[18px] leading-[1.2] text-[#205fed]">
            Notre cabinet accompagne trois profils de clients dont les besoins fiscaux
            nécessitent une approche spécialisée.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-[8px] border border-[#c8e9fd] bg-white px-6 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.5)]"
            >
              <div className={`flex h-9 w-9 items-center justify-center rounded-[4px] ${card.iconBg}`}>
                <CardIcon type={card.icon} />
              </div>

              <h3
                className="mt-5 text-[20px] font-semibold leading-[1.4] text-[#4141f5]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {card.title}
              </h3>

              <p className="mt-2 text-[16px] leading-[1.5] text-[#5e697a]">{card.subtitle}</p>

              <p className="mt-4 text-[16px] leading-[1.5] text-[#5e697a]">{card.description}</p>

              <p className="mt-4 text-[14px] font-semibold leading-[1.5] text-[#4141f5]">{card.helpTitle}</p>

              <ul className="mt-2 space-y-3 text-[16px] leading-[1.5] text-[#5e697a]">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#4141f5] before:content-['']">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
