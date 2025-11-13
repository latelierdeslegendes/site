import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface LegalNoticeProps {
  onNavigate: (page: string) => void;
}

export default function LegalNotice({ onNavigate }: LegalNoticeProps) {
  return (
    <div className="min-h-screen bg-white overflow-x-hiddern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-gray-600 hover:text-[#ff1616] transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span>Retour</span>
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Mentions légales</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">1. Informations légales</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Raison sociale :</strong> L'Atelier Des Légendes</p>
              <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
              <p><strong>Siège social :</strong> 19 MapIcon de Gambais, 78550 Bazainville, France</p>
              <p><strong>Téléphone :</strong> 06 68 44 63 79</p>
              <p><strong>Email :</strong> contact@latelier-des-legendes.fr</p>
              <p><strong>Directeur de la publication :</strong> Gérant de L'Atelier Des Légendes</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">2. Activité</h2>
            <p className="text-gray-700">
              L'Atelier Des Légendes est spécialisé dans l'achat, la revente et le courtage de véhicules de collection et véhicules premium d'occasion.
              Nous proposons également des services d'expertise, de recherche de véhicules rares et d'accompagnement personnalisé pour nos clients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">3. Hébergement du site</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Hébergeur :</strong> Services d'hébergement web professionnel</p>
              <p>Le site est hébergé sur une infrastructure sécurisée conforme aux standards de l'industrie.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">4. Propriété intellectuelle</h2>
            <p className="text-gray-700">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) est la propriété exclusive de L'Atelier Des Légendes
              ou fait l'objet d'une autorisation d'utilisation. Toute reproduction, représentation, modification, publication ou adaptation de tout
              ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de
              L'Atelier Des Légendes.
            </p>
            <p className="text-gray-700 mt-4">
              Les marques et logos des véhicules présentés appartiennent à leurs propriétaires respectifs et sont utilisés uniquement à des fins
              d'illustration et d'identification des véhicules proposés à la vente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">5. Responsabilité</h2>
            <p className="text-gray-700">
              L'Atelier Des Légendes s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois,
              L'Atelier Des Légendes ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p className="text-gray-700 mt-4">
              Les caractéristiques techniques, photographies et descriptions des véhicules sont fournies à titre indicatif et peuvent être sujettes
              à modification. Nous recommandons vivement une inspection personnelle du véhicule avant tout engagement d'achat.
            </p>
            <p className="text-gray-700 mt-4">
              L'Atelier Des Légendes ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès au site ou de
              l'utilisation de celui-ci, y compris l'inaccessibilité, les pertes de données, détériorations, destructions ou virus qui pourraient
              affecter l'équipement informatique de l'utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">6. Informations sur les véhicules</h2>
            <p className="text-gray-700">
              Tous les véhicules présentés sur ce site sont vendus en l'état. Les informations relatives au kilométrage, à l'historique d'entretien
              et à l'état général sont communiquées de bonne foi sur la base des documents fournis par les propriétaires précédents.
            </p>
            <p className="text-gray-700 mt-4">
              Conformément à la réglementation en vigueur, tous nos véhicules sont accompagnés des documents légaux obligatoires (carte grise,
              contrôle technique si applicable, certificat de non-gage).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">7. Protection des données personnelles</h2>
            <p className="text-gray-700">
              Les informations collectées via les formulaires de contact sont destinées exclusivement à L'Atelier Des Légendes pour le traitement
              de vos demandes. Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
              vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
            </p>
            <p className="text-gray-700 mt-4">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@latelier-des-legendes.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">8. Cookies</h2>
            <p className="text-gray-700">
              Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite.
              Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient être affectées.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">9. Liens hypertextes</h2>
            <p className="text-gray-700">
              Le site peut contenir des liens vers des sites externes. L'Atelier Des Légendes n'exerce aucun contrôle sur ces sites et décline
              toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">10. Droit applicable</h2>
            <p className="text-gray-700">
              Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le tribunal
              compétent sera celui du ressort du siège social de L'Atelier Des Légendes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">11. Médiation</h2>
            <p className="text-gray-700">
              Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, L'Atelier Des Légendes
              adhère au Service du Médiateur de la consommation dont dépend son activité. Le Médiateur peut être saisi pour tout litige de
              consommation dont le règlement n'aurait pas abouti. Pour connaître les modalités de saisine du Médiateur, veuillez nous contacter
              à l'adresse : contact@latelier-des-legendes.fr
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
