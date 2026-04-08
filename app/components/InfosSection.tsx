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
    <section className="bg-white px-6 py-24 text-[#040325] sm:px-8 lg:px-10 lg:py-[112px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[900px] text-center">
          <h2
            className="text-balance text-[clamp(2.4rem,5vw,3rem)] font-semibold leading-[1.15] text-[#040325]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Les questions que vous vous posez
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[18px] leading-[1.2] text-[#205fed]">
            Beaucoup de professionnels partagent ce constat : une fiscalité qui pèse, une
            structure qui mériterait d'être revue, mais ni le temps ni la clarté pour s'en occuper.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col">
              <h3
                className="pb-4 text-[20px] font-bold leading-[1.4] text-[#040325]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {column.title}
              </h3>

              <div className="space-y-4 border-t border-[#c8e9fd] pt-4">
                {column.items.map((item) => (
                  <div key={item} className="border-l-2 border-[#4141f5] pl-4 text-[16px] leading-[1.5] text-[#5e697a]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#reservation"
            className="inline-flex h-[34px] items-center justify-center rounded-[4px] bg-[#4141f5] px-6 text-[16px] font-bold leading-none text-white transition-opacity hover:opacity-90"
          >
            Réserver un appel gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
