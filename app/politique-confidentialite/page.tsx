import type { Metadata } from "next";
import LegalPageShell from "../components/LegalPageShell";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Exonéo",
  description: "Politique de confidentialité du site Exonéo.",
};

const sections = [
  {
    title: "1. Responsable du traitement",
    content: (
      <p>
        Les responsables du traitement sont les deux cabinets d’avocats mentionnés dans les mentions légales du Site internet,
        agissant chacun pour leur propre compte.
      </p>
    ),
  },
  {
    title: "2. Contact",
    content: (
      <>
        <p>
          Pour toute question relative à la protection des données ou pour exercer leurs droits, les Internautes peuvent contacter :
        </p>
        <p>
          <a href="mailto:contact@cabinet-exoneo.com" className="font-medium text-[#4141f5] hover:underline">
            contact@cabinet-exoneo.com
          </a>
        </p>
      </>
    ),
  },
  {
    title: "3. Données collectées",
    content: (
      <>
        <p>
          Le Site internet collecte uniquement des données techniques de navigation enregistrées dans les logs du serveur, notamment :
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>les dates et heures de chaque requête,</li>
          <li>l’adresse IP des terminaux utilisés.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Finalités des traitements",
    content: (
      <>
        <p>Les données sont traitées afin de :</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>assurer la sécurité et la maintenance du Site internet,</li>
          <li>répondre aux demandes des Internautes, notamment en matière d’exercice de leurs droits.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Base légale",
    content: (
      <p>
        Les traitements reposent sur l’intérêt légitime des cabinets à assurer le bon fonctionnement et la sécurité du Site internet,
        ainsi qu’à traiter les demandes reçues.
      </p>
    ),
  },
  {
    title: "6. Destinataires des données",
    content: (
      <>
        <p>Les données peuvent être accessibles :</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>aux cabinets concernés,</li>
          <li>à leurs prestataires techniques agissant en qualité de sous-traitants.</li>
        </ul>
        <p>
          À ce titre, la société Google Ireland Limited (Google Workspace) peut être amenée à traiter certaines données.
        </p>
        <p>
          Des transferts de données en dehors de l’Union européenne peuvent intervenir, encadrés par des garanties appropriées
          conformément à la réglementation applicable.
        </p>
      </>
    ),
  },
  {
    title: "7. Durée de conservation",
    content: <p>Les données sont conservées pendant une durée maximale d’un an.</p>,
  },
  {
    title: "8. Droits des Internautes",
    content: (
      <>
        <p>Conformément à la réglementation applicable, les Internautes disposent des droits suivants :</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>droit d’accès,</li>
          <li>droit de rectification,</li>
          <li>droit d’effacement,</li>
          <li>droit à la limitation du traitement,</li>
          <li>droit d’opposition,</li>
          <li>droit à la portabilité des données.</li>
        </ul>
        <p>Ces droits peuvent être exercés à l’adresse suivante :</p>
        <p>
          <a href="mailto:contact@cabinet-exoneo.com" className="font-medium text-[#4141f5] hover:underline">
            contact@cabinet-exoneo.com
          </a>
        </p>
        <p>Les Internautes disposent également du droit d’introduire une réclamation auprès :</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>de la CNIL (France),</li>
          <li>de la CNPD (Luxembourg).</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Entrée en vigueur",
    content: <p>La présente Politique entre en vigueur le 01.06.2026.</p>,
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageShell
      title="Politique de confidentialité"
      description="Informations relatives au traitement des données personnelles sur le site Exonéo."
    >
      <div className="space-y-8 text-[17px] leading-[1.65] text-[#2f3244]">
        <div className="space-y-4 rounded-[10px] bg-[#f5fbff] p-5 sm:p-6">
          <p>
            Le présent document constitue la politique de confidentialité du présent site internet.
          </p>
          <p>
            Il informe les internautes visitant le Site internet sur les conditions dans lesquelles sont traitées les données
            à caractère personnel les concernant.
          </p>
          <p>
            Le Site internet est exploité par deux cabinets d’avocats exerçant à titre individuel, utilisant conjointement
            la marque <span className="font-semibold text-[#040325]">EXONEO</span>.
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