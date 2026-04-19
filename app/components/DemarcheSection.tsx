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
    <section className="bg-white px-6 py-28 text-[#040325] sm:px-8 lg:px-10 lg:py-[128px]" id="services">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-balance text-[clamp(2.5rem,5vw,3.2rem)] font-semibold leading-[1.15] text-[#040325]">
            Une démarche claire
          </h2>

          <p className="mx-auto mt-5 max-w-[820px] text-[20px] leading-[1.5] text-[#205fed]">
            Notre objectif : vous faire passer d'une situation floue à une structure fiscalement
            optimisée, étape par étape, avec une visibilité totale sur le processus.
          </p>
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-3 lg:gap-10">
          {steps.map((step) => (
            <article key={step.number} className="text-center">
              
              <div className={`text-[clamp(5rem,9vw,6.5rem)] font-semibold leading-none ${step.numberColor}`}>
                {step.number}
              </div>

              <h3 className="mt-6 text-[26px] font-bold leading-[1.35] text-[#040325]">
                {step.title}
              </h3>

              <p className="mx-auto mt-4 max-w-[380px] text-[18px] leading-[1.6] text-[#5e697a]">
                {step.description}
              </p>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}