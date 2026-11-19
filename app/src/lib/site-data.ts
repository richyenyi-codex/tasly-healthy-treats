export const SITE_NAME = "Tasly Healthy Treats";
export const INSTAGRAM_URL = "https://www.instagram.com/taslyhealthytreats/";

// Add only confirmed business details here. Empty values intentionally keep
// unverified contact information off the public website.
export const BUSINESS_CONFIG = {
  whatsappNumber: "",
  email: "",
  phone: "",
  address: "",
  openingHours: "",
};

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: string;
  ingredients?: string[];
};

// The current menu was not supplied. Add verified products, descriptions,
// ingredients and prices here before enabling WhatsApp product ordering.
export const MENU_ITEMS: MenuItem[] = [];

export const GALLERY_ITEMS = [
  {
    src: "/assets/images/tasly-cafe-interior.png",
    alt: "A calm café corner with leafy greenery, natural wood and soft window light",
    caption: "A welcoming café atmosphere",
  },
];

