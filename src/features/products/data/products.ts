import type { Product } from "@/features/products/types";
import type { Locale } from "@/i18n/config";

export const PRODUCTS: Product[] = [
  {
    slug: "chicken-panne",
    image: "/images/poultry/strips.jpeg",
    categorySlug: "poultry",
    translations: {
      en: {
        name: "Chicken Panne",
        description: "Breaded chicken strips, ready to fry or bake.",
        details:
          "Tender chicken breast strips coated in crispy breadcrumbs, fresh-frozen and ready to cook from frozen.",
        price: "140 EGP / kg",
      },
      ar: {
        name: "دجاج باني",
        description: "قطع دجاج مقرمشة بالبقسماط، جاهزة للقلي أو الفرن.",
        details:
          "شرائح صدور دجاج طرية مغطاة ببقسماط مقرمش، مجمدة طازجة وجاهزة للطبخ من المجمد مباشرة.",
        price: "140 جنيه / كيلو",
      },
    },
  },
  {
    slug: "whole-frozen-chicken",
    image: "/images/poultry/frozen-chickens.jpeg",
    categorySlug: "poultry",
    translations: {
      en: {
        name: "Whole Frozen Chicken",
        description: "Fresh-frozen, cleaned and ready to cook.",
        details:
          "A whole chicken, cleaned and fresh-frozen at peak quality. Delivered sealed and ready for the freezer.",
        price: "120 EGP / kg",
      },
      ar: {
        name: "فراخ مجمدة كاملة",
        description: "مجمدة طازجة، منضفة وجاهزة للطبخ.",
        details:
          "فراخ كاملة، منضفة ومجمدة طازجة بأعلى جودة. بتوصلك معبأة وجاهزة للفريزر.",
        price: "120 جنيه / كيلو",
      },
    },
  },
  {
    slug: "frozen-meat",
    image: "/images/red-meat/red-meat.webp",
    categorySlug: "red-meat",
    translations: {
      en: {
        name: "Frozen Meat",
        description: "Premium cuts, vacuum-sealed for freshness.",
        details:
          "Premium beef cuts, vacuum-sealed to lock in freshness. Great for grilling, stewing, or everyday cooking.",
        price: "280 EGP / kg",
      },
      ar: {
        name: "لحمة مجمدة",
        description: "قطع فاخرة، معبأة بالفاكيوم للحفاظ على الطزاجة.",
        details:
          "قطع لحمة بقري فاخرة، معبأة بالفاكيوم للحفاظ على الطزاجة. مناسبة للشوي والطبخ اليومي.",
        price: "280 جنيه / كيلو",
      },
    },
  },
  {
    slug: "burger-patties",
    image: "/images/red-meat/burger.jpeg",
    categorySlug: "red-meat",
    translations: {
      en: {
        name: "Burger Patties",
        description: "Fresh-ground beef patties, ready to grill.",
        details:
          "Hand-formed beef patties made from fresh-ground meat, fresh-frozen and ready for the grill or pan.",
        price: "220 EGP / kg",
      },
      ar: {
        name: "برجر لحمة",
        description: "أقراص برجر من لحمة مفرومة طازجة، جاهزة للشوي.",
        details:
          "أقراص برجر مشكلة يدويًا من لحمة مفرومة طازجة، مجمدة طازجة وجاهزة للشوي أو القلي.",
        price: "220 جنيه / كيلو",
      },
    },
  },
  {
    slug: "mixed-nuts",
    image: "/images/nuts/nuts.webp",
    categorySlug: "nuts",
    translations: {
      en: {
        name: "Mixed Nuts",
        description: "Roasted and ready to enjoy.",
        details:
          "A hand-picked mix of roasted nuts, packed fresh in sealed bags. A perfect snack or gift box.",
        price: "150 EGP / 500g",
      },
      ar: {
        name: "مكسرات مشكلة",
        description: "محمصة وجاهزة للتقديم.",
        details:
          "خلطة مكسرات مختارة بعناية ومحمصة، معبأة طازجة في أكياس محكمة الغلق. تحفة كهدية أو سناك.",
        price: "150 جنيه / نص كيلو",
      },
    },
  },
  {
    slug: "all-spices-mix",
    image: "/images/spices/mixed-spices.avif",
    categorySlug: "spices",
    translations: {
      en: {
        name: "All Spices Mix",
        description: "Emtenan — 100% natural, 65g jar.",
        details: "A ready-to-use all-purpose spice blend, 100% natural. Net weight 65g.",
        price: "45 EGP / 65g",
      },
      ar: {
        name: "خلطة البهارات",
        description: "إمتنان — 100% طبيعي، عبوة 65 جم.",
        details: "خلطة بهارات جاهزة للاستخدام، 100% طبيعية. الوزن الصافي 65 جم.",
        price: "45 جنيه / 65 جم",
      },
    },
  },
  {
    slug: "frozen-fries",
    image: "/images/frozen/frozen-potatoes-french-fries.avif",
    categorySlug: "frozen",
    translations: {
      en: {
        name: "Frozen French Fries",
        description: "Shoestring-cut potatoes, ready to fry or bake.",
        details:
          "Fresh-cut shoestring potatoes, fresh-frozen and ready to fry or bake straight from frozen.",
        price: "50 EGP / 400g",
      },
      ar: {
        name: "بطاطس مجمدة",
        description: "بطاطس مقطعة أصابع رفيعة، جاهزة للقلي أو الفرن.",
        details: "بطاطس مقطعة طازجة، مجمدة طازجة وجاهزة للقلي أو الفرن من المجمد مباشرة.",
        price: "50 جنيه / 400 جم",
      },
    },
  },
  {
    slug: "frozen-peas-carrots",
    image: "/images/frozen/Basma-Frozen-Peas-Carrots.png",
    categorySlug: "frozen",
    translations: {
      en: {
        name: "Frozen Peas & Carrots",
        description: "Basma — 400g bag.",
        details: "Fresh-frozen peas and diced carrots, ready to cook straight from frozen. Net weight 400g.",
        price: "55 EGP / 400g",
      },
      ar: {
        name: "بسلة بالجزر مجمدة",
        description: "بسمة — عبوة 400 جم.",
        details: "بسلة وجزر مقطع مجمدين طازجين، جاهزين للطبخ من الفريزر مباشرة. الوزن الصافي 400 جم.",
        price: "55 جنيه / 400 جم",
      },
    },
  },
  {
    slug: "frozen-molokhia",
    image: "/images/frozen/basma-mulokhya.jpg",
    categorySlug: "frozen",
    translations: {
      en: {
        name: "Frozen Minced Molokhia",
        description: "Basma — 400g bag.",
        details: "Finely minced green molokhia, fresh-frozen and ready to cook. Net weight 400g.",
        price: "60 EGP / 400g",
      },
      ar: {
        name: "ملوخية خضراء مفرومة مجمدة",
        description: "بسمة — عبوة 400 جم.",
        details: "ملوخية خضراء مفرومة ناعم، مجمدة طازجة وجاهزة للطبخ. الوزن الصافي 400 جم.",
        price: "60 جنيه / 400 جم",
      },
    },
  },
  {
    slug: "thousand-island-sauce",
    image: "/images/sauces/1000-island-sauce.jpeg",
    categorySlug: "sauces",
    translations: {
      en: {
        name: "1000 Island Dipping Sauce",
        description: "Good France — 200g squeeze bottle.",
        details:
          "A creamy, tangy dipping sauce in a convenient squeeze bottle. Net weight 200g.",
        price: "60 EGP / 200g",
      },
      ar: {
        name: "صوص ثاوزاند آيلاند",
        description: "Good France — عبوة 200 جم.",
        details: "صوص غمس كريمي بطعم مميز في عبوة سهلة الاستخدام. الوزن الصافي 200 جم.",
        price: "60 جنيه / 200 جم",
      },
    },
  },
  {
    slug: "mother-tomato-sauce",
    image: "/images/sauces/Mother_Tomato.webp",
    categorySlug: "sauces",
    translations: {
      en: {
        name: "Mother Tomato Pasta Sauce",
        description: "Sauce Shop — the perfect pasta sauce.",
        details: "A rich tomato pasta sauce, ready to heat and serve with your favorite pasta.",
        price: "75 EGP / jar",
      },
      ar: {
        name: "صوص الطماطم للمكرونة",
        description: "Sauce Shop — مثالي مع المكرونة.",
        details: "صوص طماطم غني، جاهز للتسخين وتقديمه مع المكرونة المفضلة لديك.",
        price: "75 جنيه / برطمان",
      },
    },
  },
  {
    slug: "big-burger-sauce",
    image: "/images/sauces/burger-sause.avif",
    categorySlug: "sauces",
    translations: {
      en: {
        name: "Big Burger Sauce",
        description: "Good France — 400g squeeze bottle.",
        details: "A bold burger sauce that amplifies every bite. Net weight 400g.",
        price: "70 EGP / 400g",
      },
      ar: {
        name: "صوص البرجر",
        description: "Good France — عبوة 400 جم.",
        details: "صوص برجر بطعم قوي ومميز يرفع من طعم أي ساندوتش. الوزن الصافي 400 جم.",
        price: "70 جنيه / 400 جم",
      },
    },
  },
  {
    slug: "sweet-chili-sauce",
    image: "/images/sauces/sweet-Chili-sauce.avif",
    categorySlug: "sauces",
    translations: {
      en: {
        name: "Heinz Sweet Chili Sauce",
        description: "Ideal with chicken and pork.",
        details: "Heinz's classic sweet chili sauce — a perfect dip for chicken, pork, and more.",
        price: "90 EGP / bottle",
      },
      ar: {
        name: "صوص هاينز الشيلي الحلو",
        description: "مثالي مع الدجاج واللحم.",
        details: "صوص هاينز الشيلي الحلو الكلاسيكي — غموس مثالي مع الدجاج واللحمة وغيرها.",
        price: "90 جنيه / زجاجة",
      },
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug?: string): Product[] {
  if (!categorySlug) {
    return PRODUCTS;
  }
  return PRODUCTS.filter((product) => product.categorySlug === categorySlug);
}

interface FilterProductsOptions {
  categorySlug?: string;
  query?: string;
  locale: Locale;
}

export function filterProducts({
  categorySlug,
  query,
  locale,
}: FilterProductsOptions): Product[] {
  const byCategory = getProductsByCategory(categorySlug);
  const trimmedQuery = query?.trim().toLowerCase();

  if (!trimmedQuery) {
    return byCategory;
  }

  return byCategory.filter((product) => {
    const text = product.translations[locale];
    return (
      text.name.toLowerCase().includes(trimmedQuery) ||
      text.description.toLowerCase().includes(trimmedQuery)
    );
  });
}
