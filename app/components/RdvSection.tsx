function AppointmentCard() {
  return (
    <article className="w-full max-w-[300px] rounded-[8px] bg-[#efefef] p-4 text-black shadow-sm sm:p-4.5">
      <div className="flex items-start gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="mt-0.5 h-4.5 w-4.5 shrink-0 text-black"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 2v4M16 2v4M3 10h18M5 5h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
          />
        </svg>

        <div>
          <p className="text-[16px] font-medium leading-[1.2] text-black sm:text-[17px]">
            Appel découverte offert (15 min)
          </p>
          <p className="mt-1.5 text-[13px] leading-[1.45] text-neutral-600 sm:text-[14px]">
            Vérifiez dès maintenant que nous sommes le bon interlocuteur pour votre situation.
          </p>
        </div>
      </div>

      <a
        href="#reservation"
        className="mt-4 inline-flex w-full items-center justify-center rounded-[4px] bg-[#4a46f2] px-3 py-2.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        Réserver un appel gratuit
      </a>
    </article>
  );
}

export default function RdvSection() {
  return (
    <section className="w-full bg-white px-6 py-16 text-[#040325] sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden lg:grid-cols-2">
        <div className="min-h-[320px] bg-white lg:min-h-[520px]">
          <img
            src="/Bureau.png"
            alt="Conseiller au téléphone"
            className="block h-full w-full object-cover"
          />
        </div>

        <div className="flex min-h-[320px] items-center bg-[#3f42f5] px-6 py-10 text-white sm:px-8 lg:min-h-[520px] lg:px-14">
          <div className="w-full max-w-[540px]">
            <h2
              className="max-w-[500px] text-[clamp(2.2rem,4.8vw,4.8rem)] font-semibold leading-[1.08] tracking-[-0.02em]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Réduisons votre fiscalité maintenant
            </h2>

            <div className="mt-6 lg:mt-8">
              <AppointmentCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}