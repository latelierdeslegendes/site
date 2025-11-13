import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface TermsOfSaleProps {
  onNavigate: (page: string) => void;
}

export default function TermsOfSale({ onNavigate }: TermsOfSaleProps) {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Conditions Générales de Vente</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">1. Préambule</h2>
            <p className="text-gray-700">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre L'Atelier Des Légendes, ci-après
              dénommé "le Vendeur", et toute personne physique ou morale, ci-après dénommée "l'Acheteur" ou "le Client", souhaitant acquérir
              un véhicule proposé à la vente.
            </p>
            <p className="text-gray-700 mt-4">
              Toute commande implique l'acceptation sans réserve des présentes CGV qui prévalent sur tout autre document de l'Acheteur, notamment
              ses conditions générales d'achat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">2. Identification du vendeur</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Raison sociale :</strong> L'Atelier Des Légendes</p>
              <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
              <p><strong>Siège social :</strong> 19 MapIcon de Gambais, 78550 Bazainville, France</p>
              <p><strong>Téléphone :</strong> 06 68 44 63 79</p>
              <p><strong>Email :</strong> contact@latelier-des-legendes.fr</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">3. Objet</h2>
            <p className="text-gray-700">
              Les présentes CGV ont pour objet de définir les droits et obligations des parties dans le cadre de la vente de véhicules d'occasion
              et de collection, ainsi que les prestations de services associées (recherche de véhicules, courtage, expertise).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">4. Véhicules proposés</h2>

            <h3 className="text-xl font-semibold mb-3 text-black">4.1. Description des véhicules</h3>
            <p className="text-gray-700">
              Les véhicules proposés à la vente sont des véhicules d'occasion et/ou de collection. Les descriptions, photographies et
              caractéristiques techniques présentées sur le site internet ou dans toute documentation sont aussi précises que possible mais ne
              peuvent être exhaustives.
            </p>
            <p className="text-gray-700 mt-4">
              Il appartient à l'Acheteur de vérifier personnellement l'état et les caractéristiques du véhicule avant toute décision d'achat.
              Une visite et un essai du véhicule sont vivement recommandés et peuvent être organisés sur rendez-vous.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">4.2. État des véhicules</h3>
            <p className="text-gray-700">
              Les véhicules sont vendus en l'état. Le Vendeur s'engage à communiquer de bonne foi toutes les informations en sa possession
              concernant l'historique, le kilométrage, l'entretien et l'état général du véhicule.
            </p>
            <p className="text-gray-700 mt-4">
              Tout défaut apparent ou caché constaté lors de la visite du véhicule doit être signalé par l'Acheteur avant la signature de tout
              bon de commande ou contrat de vente.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">4.3. Disponibilité</h3>
            <p className="text-gray-700">
              Les véhicules présentés sont disponibles dans la limite des stocks. Le Vendeur se réserve le droit de retirer un véhicule de la
              vente à tout moment avant la signature du contrat de vente définitif.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">5. Prix</h2>

            <h3 className="text-xl font-semibold mb-3 text-black">5.1. Prix affichés</h3>
            <p className="text-gray-700">
              Les prix des véhicules sont indiqués en euros, toutes taxes comprises (TTC). Ils incluent la TVA applicable selon le régime de la
              marge pour les véhicules d'occasion, conformément à la législation en vigueur.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">5.2. Frais supplémentaires</h3>
            <p className="text-gray-700">
              Le prix affiché n'inclut pas les frais suivants, qui seront à la charge de l'Acheteur :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Frais de carte grise et d'immatriculation</li>
              <li>Frais de livraison éventuels (selon la distance et le mode de transport choisi)</li>
              <li>Garantie optionnelle si souscrite</li>
              <li>Assurance</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">5.3. Modification des prix</h3>
            <p className="text-gray-700">
              Les prix peuvent être modifiés à tout moment. Toutefois, le prix applicable est celui en vigueur au moment de la signature du bon
              de commande ou du contrat de vente, sous réserve de disponibilité du véhicule.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">6. Commande et formation du contrat</h2>

            <h3 className="text-xl font-semibold mb-3 text-black">6.1. Processus de commande</h3>
            <p className="text-gray-700">
              La commande d'un véhicule s'effectue selon les étapes suivantes :
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mt-2">
              <li>Prise de contact avec le Vendeur (téléphone, email, visite)</li>
              <li>Visite et essai du véhicule (fortement recommandés)</li>
              <li>Signature d'un bon de commande avec versement d'un acompte</li>
              <li>Préparation du véhicule et des documents administratifs</li>
              <li>Signature du contrat de vente définitif et paiement du solde</li>
              <li>Remise du véhicule et des documents</li>
            </ol>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">6.2. Bon de commande</h3>
            <p className="text-gray-700">
              Le bon de commande signé par les deux parties et accompagné de l'acompte constitue un engagement ferme et définitif d'achat.
              Il précise notamment :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>L'identité complète de l'Acheteur et du Vendeur</li>
              <li>La description précise du véhicule (marque, modèle, VIN, kilométrage, année)</li>
              <li>Le prix de vente TTC</li>
              <li>Le montant de l'acompte versé</li>
              <li>La date de livraison prévisionnelle</li>
              <li>Les conditions particulières éventuelles</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">7. Modalités de paiement</h2>

            <h3 className="text-xl font-semibold mb-3 text-black">7.1. Acompte</h3>
            <p className="text-gray-700">
              Un acompte, généralement de 10% à 30% du prix de vente, est exigé lors de la signature du bon de commande. Le montant exact de
              l'acompte sera précisé sur le bon de commande.
            </p>
            <p className="text-gray-700 mt-4">
              L'acompte peut être versé par virement bancaire ou chèque de banque. Il ne sera pas restitué en cas d'annulation par l'Acheteur,
              sauf accord exceptionnel du Vendeur.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">7.2. Solde</h3>
            <p className="text-gray-700">
              Le solde du prix de vente doit être réglé intégralement avant la remise du véhicule. Les moyens de paiement acceptés sont :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Virement bancaire (privilégié pour les montants importants)</li>
              <li>Chèque de banque</li>
              <li>Espèces dans la limite légale autorisée (1 000 euros pour les résidents français)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Le véhicule reste la propriété du Vendeur jusqu'au paiement intégral du prix et encaissement effectif des fonds.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">7.3. Financement</h3>
            <p className="text-gray-700">
              Le Vendeur peut orienter l'Acheteur vers des organismes de crédit partenaires. L'obtention d'un financement reste à la charge et
              sous la responsabilité de l'Acheteur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">8. Livraison et remise du véhicule</h2>

            <h3 className="text-xl font-semibold mb-3 text-black">8.1. Lieu de livraison</h3>
            <p className="text-gray-700">
              Par défaut, le véhicule est à retirer au siège social du Vendeur : 19 MapIcon de Gambais, 78550 Bazainville, France.
            </p>
            <p className="text-gray-700 mt-4">
              Une livraison peut être organisée à la demande de l'Acheteur, moyennant des frais supplémentaires à définir selon la distance et
              le mode de transport.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">8.2. Délai de livraison</h3>
            <p className="text-gray-700">
              Le délai de livraison indicatif est précisé sur le bon de commande. Ce délai court à compter de la signature du bon de commande
              et du versement de l'acompte.
            </p>
            <p className="text-gray-700 mt-4">
              Le Vendeur s'efforce de respecter les délais annoncés. Toutefois, tout retard de livraison ne pourra donner lieu à des dommages
              et intérêts ou à l'annulation de la vente, sauf en cas de retard excédant 30 jours sans justification.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">8.3. Documents remis</h3>
            <p className="text-gray-700">
              Lors de la remise du véhicule, le Vendeur fournit obligatoirement les documents suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Certificat de cession (Cerfa n°15776)</li>
              <li>Carte grise (certificat d'immatriculation) barrée avec mention "vendu le [date]"</li>
              <li>Certificat de non-gage (certificat de situation administrative)</li>
              <li>Procès-verbal de contrôle technique de moins de 6 mois (si véhicule de plus de 4 ans)</li>
              <li>Carnet d'entretien et factures disponibles</li>
              <li>Jeux de clés (nombre précisé sur le bon de commande)</li>
              <li>Manuel d'utilisation si disponible</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">8.4. Vérification à la livraison</h3>
            <p className="text-gray-700">
              L'Acheteur est invité à vérifier l'état du véhicule lors de la remise. Toute réserve doit être formulée par écrit immédiatement
              sur le bon de livraison ou le contrat de vente. À défaut, le véhicule sera réputé conforme et accepté sans réserve.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">9. Garanties</h2>

            <h3 className="text-xl font-semibold mb-3 text-black">9.1. Garantie légale de conformité</h3>
            <p className="text-gray-700">
              Conformément aux articles L. 217-4 et suivants du Code de la consommation, le Vendeur est tenu de la garantie légale de conformité
              pour les ventes conclues avec des consommateurs (particuliers). Cette garantie s'applique aux défauts de conformité existant au
              moment de la délivrance du bien et apparaissant dans un délai de deux ans.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">9.2. Garantie des vices cachés</h3>
            <p className="text-gray-700">
              Conformément aux articles 1641 et suivants du Code civil, le Vendeur est tenu de la garantie à raison des défauts cachés de la
              chose vendue qui la rendent impropre à l'usage auquel on la destine, ou qui diminuent tellement cet usage que l'Acheteur ne
              l'aurait pas acquise, ou n'en aurait donné qu'un moindre prix, s'il les avait connus.
            </p>
            <p className="text-gray-700 mt-4">
              L'action résultant des vices rédhibitoires doit être intentée par l'acquéreur dans un délai de deux ans à compter de la découverte
              du vice.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">9.3. Garantie commerciale optionnelle</h3>
            <p className="text-gray-700">
              Le Vendeur peut proposer, moyennant un coût supplémentaire, une garantie commerciale optionnelle couvrant certains éléments
              mécaniques et électriques du véhicule. Les conditions de cette garantie (durée, étendue, exclusions, franchises) seront précisées
              dans un contrat de garantie spécifique.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">9.4. Exclusions</h3>
            <p className="text-gray-700">
              Sont exclus de toute garantie :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>L'usure normale du véhicule et de ses composants</li>
              <li>Les dommages résultant d'un mauvais entretien, d'une utilisation anormale ou non conforme</li>
              <li>Les dommages résultant d'un accident, d'une négligence ou d'un acte de vandalisme</li>
              <li>Les pièces d'usure (plaquettes de frein, pneus, ampoules, balais d'essuie-glaces, etc.)</li>
              <li>Les modifications ou réparations effectuées sans l'accord du Vendeur</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">10. Droit de rétractation</h2>
            <p className="text-gray-700">
              Conformément à l'article L. 221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de
              vente de biens confectionnés selon les spécifications du consommateur ou nettement personnalisés.
            </p>
            <p className="text-gray-700 mt-4">
              En pratique, pour l'achat d'un véhicule d'occasion spécifique et individualisé, le droit de rétractation ne s'applique généralement
              pas. Toutefois, l'Acheteur peut, avant la signature du contrat de vente définitif, renoncer à son bon de commande en perdant
              l'acompte versé, sauf accord amiable avec le Vendeur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">11. Reprise de véhicule</h2>
            <p className="text-gray-700">
              Le Vendeur peut proposer un service de reprise du véhicule actuel de l'Acheteur. Le prix de reprise est déterminé après expertise
              et reste valable 15 jours. La reprise est conditionnée à l'achat d'un véhicule auprès du Vendeur.
            </p>
            <p className="text-gray-700 mt-4">
              Le véhicule repris doit être en état de marche, en règle administrativement (absence d'opposition, de gage, etc.) et correspondre
              à la description faite par l'Acheteur lors de l'expertise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">12. Obligations de l'Acheteur</h2>
            <p className="text-gray-700">L'Acheteur s'engage à :</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Vérifier l'état et la conformité du véhicule avant la signature du contrat de vente définitif</li>
              <li>Procéder à l'immatriculation du véhicule à son nom dans un délai d'un mois</li>
              <li>Assurer le véhicule avant de le mettre en circulation</li>
              <li>Effectuer l'entretien régulier du véhicule conformément aux préconisations du constructeur</li>
              <li>Ne pas utiliser le véhicule dans des conditions anormales (compétition, surcharge, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">13. Responsabilité et force majeure</h2>

            <h3 className="text-xl font-semibold mb-3 text-black">13.1. Limitation de responsabilité</h3>
            <p className="text-gray-700">
              La responsabilité du Vendeur ne saurait être engagée pour :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Les dommages indirects (perte d'exploitation, manque à gagner, préjudice commercial, etc.)</li>
              <li>Les informations erronées fournies par l'Acheteur</li>
              <li>Un usage anormal ou non conforme du véhicule par l'Acheteur</li>
              <li>Les cas de force majeure</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">13.2. Force majeure</h3>
            <p className="text-gray-700">
              La responsabilité du Vendeur ne pourra pas être mise en œuvre si l'inexécution ou le retard dans l'exécution de l'une de ses
              obligations découle d'un cas de force majeure au sens de l'article 1218 du Code civil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">14. Protection des données personnelles</h2>
            <p className="text-gray-700">
              Les données personnelles collectées dans le cadre de la vente sont nécessaires à la gestion de la commande, à la relation
              commerciale et au respect des obligations légales. Elles sont traitées conformément à notre Politique de confidentialité.
            </p>
            <p className="text-gray-700 mt-4">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition sur vos données.
              Pour exercer ces droits : contact@latelier-des-legendes.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">15. Médiation et règlement des litiges</h2>

            <h3 className="text-xl font-semibold mb-3 text-black">15.1. Règlement amiable</h3>
            <p className="text-gray-700">
              En cas de litige ou de réclamation, l'Acheteur s'engage à contacter en priorité le Vendeur afin de trouver une solution amiable.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">15.2. Médiation de la consommation</h3>
            <p className="text-gray-700">
              Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, L'Atelier Des Légendes
              adhère au Service du Médiateur de la consommation. Le Médiateur peut être saisi pour tout litige de consommation dont le règlement
              n'aurait pas abouti.
            </p>
            <p className="text-gray-700 mt-4">
              Pour connaître les modalités de saisine du Médiateur : contact@latelier-des-legendes.fr
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-black">15.3. Juridiction compétente</h3>
            <p className="text-gray-700">
              À défaut de règlement amiable, tout litige relatif à l'interprétation ou à l'exécution des présentes CGV relève des tribunaux
              français. La loi française est seule applicable.
            </p>
            <p className="text-gray-700 mt-4">
              Pour les consommateurs (particuliers), en cas de litige, le tribunal compétent sera celui du domicile du défendeur ou du lieu de
              livraison effective, au choix du demandeur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">16. Modification des CGV</h2>
            <p className="text-gray-700">
              Le Vendeur se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date
              de signature du bon de commande ou du contrat de vente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">17. Acceptation des CGV</h2>
            <p className="text-gray-700">
              La signature du bon de commande et/ou du contrat de vente emporte acceptation pleine et entière des présentes Conditions Générales
              de Vente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">18. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question relative aux présentes CGV ou à votre commande :
            </p>
            <div className="text-gray-700 space-y-2">
              <p><strong>L'Atelier Des Légendes</strong></p>
              <p>19 MapIcon de Gambais</p>
              <p>78550 Bazainville, France</p>
              <p>Email : contact@latelier-des-legendes.fr</p>
              <p>Téléphone : 06 68 44 63 79</p>
              <p>Horaires : Lundi-Samedi : 9h-18h30 | Dimanche : Fermé</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
