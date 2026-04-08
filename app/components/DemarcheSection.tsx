type Step = {
  number: string;
  numberColor: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "1",
    numberColor: "text-[#4141f5]",
    title: "Prise de contact",
    description:
      "Un premier échange rapide pour comprendre votre situation, vos enjeux et vérifier l'adéquation de notre accompagnement avec vos besoins.",
  },
  {
    number: "2",
    numberColor: "text-[#ec8dcf]",
    title: "Consultation",
    description:
      "Une analyse approfondie de votre situation fiscale et sociale afin d'identifier les optimisations pertinentes et de préparer la stratégie de mise en œuvre.",
  },
  {
    number: "3",
    numberColor: "text-[#68e181]",
    title: "Mise en oeuvre & Accompagnement",
    description:
      "Nous déployons la stratégie validée et assurons un accompagnement rigoureux jusqu'à sa parfaite mise en place.",
  },
];

export default function DemarcheSection() {
  return (
    <section className="bg-white px-6 py-24 text-[#040325] sm:px-8 lg:px-10 lg:py-[112px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[860px] text-center">
          <h2
            className="text-balance text-[clamp(2.3rem,5vw,3rem)] font-semibold leading-[1.15] text-[#040325]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Une démarche claire
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[18px] leading-[1.25] text-[#205fed]">
            Notre objectif : vous faire passer d'une situation floue à une structure fiscalement
            optimisée, étape par étape, avec une visibilité totale sur le processus.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {steps.map((step) => (
            <article key={step.number} className="text-center">
              <div className={`text-[clamp(4rem,8vw,5.5rem)] font-semibold leading-none ${step.numberColor}`}>
                {step.number}
              </div>

              <h3
                className="mt-4 text-[20px] font-bold leading-[1.35] text-[#040325]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {step.title}
              </h3>

              <p className="mx-auto mt-3 max-w-[320px] text-[16px] leading-[1.5] text-[#5e697a]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
