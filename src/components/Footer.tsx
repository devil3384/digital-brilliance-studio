import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ShoppingBag, Twitter } from "lucide-react";
import { BUSINESS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10">
              <ShoppingBag className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl">NovaCart</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Your one-stop shop for fashion, electronics, home & lifestyle products and accessories.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={`${label} (link coming soon)`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Shop</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/products" className="transition-colors hover:text-gold">All Products</Link></li>
            <li><Link to="/products" search={{ q: "", category: "Fashion" }} className="transition-colors hover:text-gold">Fashion</Link></li>
            <li><Link to="/products" search={{ q: "", category: "Electronics" }} className="transition-colors hover:text-gold">Electronics</Link></li>
            <li><Link to="/products" search={{ q: "", category: "Accessories" }} className="transition-colors hover:text-gold">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="transition-colors hover:text-gold">About Us</Link></li>
            <li><Link to="/track-order" className="transition-colors hover:text-gold">Track Order</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> {BUSINESS.phone} <span className="text-xs opacity-60">(demo)</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> {BUSINESS.email}</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {BUSINESS.address} <span className="text-xs opacity-60">(demo)</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} NovaCart. Demo storefront — checkout and tracking run in demo mode.
      </div>
    </footer>
  );
}
