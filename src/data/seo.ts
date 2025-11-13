export interface PageSEOConfig {
  pageId: string;
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical?: string;
}

export const pageSEOData: Record<string, PageSEOConfig> = {
  home: {
    pageId: 'home',
    title: "L'Atelier Des Légendes - Achat & Vente de Véhicules d'Exception | Voitures de Luxe Premium France",
    description: "Spécialiste en achat et vente de véhicules d'exception en France. Découvrez notre sélection exclusive de voitures de luxe, sportives et premium expertisées. Sourcing personnalisé partout en Europe. ✓ 150+ véhicules vendus ✓ Garantie totale ✓ Service d'excellence",
    keywords: "voitures de luxe, véhicules d'exception, achat voiture sport, vente automobile haut de gamme, sourcing véhicule Europe, Porsche occasion, Ferrari vente, Mercedes AMG, Lamborghini, Aston Martin, McLaren, concessionnaire voiture prestige France, garage luxe, voiture collection",
    ogImage: "https://lh3.googleusercontent.com/pw/AP1GczPeY6t2xVtpTSr16-U9CBrQe3jXhxxaIWjwJkQqHtTmSfvvwmis5Eb_tTXb-Rx_SXYNKYub9orUHxwi9lrECACtUcPxzix9rXVjE8dsze-NaWKlZDpPxBcoVO_lfA6umH0iQ9UFDQMfuGHur0rWqcCS=w1563-h756-s-no-gm",
    canonical: "https://www.latelier-des-legendes.fr/"
  },
  about: {
    pageId: 'about',
    title: "À Propos - L'Atelier Des Légendes | Notre Histoire, Passion & Expertise Automobile",
    description: "Découvrez l'histoire de L'Atelier Des Légendes, spécialiste en véhicules d'exception depuis des années. Notre passion pour l'automobile de prestige, notre expertise reconnue et notre engagement pour l'excellence. Une équipe de passionnés à votre service pour réaliser vos rêves automobiles.",
    keywords: "à propos atelier des légendes, histoire entreprise, expertise automobile luxe, passion voiture collection, concessionnaire luxe France, équipe automobile prestige, spécialiste véhicule exception, professionnel voiture haut gamme",
    ogImage: "https://lh3.googleusercontent.com/pw/AP1GczNfuOhDlqiFxUx3TBLO4KDzLzyLRB-I47y__ZbyN-i8NPGL_2jkLnQpoX5gtVuOOIbeR72caXMtXzyIHZ0FngcQsaT0wedvqVll2RUnh9LoLR7nJ--hUCE22ZSQEDGet_k_phUUvDxltGoMAETpkRgs=w1920-h1080-s-no-gm",
    canonical: "https://www.latelier-des-legendes.fr/about"
  },
  'for-sale': {
    pageId: 'for-sale',
    title: "Véhicules à Vendre - Collection Exclusive Disponible | L'Atelier Des Légendes",
    description: "Découvrez notre collection actuelle de véhicules d'exception disponibles à la vente : Porsche 911 GT3, Ferrari 488, Mercedes-AMG GT, Lamborghini Huracan et plus encore. Tous nos véhicules sont expertisés, certifiés et garantis. Livraison possible partout en Europe. Financement disponible.",
    keywords: "véhicules à vendre, voitures occasion luxe, Porsche à vendre France, Ferrari occasion, Mercedes AMG vente, Lamborghini disponible, Aston Martin vente, McLaren occasion, voiture sport à vendre, supercar France, GT vente, cabriolet luxe, coupé sport occasion",
    ogImage: "https://lh3.googleusercontent.com/pw/AP1GczPeY6t2xVtpTSr16-U9CBrQe3jXhxxaIWjwJkQqHtTmSfvvwmis5Eb_tTXb-Rx_SXYNKYub9orUHxwi9lrECACtUcPxzix9rXVjE8dsze-NaWKlZDpPxBcoVO_lfA6umH0iQ9UFDQMfuGHur0rWqcCS=w1563-h756-s-no-gm",
    canonical: "https://www.latelier-des-legendes.fr/for-sale"
  },
  sold: {
    pageId: 'sold',
    title: "Véhicules Vendus - Portfolio & Références | L'Atelier Des Légendes",
    description: "Découvrez les véhicules d'exception récemment vendus par L'Atelier Des Légendes. Notre portfolio de plus de 150 ventes témoigne de notre expertise, notre sérieux et la qualité de nos services. Porsche, Ferrari, Lamborghini, Mercedes-AMG : nous trouvons l'acheteur idéal pour chaque véhicule.",
    keywords: "véhicules vendus, portfolio vente luxe, références concessionnaire, ventes réalisées, success stories automobile, témoignages vente, historique transactions, galerie véhicules vendus, réalisations atelier légendes",
    ogImage: "https://lh3.googleusercontent.com/pw/AP1GczNnrxYVS3XKlbRisVjMt7Z7vOAGvp9OdvnfOB600CrzGWDuW4vzqQq4qkGZ0p1sg0TycUKj946lvDqpCSKEHLUzMV6BxlS7MjKUt3B9dqjGBZxyApuuKlQFKIKDGZxLTXGUsJUNLmTo0M9wzmTheJtK=w1067-h689-s-no-gm",
    canonical: "https://www.latelier-des-legendes.fr/sold"
  },
  services: {
    pageId: 'services',
    title: "Nos Services Premium - Sourcing, Expertise & Accompagnement Complet | L'Atelier Des Légendes",
    description: "Services d'excellence pour l'achat et la vente de véhicules premium : sourcing sur-mesure partout en Europe, expertise professionnelle certifiée, accompagnement complet de A à Z, livraison clé en main, gestion administrative complète, financement personnalisé. Un service VIP pour votre projet automobile.",
    keywords: "sourcing véhicule Europe, expertise automobile certifiée, achat voiture luxe accompagné, service premium automobile, recherche voiture collection, estimation gratuite, rachat véhicule prestige, conciergerie automobile, import export voiture, financement luxe",
    ogImage: "https://lh3.googleusercontent.com/pw/AP1GczPeY6t2xVtpTSr16-U9CBrQe3jXhxxaIWjwJkQqHtTmSfvvwmis5Eb_tTXb-Rx_SXYNKYub9orUHxwi9lrECACtUcPxzix9rXVjE8dsze-NaWKlZDpPxBcoVO_lfA6umH0iQ9UFDQMfuGHur0rWqcCS=w1563-h756-s-no-gm",
    canonical: "https://www.latelier-des-legendes.fr/services"
  },
  'legal-notice': {
    pageId: 'legal-notice',
    title: "Mentions Légales | L'Atelier Des Légendes - Informations Légales et Réglementaires",
    description: "Mentions légales du site L'Atelier Des Légendes - Informations légales, éditoriales et réglementaires conformes à la législation française. Éditeur, hébergeur, responsable publication, droits d'auteur et conditions d'utilisation.",
    keywords: "mentions légales, informations légales, éditeur site, responsable publication, hébergeur site, droits auteur, CNIL, RGPD",
    canonical: "https://www.latelier-des-legendes.fr/legal-notice"
  },
  'privacy-policy': {
    pageId: 'privacy-policy',
    title: "Politique de Confidentialité & RGPD | L'Atelier Des Légendes - Protection des Données",
    description: "Politique de confidentialité et protection des données personnelles de L'Atelier Des Légendes. Découvrez comment nous collectons, utilisons et protégeons vos données conformément au RGPD. Transparence totale sur la gestion de vos informations personnelles.",
    keywords: "politique confidentialité, protection données personnelles, RGPD, données utilisateur, vie privée, cookies, sécurité données, consentement, DPO",
    canonical: "https://www.latelier-des-legendes.fr/privacy-policy"
  },
  'terms-of-sale': {
    pageId: 'terms-of-sale',
    title: "Conditions Générales de Vente (CGV) | L'Atelier Des Légendes - Modalités d'Achat",
    description: "Conditions générales de vente de L'Atelier Des Légendes - Toutes les modalités d'achat et de vente de véhicules : garanties, livraison, paiement, annulation, SAV. Transparence et sécurité pour vos transactions automobiles.",
    keywords: "conditions générales vente, CGV automobile, modalités achat voiture, garantie véhicule, livraison, paiement sécurisé, annulation commande, SAV",
    canonical: "https://www.latelier-des-legendes.fr/terms-of-sale"
  }
};

