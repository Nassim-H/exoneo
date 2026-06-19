import Footer from "./Footer";
import Navbar from "./NavBar";


type LegalPageShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function LegalPageShell({
  title,
  description,
  children,
}: LegalPageShellProps) {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-white text-[#040325]">
        <section className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <img
            src="/VectorRose.svg"
            alt=""
            className="pointer-events-none absolute left-4 top-8 w-[58px] opacity-70 lg:left-10 lg:top-14 lg:w-[82px]"
          />

          <img
            src="/VectorBleu.svg"
            alt=""
            className="pointer-events-none absolute right-6 top-20 w-[58px] opacity-70 lg:right-14 lg:top-24 lg:w-[82px]"
          />

          <div className="pointer-events-none absolute bottom-16 right-10 h-[64px] w-[64px] rounded-full bg-[#4c4cff] opacity-90 lg:h-[88px] lg:w-[88px]" />

          <div className="relative z-10 mx-auto max-w-[900px] text-center">
            <div className="mb-6 inline-flex rounded-[6px] bg-[#f7f095] px-4 py-2 text-[16px] font-semibold">
              Exonéo
            </div>

            <h1 className="text-balance text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
              {title}
            </h1>

            <p className="mx-auto mt-6 max-w-[720px] text-[18px] leading-[1.55] text-[#2f3244]">
              {description}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1000px] px-5 pb-20 sm:px-8 lg:px-10">
          <div className="rounded-[14px] border border-[#e7e8f0] bg-white px-6 py-8 shadow-sm sm:px-10 lg:px-14 lg:py-12">
            {children}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}