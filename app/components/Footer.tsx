import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full self-stretch border-t-[8px] border-[#ec8dcf] bg-[#4141f5] text-white">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-start px-6 sm:px-8 lg:px-10">
        <div className="mx-auto w-full py-12 md:py-14">
          <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
            
            {/* LOGO */}
            <div className="w-full md:max-w-[720px] pl-10 ml-10">
              <Link href="/" className="inline-block" aria-label="Accueil Exonéo">
                <Image
                  src="/exoneoblanc.svg"
                  alt="Exonéo"
                  width={220}
                  height={60}
                  className="h-auto w-[180px] md:w-[220px]"
                />
              </Link>
            </div>

            {/* CONTACT */}
            <div className="w-full max-w-[340px] space-y-5">
              <h3 className="text-[18px] font-semibold leading-[1.2] text-white">
                Contact
              </h3>

              <div className="space-y-4 text-[16px] leading-[1.4] text-[#dfe5ee]">
                <Link
                  href="https://forms.gle/s4Dc2FMC87wEpVse8"
                  className="block transition-opacity hover:opacity-85"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver votre appel découverte
                </Link>

                <a
                  href="mailto:contact@exoneo.fr"
                  className="block transition-opacity hover:opacity-85"
                >
                  contact@cabinet-exoneo.fr
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-14 flex w-full flex-col gap-5 border-t border-[#80c1fc] pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-[12px] leading-[1.4] text-white">
              © 2026 exonéo. Tous droits réservés.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] leading-[1.4] text-white">
              <Link
                href="/mentions-legales"
                className="transition-opacity hover:opacity-85"
              >
                Mentions légales
              </Link>

              <Link
                href="/politique-confidentialite"
                className="transition-opacity hover:opacity-85"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}