function AppointmentCard() {
  return (
    <article className="w-full max-w-[460px] rounded-[10px] bg-white p-6 text-black shadow-sm lg:p-7">
      <div className="flex items-start gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="mt-1 h-5 w-5 shrink-0 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 2v4M16 2v4M3 10h18M5 5h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
          />
        </svg>

        <div>
          <p className="text-[16px] font-medium leading-[1.2]">
            Appel découverte offert (15 min)
          </p>

          <p className="mt-2 text-[14px] leading-[1.4] text-neutral-600">
            Vérifiez dès maintenant que nous sommes le bon interlocuteur pour votre situation.
          </p>
        </div>
      </div>

      <a 
        target="_blank"
        href="https://forms.gle/s4Dc2FMC87wEpVse8" 
        className="mt-6 inline-flex h-[52px] w-full items-center justify-center rounded-[6px] bg-[#4a46f2] px-5 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        Réserver un appel gratuit
      </a>
    </article>
  );
}

export default function RdvSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 text-[#040325] lg:py-24">
      <div className="mx-auto grid w-full max-w-[1500px] px-6 sm:px-8 lg:grid-cols-[1fr_2fr] lg:px-10">
        {/* IMAGE */}
        <div className="hidden min-h-[360px] overflow-hidden rounded-l-[10px] bg-white lg:block lg:min-h-[620px]">
          <img
            src="/Bureau.png"
            alt="Conseiller au téléphone"
            className="block h-full w-full object-cover object-left"
          />
        </div>

        {/* BLOC BLEU */}
        <div className="relative min-h-[360px] rounded-[10px] bg-[#3f42f5] text-white lg:min-h-[620px] lg:rounded-none">
          {/* Extension uniquement vers la droite - desktop only */}
          <div className="hidden lg:absolute lg:inset-y-0 lg:left-0 lg:block lg:w-[100vw] lg:bg-[#3f42f5]" />

          {/* Contenu */}
          <div className="relative z-10 flex h-full items-center px-5 py-10 sm:px-8 lg:px-16 lg:py-12">
            <div className="mx-auto w-full max-w-[640px] lg:ml-auto">
              <h2 className="max-w-[620px] text-center text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[40px] lg:text-left lg:text-[40px] lg:leading-[1.06]">
                Réduisons votre fiscalité maintenant
              </h2>

              <div className="mt-7 lg:mt-8">
                <AppointmentCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}