export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-[#040325]">
      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-[1280px] items-center px-6 py-16 sm:px-8 lg:px-10">
        <div aria-hidden="true" className="pointer-events-none absolute left-[34px] top-[88px] hidden lg:block">
          <img
            src="/VectorVert.svg"
            alt=""
            width={121}
            height={122}
            className="h-auto w-[84px]"
          />
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute left-[170px] top-[40px] hidden lg:block">
          <img
            src="/VectorRose.svg"
            alt=""
            width={120}
            height={122}
            className="h-auto w-[86px]"
          />
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute right-[120px] top-[82px] hidden lg:block">
          <div className="h-[86px] w-[86px] rounded-full bg-[#08072e]" />
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute left-[190px] bottom-[84px] hidden lg:block">
          <img
            src="/VectorBleu.svg"
            alt=""
            width={121}
            height={122}
            className="h-auto w-[86px]"
          />
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute right-[132px] bottom-[70px] hidden lg:block">
          <img
            src="/VectorJaune.svg"
            alt=""
            width={121}
            height={122}
            className="h-auto w-[86px]"
          />
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute right-[42px] top-[288px] hidden lg:block">
          <div className="h-[88px] w-[88px] rounded-full bg-[#4c4cff]" />
        </div>

        <div className="relative mx-auto max-w-[768px] text-center">
          <div className="mb-6 inline-flex items-center rounded-[6px] bg-[#f7f095] px-4 py-2 text-[16px] leading-none text-[#040325]">
            <span className="font-semibold">30K€</span>
            <span>/moyenne exonérés par client</span>
          </div>

          <h1
            className="text-balance text-[56px] font-semibold leading-[1.2] tracking-[0.02em] text-[#040325]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Réduisons ensemble votre
            <br />
            charge fiscale
          </h1>

          <p className="mx-auto mt-6 max-w-[768px] text-[18px] leading-[1.2] text-[#040325]">
            Nos avocats fiscalistes accompagnent les professions libérales, freelances et TPE/PME dans la
            gestion de l'ensemble de leurs problématiques fiscales.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="#reservation"
              className="inline-flex h-[34px] items-center justify-center rounded-[4px] bg-[#4141f5] px-5 text-[16px] font-bold leading-none text-white transition-opacity hover:opacity-90"
            >
              Réserver un appel gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}