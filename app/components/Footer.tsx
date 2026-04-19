import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full self-stretch border-t-[8px] border-[#ec8dcf] bg-[#4141f5] text-white">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-start px-6 sm:px-8 lg:px-10">
        <div className="mx-auto w-full py-12 md:py-14">
          <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
            <div className="w-full md:max-w-[720px]">
              <Link
                href="/"
                className="inline-block text-[58px] font-semibold italic leading-none tracking-[-0.03em] text-white"
                aria-label="Accueil Exonéo"
              >
                exonéo
              </Link>
            </div>

            <div className="w-full max-w-[340px] space-y-5">
              <h3 className="text-[18px] font-semibold leading-[1.5] text-white">Contact</h3>

              <div className="space-y-4 text-[18px] leading-[1.6] text-[#dfe5ee]">
                <Link href="/#reservation" className="block transition-opacity hover:opacity-85">
                  Réserver votre appel découverte
                </Link>

                <a href="mailto:contact@exoneo.fr" className="block transition-opacity hover:opacity-85">
                  contact@exoneo.fr
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex w-full flex-col gap-5 border-t border-[#80c1fc] pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-[15px] leading-[1.5] text-white">
              © 2026 exonéo. Tous droits réservés.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[15px] leading-[1.5] text-white">
              <Link href="/mentions-legales" className="transition-opacity hover:opacity-85">
                Mentions légales
              </Link>

              <Link href="/politique-confidentialite" className="transition-opacity hover:opacity-85">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}