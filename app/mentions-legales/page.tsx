import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell from "../components/LegalPageShell";

export const metadata: Metadata = {
  title: "Mentions légales | Exonéo",
  description: "Mentions légales du site Exonéo.",
};

const sections = [
  {
    title: "1. Éditeur du site",
    content: (
      <>
        <p>
          Le présent site internet est édité par deux cabinets d’avocats exerçant à titre individuel,
          utilisant conjointement la marque <span className="font-semibold text-[#040325]">EXONEO</span>.
        </p>
        <p>
          Ces cabinets exercent de manière indépendante, chacun pour son propre compte.
        </p>
      </>
    ),
  },
  {
    title: "2. Cabinet français",
    content: (
      <>
        <p>Cabinet d’avocat inscrit au barreau de Lille.</p>
        <p>Numéro SIREN : 877 543 181.</p>
      </>
    ),
  },
  {
    title: "3. Cabinet luxembourgeois",
    content: (
      <>
        <p>Cabinet d’avocat inscrit au barreau de Luxembourg.</p>
        <p>Numéro de TVA intracommunautaire : XXXXX.</p>
      </>
    ),
  },
  {
    title: "4. Contact",
    content: (
      <>
        <p>Pour toute demande relative au Site internet, vous pouvez contacter :</p>
        <p>
          <a
            href="mailto:contact@cabinet-exoneo.com"
            className="font-medium text-[#4141f5] hover:underline"
          >
            contact@cabinet-exoneo.com
          </a>
        </p>
      </>
    ),
  },
  {
    title: "5. Directeur de la publication",
    content: (
      <p>
        Les responsables des cabinets susmentionnés assurent conjointement la direction de la publication du Site internet.
      </p>
    ),
  },
  {
    title: "6. Hébergement",
    content: (
      <>
        <p>Le Site internet est hébergé par :</p>
        <div className="space-y-1">
          <p>Vercel Inc.</p>
          <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <p>+1 (559) 288-7060</p>
          <p>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#4141f5] hover:underline"
            >
              https://vercel.com
            </a>
          </p>
        </div>
      </>
    ),
  },
  {
    title: "7. Propriété intellectuelle",
    content: (
      <p>
        L’ensemble des contenus présents sur le Site internet, notamment les textes, éléments graphiques,
        logos, marques, images et éléments de mise en page, sont protégés par le droit de la propriété
        intellectuelle. Toute reproduction, représentation, modification ou exploitation non autorisée est interdite.
      </p>
    ),
  },
  {
    title: "8. Responsabilité",
    content: (
      <p>
        Les informations présentes sur le Site internet sont fournies à titre informatif. Elles ne constituent
        pas un conseil juridique ou fiscal personnalisé. L’utilisateur est invité à contacter directement les
        cabinets pour toute demande adaptée à sa situation.
      </p>
    ),
  },
  {
    title: "9. Données personnelles",
    content: (
      <p>
        Pour en savoir plus sur le traitement des données personnelles, vous pouvez consulter la{" "}
        <Link
          href="/politique-confidentialite"
          className="font-medium text-[#4141f5] hover:underline"
        >
          politique de confidentialité
        </Link>
        .
      </p>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <LegalPageShell
      title="Mentions légales"
      description="Informations légales relatives à l'éditeur, à la publication et à l'hébergement du site Exonéo."
    >
      <div className="space-y-8 text-[17px] leading-[1.65] text-[#2f3244]">
        <div className="space-y-4 rounded-[10px] bg-[#f5fbff] p-5 sm:p-6">
          <p>
            Le présent document regroupe les informations légales relatives au Site internet Exonéo.
          </p>
          <p>
            Il précise notamment l’identité des éditeurs du site, les informations relatives à
            l’hébergement, ainsi que les conditions générales d’utilisation des contenus publiés.
          </p>
          <p>
            Le Site internet est exploité par deux cabinets d’avocats exerçant à titre individuel,
            utilisant conjointement la marque <span className="font-semibold text-[#040325]">EXONEO</span>.
          </p>
        </div>

        {sections.map((section) => (
          <section key={section.title} className="border-t border-[#e7e8f0] pt-7">
            <h2 className="mb-3 text-[22px] font-semibold tracking-[-0.01em] text-[#040325]">
              {section.title}
            </h2>
            <div className="space-y-3">{section.content}</div>
          </section>
        ))}
      </div>
    </LegalPageShell>
  );
}