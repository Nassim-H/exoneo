import Image from "next/image";

type AudienceCard = {
  icon: string;
  iconBg: string;
  title: string;
  subtitle: string;
  description: string;
  helpTitle: string;
  bullets: string[];
};

const cards: AudienceCard[] = [
  {
    icon: "/Frame1.svg",
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
    icon: "/Frame2.svg",
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
    icon: "/Frame3.svg",
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

export default function AudienceSection() {
  return (
    <section className="bg-[#f5fbff] px-6 py-24 text-[#040325] sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="text-balance text-[clamp(2.4rem,4.5vw,3rem)] font-semibold leading-[1.2] text-[#040325]">
            À qui s'adresse notre expertise ?
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-[20px] leading-[1.5] text-[#205fed]">
            Notre cabinet accompagne trois profils de clients dont les besoins fiscaux
            nécessitent une approche spécialisée.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-[10px] border border-[#c8e9fd] bg-white px-8 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.5)]"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-[6px] ${card.iconBg}`}>
                <Image
                  src={card.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </div>

              <h3 className="mt-6 text-[22px] font-semibold leading-[1.4] text-[#4141f5]">
                {card.title}
              </h3>

              <p className="mt-3 text-[18px] leading-[1.5] text-[#5e697a]">
                {card.subtitle}
              </p>

              <p className="mt-4 text-[18px] leading-[1.5] text-[#5e697a]">
                {card.description}
              </p>

              <p className="mt-5 text-[16px] font-semibold leading-[1.5] text-[#4141f5]">
                {card.helpTitle}
              </p>

              <ul className="mt-3 space-y-3 text-[18px] leading-[1.5] text-[#5e697a]">
                {card.bullets.map((bullet) => (
                  <li
                    key={bullet}
  className="relative pl-6 text-[18px] leading-[1.5] text-[#5e697a] before:absolute before:left-0 before:top-[11px] before:h-2 before:w-2 before:rounded-full before:bg-[#4141f5] before:content-['']"
                  >
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