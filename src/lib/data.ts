import catFashion from "@/assets/cat-fashion.jpg";
import catElectronics from "@/assets/cat-electronics.jpg";
import catHome from "@/assets/cat-home.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";

export const BUSINESS = {
  name: "NovaCart",
  phone: "+91 90000 12345",
  phoneHref: "+919000012345",
  whatsapp: "919000012345",
  email: "support@novacart.example",
  address: "Pune, Maharashtra, India",
  // NOTE: All contact details above are demo placeholders provided by the owner.
};

export type Product = {
  id: string;
  name: string;
  category: "Fashion" | "Electronics" | "Home & Living" | "Accessories";
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  badge?: string;
};

export const CATEGORIES = ["All", "Fashion", "Electronics", "Home & Living", "Accessories"] as const;

export const PRODUCTS: Product[] = [
  { id: "p1", name: "Classic Denim Jacket", category: "Fashion", price: 2499, originalPrice: 3299, rating: 4.6, image: catFashion, badge: "Bestseller" },
  { id: "p2", name: "Essential Knit Sweater", category: "Fashion", price: 1499, rating: 4.4, image: catFashion },
  { id: "p3", name: "Everyday Cotton Tee Pack", category: "Fashion", price: 999, originalPrice: 1399, rating: 4.3, image: catFashion },
  { id: "p4", name: "Wireless Noise-Cancelling Headphones", category: "Electronics", price: 4999, originalPrice: 6999, rating: 4.8, image: catElectronics, badge: "Hot Deal" },
  { id: "p5", name: "Smart Fitness Watch", category: "Electronics", price: 3499, rating: 4.5, image: catElectronics },
  { id: "p6", name: "True Wireless Earbuds", category: "Electronics", price: 1999, originalPrice: 2999, rating: 4.4, image: catElectronics },
  { id: "p7", name: "Ceramic Vase & Candle Set", category: "Home & Living", price: 1299, rating: 4.7, image: catHome, badge: "New" },
  { id: "p8", name: "Handwoven Throw Blanket", category: "Home & Living", price: 1799, rating: 4.6, image: catHome },
  { id: "p9", name: "Classic Analog Watch", category: "Accessories", price: 5999, originalPrice: 7999, rating: 4.9, image: catAccessories, badge: "Premium" },
  { id: "p10", name: "Full-Grain Leather Wallet", category: "Accessories", price: 1199, rating: 4.5, image: catAccessories },
  { id: "p11", name: "Polarized Clubmaster Sunglasses", category: "Accessories", price: 1599, originalPrice: 2199, rating: 4.4, image: catAccessories },
  { id: "p12", name: "Fast-Charge Mobile Accessory Kit", category: "Electronics", price: 899, rating: 4.2, image: catElectronics },
];

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export const FAQS = [
  {
    q: "Is checkout on NovaCart live?",
    a: "Not yet. Checkout and order tracking currently run in demo mode while payment services are being configured. No real transactions are processed.",
  },
  {
    q: "How can I place an order right now?",
    a: "Reach us on WhatsApp or through the contact form and our team will help you with availability, pricing and delivery options.",
  },
  {
    q: "What categories do you carry?",
    a: "Fashion & clothing, electronics & gadgets, mobile accessories, home & lifestyle products, and watches, bags & accessories.",
  },
  {
    q: "Where are you located?",
    a: "We are based in Pune, Maharashtra, India (demo address). Delivery coverage details will be published once the store goes live.",
  },
  {
    q: "How do I track my order?",
    a: "Use the Track Order page with a demo order ID. Live tracking will be enabled once real order services are connected.",
  },
];
