export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-[#040325] items-center">
      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] w-full max-w-[1500px] items-center px-6 py-16 sm:px-8 lg:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[34px] top-[208px] hidden lg:block"
        >
          <img
            src="/VectorVert.svg"
            alt=""
            width={121}
            height={122}
            className="h-auto w-[84px]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[170px] top-[40px] hidden lg:block"
        >
          <img
            src="/VectorRose.svg"
            alt=""
            width={120}
            height={122}
            className="h-auto w-[86px]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[120px] top-[52px] hidden lg:block"
        >
          <div className="h-[86px] w-[86px] rounded-full bg-[#08072e]" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[190px] bottom-[104px] hidden lg:block"
        >
          <img
            src="/VectorBleu.svg"
            alt=""
            width={121}
            height={122}
            className="h-auto w-[86px]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[132px] bottom-[70px] hidden lg:block"
        >
          <img
            src="/VectorJaune.svg"
            alt=""
            width={121}
            height={122}
            className="h-auto w-[86px]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[42px] top-[388px] hidden lg:block"
        >
          <div className="h-[88px] w-[88px] rounded-full bg-[#4c4cff]" />
        </div>

        <div className="relative mx-auto w-full max-w-[920px] text-center">
          <div className="mb-8 inline-flex items-center rounded-[6px] bg-[#f7f095] px-7 py-3.5 text-[20px] leading-[1.4] text-[#040325]">
  <span className="font-semibold">30K€</span>
  <span className="ml-2">/moyenne exonérés par client</span>
</div>

         <h1 className="text-balance text-[68px] font-semibold leading-[1.15] tracking-[0.01em] text-[#040325]">
  Réduisons ensemble votre
  <br />
  charge fiscale
</h1>

          <p className="mx-auto mt-8 max-w-[880px] text-[20px] leading-[1.5] text-[#040325]">
  Nos avocats fiscalistes accompagnent les professions libérales, freelances et TPE/PME dans la
  gestion de l'ensemble de leurs problématiques fiscales.
</p>

<div className="mt-12 flex justify-center">
  <a
    href="#reservation"
    className="inline-flex h-[52px] items-center justify-center rounded-[6px] bg-[#4141f5] px-7 text-[18px] font-bold leading-[1.4] text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
  >
    Réserver un appel gratuit
  </a>
</div>
        </div>
      </div>
    </section>
  );
}