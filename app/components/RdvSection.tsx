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
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 2v4M16 2v4M3 10h18M5 5h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
          />
        </svg>

        <div>
          <p className="text-[20px] font-medium leading-[1.3] text-black">
            Appel découverte offert (15 min)
          </p>

          <p className="mt-2 text-[16px] leading-[1.55] text-neutral-600">
            Vérifiez dès maintenant que nous sommes le bon interlocuteur pour votre situation.
          </p>
        </div>
      </div>

      <a
        href="https://forms.gle/s4Dc2FMC87wEpVse8"
        className="mt-6 inline-flex h-[52px] w-full items-center justify-center rounded-[6px] bg-[#4a46f2] px-5 text-[18px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        Réserver un appel gratuit
      </a>
    </article>
  );
}

export default function RdvSection() {
  return (
    <section className="w-full bg-white px-6 py-20 text-[#040325] sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1500px] overflow-hidden rounded-[10px] lg:grid-cols-[1fr_2fr]">
        <div className="min-h-[360px] bg-white lg:min-h-[620px]">
          <img
            src="/Bureau.png"
            alt="Conseiller au téléphone"
            className="block h-full w-full object-cover object-left"
          />
        </div>

        <div className="flex min-h-[360px] items-center bg-[#3f42f5] px-8 py-12 text-white sm:px-10 lg:min-h-[620px] lg:px-16">
          <div className="w-full max-w-[640px]">
            <h2 className="max-w-[620px] text-[clamp(2.5rem,5vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.02em]">
              Réduisons votre fiscalité maintenant
            </h2>

            <div className="mt-8">
              <AppointmentCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}