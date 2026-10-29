export interface Dictionary {
  siteName: string;
  siteDescription: string;
  nav: {
    home: string;
    products: string;
    contact: string;
    menu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    browseButton: string;
    whatsappButton: string;
    whatsappGenericMessage: string;
    visualBadge: string;
    deliveryBadge: string;
  };
  trust: {
    title: string;
    subtitle: string;
    stats: Array<{ icon: "facebook" | "tiktok" | "clock"; value: string; label: string }>;
  };
  products: {
    pageTitle: string;
    pageDescription: string;
    orderButton: string;
    orderMessage: string;
    backToProducts: string;
    filterLabel: string;
    allCategories: string;
    emptyCategory: string;
    noResults: string;
  };
  search: {
    label: string;
    placeholder: string;
    clear: string;
    close: string;
  };
  cart: {
    viewCart: string;
    title: string;
    empty: string;
    browseProducts: string;
    addToCart: string;
    added: string;
    remove: string;
    clear: string;
    increase: string;
    decrease: string;
    checkoutWhatsApp: string;
    whatsappIntro: string;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      address: string;
      addressPlaceholder: string;
      notes: string;
      notesPlaceholder: string;
      requiredError: string;
    };
  };
  footer: {
    rights: string;
    address: string;
    mapsLink: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
  languageSwitcher: {
    label: string;
  };
}
