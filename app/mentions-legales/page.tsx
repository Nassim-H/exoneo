import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell from "../components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Mentions légales | Exonéo",
  description: "Mentions légales du site Exonéo.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageShell
      title="Mentions légales"
      description="Informations légales relatives à l'éditeur, à la publication et à l'hébergement du site Exonéo."
    >
      <section id="mentions-legales" className="rounded-[8px] bg-white px-6 py-7 text-[#040325] sm:px-8 lg:px-10">
            <h2
              className="text-[clamp(1.6rem,3vw,2.35rem)] font-semibold leading-[1.08] tracking-[-0.02em]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Mentions légales
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-[1.5] text-[#2f3244] sm:text-[16px]">
              <p>
                Le présent site internet (ci-après le « Site internet ») est édité par deux cabinets d’avocats exerçant à
                titre individuel, dont les informations sont les suivantes :
              </p>

              <div>
                <h3 className="text-[18px] font-semibold text-[#040325]">En France :</h3>
                <p>Cabinet d’avocat inscrit au barreau de Lille</p>
                <p>Numéro SIREN : 877 543 181</p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#040325]">Au Luxembourg :</h3>
                <p>Cabinet d’avocat inscrit au barreau de Luxembourg</p>
                <p>Numéro de TVA intracommunautaire : XXXXX</p>
              </div>

              <p>Ces cabinets exercent de manière indépendante.</p>
              <p>La dénomination « EXONEO » correspond à une marque utilisée conjointement par ces cabinets.</p>

              <div>
                <h3 className="text-[18px] font-semibold text-[#040325]">Contact :</h3>
                <p>
                  Email :{" "}
                  <a href="mailto:contact@cabinet-exoneo.com" className="text-[#4141f5] hover:underline">
                    contact@cabinet-exoneo.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#040325]">Directeur de la publication :</h3>
                <p>Les responsables des cabinets susmentionnés</p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#040325]">Hébergement :</h3>
                <p>[À compléter : nom de l’hébergeur]</p>
                <p>[Adresse de l’hébergeur]</p>
                <p>[Numéro de téléphone de l’hébergeur]</p>
              </div>

              <p className="pt-2">
                Consulter également la{" "}
                <Link href="/politique-confidentialite" className="text-[#4141f5] hover:underline">
                  politique de confidentialité
                </Link>
                .
              </p>
            </div>
      </section>
    </LegalPageShell>
  );
}
