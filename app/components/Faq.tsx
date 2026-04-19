type FaqItem = {
  question: string;
  answer: string[];
};

const faqItems: FaqItem[] = [
  {
    question: "Comment se déroule la consultation avec l'avocat ?",
    answer: [
      "À la suite de l’appel découverte, s’il a été convenu de poursuivre, une consultation est organisée avec un avocat du cabinet.",
      "Cette consultation prend la forme d’un échange en visioconférence afin d’analyser en détail votre situation et de définir la stratégie la plus adaptée. À l’issue de cet entretien, un email récapitulatif vous est adressé.",
      "Lorsque la complexité du montage envisagé le nécessite, la consultation visio peut être complétée par une consultation écrite détaillée.",
      "Enfin, à l’issue de la consultation, la prestation recommandée ainsi que le tarif de l’accompagnement vous seront communiqués en toute transparence.",
    ],
  },
  {
    question: "Comment se déroule l'appel découverte ?",
    answer: [
      "Une fois vos informations de contact reçues, un avocat du cabinet vous contactera dans les plus brefs délais afin de comprendre votre situation et d’évaluer dans quelle mesure nous pouvons vous accompagner.",
      "À l’issue de cet échange, si votre situation le nécessite, nous vous adresserons par email un lien de prise de rendez-vous pour une consultation visio plus approfondie.",
    ],
  },
  {
    question: "La consultation est-elle payante ?",
    answer: [
      "À l’issue de la consultation, la prestation recommandée ainsi que le tarif de l’accompagnement vous sont communiqués en toute transparence.",
    ],
  },
  {
    question: "Je travaille déjà avec un expert-comptable, est-ce compatible ?",
    answer: [
      "Oui, parfaitement. Le rôle de l’avocat fiscaliste est complémentaire de celui de l’expert-comptable.",
      "Nous intervenons principalement sur les aspects stratégiques, juridiques et fiscaux, tandis que votre expert-comptable assure le suivi comptable et déclaratif courant.",
      "Dans la pratique, nous travaillons main dans la main avec l’expert-comptable de nos clients, ainsi qu’avec nos partenaires experts-comptables. Certaines de nos prestations peuvent d’ailleurs nécessiter l’intervention d’un expert-comptable ou d’un commissaire aux comptes afin de garantir une mise en œuvre complète.",
    ],
  },
];

function Chevron() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 text-[#4141f5] transition-transform duration-200 group-open:rotate-180"
    >
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Faq() {
  return (
    <section className="bg-white px-6 py-28 text-[#040325] sm:px-8 lg:px-10 lg:py-[128px]" id="questions">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-[1080px]">
          <header className="text-center">
            <h2 className="text-[clamp(2.5rem,4.5vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#05052a]">
              Questions fréquentes
            </h2>

            <p className="mt-5 text-[22px] leading-[1.4] text-[#4141f5] sm:text-[24px]">
              Les réponses aux questions que vous vous posez avant de prendre rendez-vous.
            </p>
          </header>

          <div className="mt-16 space-y-[2px]">
            {faqItems.map((item) => (
              <details key={item.question} className="group border-b border-[#4141f5]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 text-[24px] font-normal leading-[1.3] text-[#1a1a1a] marker:content-none">
                  <span>{item.question}</span>
                  <Chevron />
                </summary>

                <div className="pb-8 pr-10 text-[20px] leading-[1.6] text-[#2e3245]">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph} className="mt-4 first:mt-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}