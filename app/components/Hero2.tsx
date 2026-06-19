import Decorations from "./Decorations";

export default function Hero2() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-[#040325]">
      <div className="relative mx-auto flex min-h-[calc(100svh-76px)] w-full max-w-[1500px] items-center px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        
        <Decorations />

        <div className="relative z-10 mx-auto w-full max-w-[920px] text-center">
          <div className="mb-6 inline-flex flex-wrap items-center justify-center rounded-[6px] bg-[#f7f095] px-4 py-2.5 text-center text-[18px] leading-[1.4] text-[#040325] sm:mb-8 sm:px-6 sm:py-3">
            <span className="font-semibold">30K€</span>
            <span className="ml-1.5 sm:ml-2">/moyenne exonérés par client</span>
          </div>

          <h1 className="text-balance text-[clamp(3rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#040325]">
            Réduisons ensemble votre
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            charge fiscale
          </h1>

          <p className="mx-auto mt-6 max-w-[880px] text-[18px] leading-[1.55] text-[#040325] sm:mt-7">
            Nos avocats fiscalistes accompagnent les professions libérales,
            freelances et TPE/PME dans la gestion de l&apos;ensemble de leurs
            problématiques fiscales.
          </p>

          <div className="mt-8 flex justify-center sm:mt-10 lg:mt-12">
            <a
              href="https://forms.gle/s4Dc2FMC87wEpVse8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center rounded-[6px] bg-[#4141f5] px-6 py-3 text-center text-[18px] font-bold leading-[1.4] text-white transition-opacity duration-200 hover:opacity-90 sm:w-auto sm:max-w-none sm:px-7"
            >
              Réserver un appel gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}