export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-[#040325]">
      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] w-full max-w-[1500px] items-center px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[35px] top-[172px] block lg:left-[34px] lg:top-[208px]"
        >
          <img
            src="/VectorVert.svg"
            alt=""
            width={121}
            height={122}
            className="h-auto w-[58px] sm:w-[66px] lg:w-[84px]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[65px] top-[16px] block lg:left-[170px] lg:top-[40px]"
        >
          <img
            src="/VectorRose.svg"
            alt=""
            width={120}
            height={122}
            className="h-auto w-[58px] sm:w-[66px] lg:w-[86px]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[38px] top-[22px] block lg:right-[120px] lg:top-[52px]"
        >
          <div className="h-[48px] w-[48px] rounded-full bg-[#08072e] sm:h-[58px] sm:w-[58px] lg:h-[86px] lg:w-[86px]" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[42px] bottom-[84px] block lg:left-[190px] lg:bottom-[104px]"
        >
          <img
            src="/VectorBleu.svg"
            alt=""
            width={121}
            height={122}
            className="h-auto w-[58px] sm:w-[66px] lg:w-[86px]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[58px] bottom-[74px] block lg:right-[132px] lg:bottom-[70px]"
        >
          <img
            src="/VectorJaune.svg"
            alt=""
            width={121}
            height={122}
            className="h-auto w-[58px] sm:w-[66px] lg:w-[86px]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8px] top-[250px] block lg:right-[42px] lg:top-[388px]"
        >
          <div className="h-[52px] w-[52px] rounded-full bg-[#4c4cff] sm:h-[62px] sm:w-[62px] lg:h-[88px] lg:w-[88px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[920px] text-center">
          <div className="mb-6 inline-flex flex-wrap items-center justify-center rounded-[6px] bg-[#f7f095] px-4 py-2.5 text-center text-[14px] leading-[1.4] text-[#040325] sm:mb-8 sm:px-6 sm:py-3 sm:text-[16px] lg:px-7 lg:py-3.5 lg:text-[20px]">
            <span className="font-semibold">30K€</span>
            <span className="ml-1.5 sm:ml-2">/moyenne exonérés par client</span>
          </div>

          <h1 className="text-balance text-[38px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#040325] sm:text-[48px] md:text-[58px] lg:text-[68px]">
            Réduisons ensemble votre
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            charge fiscale
          </h1>

          <p className="mx-auto mt-6 max-w-[880px] text-[16px] leading-[1.55] text-[#040325] sm:mt-7 sm:text-[18px] md:text-[19px] lg:mt-8 lg:text-[20px]">
            Nos avocats fiscalistes accompagnent les professions libérales,
            freelances et TPE/PME dans la gestion de l&apos;ensemble de leurs
            problématiques fiscales.
          </p>

          <div className="mt-8 flex justify-center sm:mt-10 lg:mt-12">
            <a
              href="https://forms.gle/s4Dc2FMC87wEpVse8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center rounded-[6px] bg-[#4141f5] px-6 py-3 text-center text-[16px] font-bold leading-[1.4] text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 sm:w-auto sm:max-w-none sm:px-7 sm:text-[18px]"
            >
              Réserver un appel gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}