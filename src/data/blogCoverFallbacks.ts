import relancerDevis from "@/assets/blog/relancer-devis-sans-reponse-independant.webp";
import searchConsole from "@/assets/blog/google-search-console-rapports-essentiels-mensuel.webp";
import pageAPropos from "@/assets/blog/rediger-page-a-propos-inspire-confiance.webp";
import citerSources from "@/assets/blog/citer-sources-chiffres-etre-repris-par-ia.webp";
import recyclerContenu from "@/assets/blog/recycler-contenu-plusieurs-canaux-independant.webp";

const fallbacks: Record<string, { src: string; alt: string }> = {
  "relancer-devis-sans-reponse-independant": {
    src: relancerDevis,
    alt: "Artisane indépendante consultant son téléphone dans son atelier baigné de lumière dorée, entourée d'échantillons de tissus",
  },
  "google-search-console-rapports-essentiels-mensuel": {
    src: searchConsole,
    alt: "Ordinateur portable affichant des courbes de suivi sur un bureau bleu nuit, avec tasse de café et carnet, vu de dessus",
  },
  "rediger-page-a-propos-inspire-confiance": {
    src: pageAPropos,
    alt: "Boulanger souriant, bras croisés, sur le seuil de sa boulangerie aux façades vert sauge dans une rue calme",
  },
  "citer-sources-chiffres-etre-repris-par-ia": {
    src: citerSources,
    alt: "Photo en noir et blanc de mains annotant un rapport chiffré à côté d'un livre ouvert dans un bureau haussmannien",
  },
  "recycler-contenu-plusieurs-canaux-independant": {
    src: recyclerContenu,
    alt: "Indépendante vue de dos travaillant sur ordinateur, tablette et téléphone sur un toit parisien au crépuscule",
  },
};

export function getBlogCover(slug: string, coverImageUrl?: string | null): string | null {
  if (coverImageUrl && coverImageUrl.trim()) return coverImageUrl;
  return fallbacks[slug]?.src ?? null;
}

/** Texte alternatif : description dédiée pour les couvertures de secours, sinon le titre. */
export function getBlogCoverAlt(slug: string, title: string, coverImageUrl?: string | null): string {
  if (coverImageUrl && coverImageUrl.trim()) return title;
  return fallbacks[slug]?.alt ?? title;
}

/** URL absolue (pour og:image / JSON-LD). */
export function toAbsoluteUrl(url: string | null): string | null {
  if (!url) return null;
  return url.startsWith("http") ? url : `https://declicdigital.net${url.startsWith("/") ? "" : "/"}${url}`;
}
