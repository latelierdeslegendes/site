import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface PrivacyPolicyProps {
  onNavigate: (page: string) => void;
}

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Politique de confidentialité</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">1. Introduction</h2>
            <p className="text-gray-700">
              L'Atelier Des Légendes accorde une grande importance à la protection de vos données personnelles et au respect de votre vie privée.
              La présente politique de confidentialité a pour objectif de vous informer de manière transparente sur la façon dont nous collectons,
              utilisons, stockons et protégeons vos données personnelles dans le cadre de l'utilisation de notre site web et de nos services.
            </p>
            <p className="text-gray-700 mt-4">
              Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD - UE 2016/679) et à la loi Informatique et
              Libertés modifiée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">2. Responsable du traitement</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Raison sociale :</strong> L'Atelier Des Légendes</p>
              <p><strong>Adresse :</strong> 19 MapIcon de Gambais, 78550 Bazainville, France</p>
              <p><strong>Email :</strong> contact@latelier-des-legendes.fr</p>
              <p><strong>Téléphone :</strong> 06 68 44 63 79</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">3. Données collectées</h2>

            <h3 className="text-xl font-semibold mb-3 text-black">3.1. Données collectées directement</h3>
            <p className="text-gray-700">
              Lorsque vous utilisez nos formulaires de contact ou nous contactez directement, nous pouvons collecter les informations suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Message ou demande spécifique</li>
              <li>Informations relatives à votre projet d'achat ou de vente de véhicule</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">3.2. Données collectées automatiquement</h3>
            <p className="text-gray-700">
              Lors de votre navigation sur notre site, certaines données techniques peuvent être collectées automatiquement :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Adresse IP</li>
              <li>Type de navigateur et version</li>
              <li>Système d'exploitation</li>
              <li>Pages visitées et durée de visite</li>
              <li>Date et heure de connexion</li>
              <li>Données de navigation (cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">4. Finalités du traitement</h2>
            <p className="text-gray-700 mb-4">Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>

            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-black">Traitement des demandes de contact</p>
                <p>Pour répondre à vos questions, demandes d'information et projets d'achat ou de vente de véhicules.</p>
              </div>

              <div>
                <p className="font-semibold text-black">Gestion de la relation client</p>
                <p>Pour assurer le suivi de nos échanges, la gestion des rendez-vous et l'accompagnement personnalisé.</p>
              </div>

              <div>
                <p className="font-semibold text-black">Amélioration de nos services</p>
                <p>Pour analyser l'utilisation de notre site et améliorer l'expérience utilisateur.</p>
              </div>

              <div>
                <p className="font-semibold text-black">Communication commerciale</p>
                <p>Avec votre consentement préalable, pour vous informer de nos nouveaux véhicules disponibles et services (newsletter).</p>
              </div>

              <div>
                <p className="font-semibold text-black">Obligations légales</p>
                <p>Pour respecter nos obligations légales et réglementaires en matière de comptabilité, fiscalité et lutte contre la fraude.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">5. Base légale du traitement</h2>
            <p className="text-gray-700 mb-4">Le traitement de vos données personnelles repose sur les bases légales suivantes :</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Consentement :</strong> Pour l'envoi de communications commerciales (newsletter)</li>
              <li><strong>Exécution du contrat :</strong> Pour le traitement de vos demandes et la gestion de la relation commerciale</li>
              <li><strong>Intérêt légitime :</strong> Pour l'amélioration de nos services et la sécurité de notre site</li>
              <li><strong>Obligation légale :</strong> Pour le respect de nos obligations comptables et fiscales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">6. Destinataires des données</h2>
            <p className="text-gray-700 mb-4">
              Vos données personnelles sont destinées exclusivement à L'Atelier Des Légendes et ne sont pas vendues, louées ou échangées à des tiers
              à des fins commerciales.
            </p>
            <p className="text-gray-700 mb-4">
              Toutefois, vos données peuvent être partagées avec les catégories de destinataires suivantes, dans la stricte limite nécessaire à
              l'accomplissement de leurs missions :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Prestataires techniques (hébergement web, maintenance informatique)</li>
              <li>Services de communication (gestion des emails)</li>
              <li>Autorités légales en cas d'obligation légale ou de requête judiciaire</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">7. Durée de conservation</h2>
            <p className="text-gray-700 mb-4">Vos données personnelles sont conservées pendant les durées suivantes :</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Demandes de contact :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Clients :</strong> Durée de la relation commerciale + 5 ans (obligations comptables et fiscales)</li>
              <li><strong>Prospects (newsletter) :</strong> 3 ans à compter du dernier contact ou jusqu'à désinscription</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            </ul>
            <p className="text-gray-700 mt-4">
              À l'issue de ces délais, vos données sont supprimées ou anonymisées de manière sécurisée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">8. Sécurité des données</h2>
            <p className="text-gray-700">
              L'Atelier Des Légendes met en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité et la
              confidentialité de vos données personnelles, notamment pour les protéger contre toute destruction, perte, altération, divulgation ou
              accès non autorisés.
            </p>
            <p className="text-gray-700 mt-4">
              Ces mesures incluent notamment :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Protocole HTTPS sécurisé pour la transmission des données</li>
              <li>Accès restreint aux données personnelles aux seules personnes habilitées</li>
              <li>Sauvegardes régulières et sécurisées</li>
              <li>Protection contre les accès non autorisés et les cyberattaques</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">9. Vos droits</h2>
            <p className="text-gray-700 mb-4">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
            </p>

            <div className="space-y-3 text-gray-700">
              <div>
                <p className="font-semibold text-black">Droit d'accès</p>
                <p>Vous pouvez obtenir la confirmation que vos données sont traitées et accéder à ces données.</p>
              </div>

              <div>
                <p className="font-semibold text-black">Droit de rectification</p>
                <p>Vous pouvez demander la correction de données inexactes ou incomplètes.</p>
              </div>

              <div>
                <p className="font-semibold text-black">Droit à l'effacement</p>
                <p>Vous pouvez demander la suppression de vos données dans certaines conditions.</p>
              </div>

              <div>
                <p className="font-semibold text-black">Droit à la limitation du traitement</p>
                <p>Vous pouvez demander la limitation du traitement de vos données dans certains cas.</p>
              </div>

              <div>
                <p className="font-semibold text-black">Droit à la portabilité</p>
                <p>Vous pouvez recevoir vos données dans un format structuré et couramment utilisé.</p>
              </div>

              <div>
                <p className="font-semibold text-black">Droit d'opposition</p>
                <p>Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière.</p>
              </div>

              <div>
                <p className="font-semibold text-black">Droit de retirer votre consentement</p>
                <p>Pour les traitements fondés sur votre consentement (newsletter), vous pouvez le retirer à tout moment.</p>
              </div>

              <div>
                <p className="font-semibold text-black">Droit de définir des directives post-mortem</p>
                <p>Vous pouvez définir des directives relatives à la conservation, l'effacement et la communication de vos données après votre décès.</p>
              </div>
            </div>

            <p className="text-gray-700 mt-6">
              Pour exercer ces droits, vous pouvez nous contacter :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Par email : contact@latelier-des-legendes.fr</li>
              <li>Par téléphone : 06 68 44 63 79</li>
              <li>Par courrier : L'Atelier Des Légendes, 19 MapIcon de Gambais, 78550 Bazainville, France</li>
            </ul>

            <p className="text-gray-700 mt-4">
              Nous nous engageons à répondre à votre demande dans un délai maximum d'un mois. Une pièce d'identité pourra vous être demandée pour
              vérifier votre identité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">10. Droit de réclamation</h2>
            <p className="text-gray-700">
              Si vous estimez que le traitement de vos données personnelles constitue une violation de la réglementation en vigueur, vous disposez
              du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <div className="text-gray-700 mt-4 space-y-2">
              <p><strong>CNIL</strong></p>
              <p>3 Place de Fontenoy - TSA 80715</p>
              <p>75334 PARIS CEDEX 07</p>
              <p>Téléphone : 01 53 73 22 22</p>
              <p>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#ff1616] hover:underline">www.cnil.fr</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">11. Cookies</h2>

            <h3 className="text-xl font-semibold mb-3 text-black">11.1. Qu'est-ce qu'un cookie ?</h3>
            <p className="text-gray-700">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web.
              Il permet de collecter des informations relatives à votre navigation et de vous adresser des services adaptés.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">11.2. Types de cookies utilisés</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <p className="font-semibold text-black">Cookies strictement nécessaires</p>
                <p>Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.</p>
              </div>

              <div>
                <p className="font-semibold text-black">Cookies de performance</p>
                <p>Ces cookies nous permettent d'analyser l'utilisation du site pour en améliorer les performances (statistiques anonymes).</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">11.3. Gestion des cookies</h3>
            <p className="text-gray-700">
              Vous pouvez à tout moment choisir de désactiver les cookies via les paramètres de votre navigateur. Cependant, cette désactivation
              pourrait affecter votre expérience de navigation et limiter l'accès à certaines fonctionnalités du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">12. Transfert de données hors UE</h2>
            <p className="text-gray-700">
              Vos données personnelles sont hébergées et traitées au sein de l'Union Européenne. En cas de transfert hors UE, nous nous assurons
              que des garanties appropriées sont mises en place conformément au RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">13. Mineurs</h2>
            <p className="text-gray-700">
              Notre site n'est pas destiné aux personnes de moins de 18 ans. Nous ne collectons pas sciemment de données personnelles concernant
              des mineurs. Si vous êtes parent ou tuteur légal et que vous découvrez que votre enfant nous a fourni des données personnelles,
              veuillez nous contacter pour que nous puissions supprimer ces informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">14. Modifications de la politique de confidentialité</h2>
            <p className="text-gray-700">
              L'Atelier Des Légendes se réserve le droit de modifier la présente politique de confidentialité à tout moment. Toute modification
              sera publiée sur cette page avec indication de la date de dernière mise à jour. Nous vous encourageons à consulter régulièrement
              cette page pour prendre connaissance des éventuelles modifications.
            </p>
            <p className="text-gray-700 mt-4">
              En cas de modification substantielle, nous vous en informerons par email si nous disposons de votre adresse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">15. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous
              contacter :
            </p>
            <div className="text-gray-700 space-y-2">
              <p><strong>L'Atelier Des Légendes</strong></p>
              <p>19 MapIcon de Gambais</p>
              <p>78550 Bazainville, France</p>
              <p>Email : contact@latelier-des-legendes.fr</p>
              <p>Téléphone : 06 68 44 63 79</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
