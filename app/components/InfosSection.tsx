type Column = {
  title: string;
  items: string[];
};

const columns: Column[] = [
  {
    title: "Structure et organisation",
    items: [
      "Vous avez le sentiment que votre structure actuelle (EI, société, SEL) n'est pas optimale pour votre situation.",
      "Vous repoussez des décisions importantes : passage en SEL, création de holding par manque de visibilité sur les conséquences.",
      "Vous ne savez pas comment articuler votre patrimoine professionnel et personnel de manière cohérente.",
    ],
  },
  {
    title: "Charge fiscale",
    items: [
      "Votre impôt augmente plus vite que vos revenus, sans que vous compreniez vraiment pourquoi.",
      "Vous savez qu'il existe des leviers d'optimisation, mais vous ne savez pas lesquels sont adaptés à votre cas ni lesquels sont risqués.",
      "Chaque année, vous avez l'impression de payer plus que nécessaire, sans pouvoir agir.",
    ],
  },
  {
    title: "Complexité et sécurité",
    items: [
      "Vous avez peur de faire un mauvais choix ou de vous retrouver dans un montage fragile vis-à-vis de l'administration fiscale.",
      "Vous avez entendu parler de SEL, de holdings, de QPV... mais personne ne vous a expliqué clairement ce qui est pertinent pour vous.",
      "Vous cherchez un interlocuteur capable de vous donner une vision claire, pas un discours générique.",
    ],
  },
];

export default function InfosSection() {
  return (
    <section className="bg-white px-6 py-28 text-[#040325] sm:px-8 lg:px-10 lg:py-[128px]">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-balance text-[clamp(2.5rem,5vw,3.2rem)] font-semibold leading-[1.15] text-[#040325]">
            Les questions que vous vous posez
          </h2>

          <p className="mx-auto mt-5 max-w-[820px] text-[20px] leading-[1.5] text-[#205fed]">
            Beaucoup de professionnels partagent ce constat : une fiscalité qui pèse, une
            structure qui mériterait d'être revue, mais ni le temps ni la clarté pour s'en occuper.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col">
              <h3 className="pb-5 text-[24px] font-bold leading-[1.35] text-[#040325]">
                {column.title}
              </h3>

              <div className="space-y-5 border-t border-[#c8e9fd] pt-5">
                {column.items.map((item) => (
                  <div
                    key={item}
                    className="border-l-[3px] border-[#4141f5] pl-5 text-[18px] leading-[1.6] text-[#5e697a]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="https://forms.gle/s4Dc2FMC87wEpVse8"
            className="inline-flex h-[52px] items-center justify-center rounded-[6px] bg-[#4141f5] px-7 text-[18px] font-bold leading-[1.4] text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            Réserver un appel gratuit
          </a>
        </div>
      </div>
    </section>
  );
}