export const siteSettings = {
  siteName: "L'Atelier Des Légendes",
  siteUrl: "https://www.latelier-des-legendes.fr",
  defaultSeo: {
    title: "L'Atelier Des Légendes - Achat & Vente de Véhicules d'Exception",
    description: "Spécialiste en achat et vente de véhicules d'exception en France. Découvrez notre sélection exclusive de voitures de luxe et sportives expertisées.",
    keywords: "voitures de luxe, véhicules d'exception, achat voiture sport, vente automobile haut de gamme",
    ogImage: "https://lh3.googleusercontent.com/pw/AP1GczPeY6t2xVtpTSr16-U9CBrQe3jXhxxaIWjwJkQqHtTmSfvvwmis5Eb_tTXb-Rx_SXYNKYub9orUHxwi9lrECACtUcPxzix9rXVjE8dsze-NaWKlZDpPxBcoVO_lfA6umH0iQ9UFDQMfuGHur0rWqcCS=w1563-h756-s-no-gm"
  },
  socialLinks: {
    instagram: "https://www.instagram.com/latelier_des_legendes/",
    facebook: "",
    twitter: ""
  },
  company: {
    name: "L'Atelier Des Légendes",
    legalForm: "SARL",
    capital: "10 000 €",
    siret: "XXX XXX XXX XXXXX",
    tva: "FR XX XXX XXX XXX",
    address: "Adresse à compléter",
    city: "Ville",
    postalCode: "Code postal",
    country: "France",
    phone: "+33 X XX XX XX XX",
    email: "contact@atelier-des-legendes.fr"
  }
};

export function getPageSEO(pageId: string): PageSEOConfig {
  return pageSEOData[pageId] || pageSEOData.home;
}

export function getSiteSettings() {
  return siteSettings;
}

export const vehicleSEOTemplates = {
  titleTemplate: (vehicleName: string, year: number) =>
    `${vehicleName} ${year} à Vendre | L'Atelier Des Légendes - Voiture d'Exception`,

  descriptionTemplate: (vehicleName: string, year: number, mileage: string, power: string) =>
    `${vehicleName} ${year} disponible à la vente. ${mileage}, ${power}. Véhicule expertisé, certifié et garanti par L'Atelier Des Légendes. État exceptionnel. Livraison possible partout en Europe. Financement disponible. Découvrez toutes les photos et caractéristiques.`,

  keywordsTemplate: (brand: string, model: string, year: number) =>
    `${brand} ${model} à vendre, ${brand} ${model} ${year}, ${brand} ${model} occasion, ${brand} occasion France, voiture ${brand} luxe, ${brand} ${model} prix, acheter ${brand} ${model}, ${brand} certifiée, ${brand} garantie`
};
