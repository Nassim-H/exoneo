import type { Metadata } from "next";
import LegalPageShell from "../components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Exonéo",
  description: "Politique de confidentialité du site Exonéo.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageShell
      title="Politique de confidentialité"
      description="Informations relatives au traitement des données personnelles sur le site Exonéo."
    >
      <section className="rounded-[8px] bg-white px-6 py-7 text-[#040325] sm:px-8 lg:px-10">
        <div className="space-y-5 text-[15px] leading-[1.5] text-[#2f3244] sm:text-[16px]">
          <p>
            Le présent document constitue la politique de confidentialité (ci-après la « Politique ») du présent site
            internet (ci-après le « Site internet »).
          </p>
          <p>
            Il informe les internautes visitant le Site internet (ci-après les « Internautes ») sur les conditions dans
            lesquelles sont traitées les données à caractère personnel les concernant.
          </p>
          <p>
            Le Site internet est exploité par deux cabinets d’avocats exerçant à titre individuel, utilisant conjointement
            la marque « EXONEO ».
          </p>

          <div>
            <h2 className="text-[18px] font-semibold text-[#040325]">1. Responsable du traitement</h2>
            <p className="mt-2">
              Les responsables du traitement sont les deux cabinets d’avocats mentionnés dans les mentions légales du Site
              internet, agissant chacun pour leur propre compte.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-semibold text-[#040325]">2. Contact</h2>
            <p className="mt-2">
              Pour toute question relative à la protection des données ou pour exercer leurs droits, les Internautes peuvent
              contacter :
            </p>
            <p>
              <a href="mailto:contact@cabinet-exoneo.com" className="text-[#4141f5] hover:underline">
                contact@cabinet-exoneo.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-semibold text-[#040325]">3. Données collectées</h2>
            <p className="mt-2">
              Le Site internet collecte uniquement des données techniques de navigation enregistrées dans les logs du
              serveur, notamment :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>les dates et heures de chaque requête,</li>
              <li>l’adresse IP des terminaux utilisés.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[18px] font-semibold text-[#040325]">4. Finalités des traitements</h2>
            <p className="mt-2">Les données sont traitées afin de :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>assurer la sécurité et la maintenance du Site internet,</li>
              <li>répondre aux demandes des Internautes, notamment en matière d’exercice de leurs droits.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[18px] font-semibold text-[#040325]">5. Base légale</h2>
            <p className="mt-2">
              Les traitements reposent sur l’intérêt légitime des cabinets à assurer le bon fonctionnement et la sécurité du
              Site internet, ainsi qu’à traiter les demandes reçues.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-semibold text-[#040325]">6. Destinataires des données</h2>
            <p className="mt-2">Les données peuvent être accessibles :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>aux cabinets concernés,</li>
              <li>à leurs prestataires techniques agissant en qualité de sous-traitants.</li>
            </ul>
            <p className="mt-2">
              À ce titre, la société Google Ireland Limited (Google Workspace) peut être amenée à traiter certaines données.
            </p>
            <p className="mt-2">
              Des transferts de données en dehors de l’Union européenne peuvent intervenir, encadrés par des garanties
              appropriées conformément à la réglementation applicable.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-semibold text-[#040325]">7. Durée de conservation</h2>
            <p className="mt-2">Les données sont conservées pendant une durée maximale d’un an.</p>
          </div>

          <div>
            <h2 className="text-[18px] font-semibold text-[#040325]">8. Droits des Internautes</h2>
            <p className="mt-2">Conformément à la réglementation applicable, les Internautes disposent des droits suivants :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>droit d’accès,</li>
              <li>droit de rectification,</li>
              <li>droit d’effacement,</li>
              <li>droit à la limitation du traitement,</li>
              <li>droit d’opposition,</li>
              <li>droit à la portabilité des données.</li>
            </ul>
            <p className="mt-2">Ces droits peuvent être exercés à l’adresse suivante :</p>
            <p>
              <a href="mailto:contact@cabinet-exoneo.com" className="text-[#4141f5] hover:underline">
                contact@cabinet-exoneo.com
              </a>
            </p>
            <p className="mt-2">Les Internautes disposent également du droit d’introduire une réclamation auprès :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>de la CNIL (France),</li>
              <li>de la CNPD (Luxembourg).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[18px] font-semibold text-[#040325]">9. Entrée en vigueur</h2>
            <p className="mt-2">La présente Politique entre en vigueur le 01.06.2026.</p>
          </div>
        </div>
      </section>
    </LegalPageShell>
  );
}
