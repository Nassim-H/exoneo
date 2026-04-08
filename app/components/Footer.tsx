import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4141f5] px-6 py-10 text-white sm:px-8 lg:px-10 lg:pt-12 lg:pb-9">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <Link
            href="/"
            className="inline-block text-[52px] font-semibold italic leading-none tracking-[-0.035em] text-white"
            style={{ fontFamily: "Arial, sans-serif" }}
            aria-label="Accueil Exonéo"
          >
            exonéo
          </Link>

          <div className="max-w-[360px] lg:pt-1">
            <h3 className="text-[24px] font-semibold leading-none text-white">Contact</h3>
            <div className="mt-5 space-y-3 text-[22px] leading-[1.35] text-white/55">
              <Link href="/#reservation" className="block transition-opacity hover:opacity-80">
                Réserver votre appel découverte
              </Link>
              <a href="mailto:contact@exoneo.fr" className="block transition-opacity hover:opacity-80">
                contact@exoneo.fr
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/26 pt-6 lg:mt-11 lg:pt-7">
          <div className="flex flex-col gap-4 text-[19px] leading-[1.35] text-white/90 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 exonéo. Tous droits réservés.</p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-white/90">
              <Link href="/mentions-legales" className="transition-opacity hover:opacity-80">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="transition-opacity hover:opacity-80">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
