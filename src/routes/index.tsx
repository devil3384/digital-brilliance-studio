import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Headset,
  MapPin,
  PackageSearch,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import { BUSINESS, FAQS, PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaCart — Fashion, Electronics & Lifestyle Shopping" },
      {
        name: "description",
        content:
          "Shop fashion, electronics, mobile accessories, home & lifestyle products, watches and bags at NovaCart — Pune, India. Demo storefront.",
      },
      { property: "og:title", content: "NovaCart — Fashion, Electronics & Lifestyle Shopping" },
      {
        property: "og:description",
        content: "Your one-stop shop for fashion, electronics, home & lifestyle and accessories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-light">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const featured = PRODUCTS.filter((p) => p.badge).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-medium tracking-wide text-primary-foreground/80">
              <BadgeCheck className="h-3.5 w-3.5 text-gold" /> Demo storefront — Pune, India
            </span>
            <h1 className="mt-6 font-display text-4xl leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Everything you love, delivered with care.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-primary-foreground/70">
              NovaCart brings fashion, electronics, home & lifestyle essentials and premium
              accessories together in one seamless shopping experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy-deep transition-all hover:brightness-110 hover:shadow-xl"
              >
                Shop the Collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-primary-foreground/80">
              {[
                ["12+", "Curated products"],
                ["4", "Categories"],
                ["7-day", "Support via WhatsApp"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="font-display text-2xl text-gold">{num}</p>
                  <p className="text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-up-delay relative">
            <img
              src={heroImg}
              alt="Curated NovaCart products — fashion, smartwatch, headphones and leather bag"
              width={1600}
              height={1008}
              className="w-full rounded-3xl shadow-2xl ring-1 ring-primary-foreground/10"
            />
          </div>
        </div>
      </section>

      {/* Categories / Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" id="products">
        <SectionHeading
          eyebrow="Our Collection"
          title="Featured Products"
          sub="A hand-picked selection from our fashion, electronics, home and accessories ranges."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Browse all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="bg-secondary/60 py-20" id="about">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-light">About Us</p>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              A modern way to shop the things you love
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              NovaCart is an online shopping destination based in Pune, Maharashtra. We curate
              quality fashion & clothing, electronics & gadgets, mobile accessories, home &
              lifestyle products, and watches, bags & accessories — all in one place.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our store currently runs in demo mode while secure checkout and live order tracking
              are being configured. Until then, our team is happy to help you directly on WhatsApp.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, label: "Secure checkout (coming soon)" },
                { icon: Truck, label: "Delivery across India (planned)" },
                { icon: PackageSearch, label: "Order tracking (demo)" },
                { icon: Headset, label: "WhatsApp support" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm">
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-navy p-10 text-primary-foreground shadow-xl">
            <h3 className="font-display text-2xl">Why choose NovaCart?</h3>
            <ul className="mt-6 space-y-5">
              {[
                ["Carefully curated catalog", "Every product is selected for quality and value across our four categories."],
                ["Honest, transparent service", "Demo details are clearly marked — no fake claims, no hidden surprises."],
                ["Human support", "Real help over WhatsApp and email, seven days a week."],
                ["Built for India", "Pricing in INR, local support, and delivery coverage planned across the country."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-4">
                  <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm text-primary-foreground/70">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials — clearly demo placeholders, no fake named reviews */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our customers will say"
          sub="We're a new store — genuine reviews will appear here once real customers share their experience. The cards below show the format, not real reviews."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Fast delivery and beautiful packaging — exactly what I hoped for.",
            "The product quality exceeded my expectations for the price.",
            "Support on WhatsApp was quick and genuinely helpful.",
          ].map((quote, i) => (
            <figure key={i} className="card-hover rounded-2xl border border-dashed border-border bg-card p-7">
              <div className="flex gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 text-muted-foreground">“{quote}”</blockquote>
              <figcaption className="mt-5 text-sm font-medium text-foreground">
                Sample review format
                <span className="block text-xs font-normal text-muted-foreground">
                  Placeholder — real customer reviews coming soon
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60 py-20" id="faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-12 space-y-3">
            {FAQS.map((f, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-medium text-foreground"
                  aria-expanded={openFaq === i}
                >
                  {f.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 rounded-3xl bg-navy-deep p-10 text-primary-foreground lg:grid-cols-2 lg:p-14">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Have a question? Talk to us.</h2>
            <p className="mt-4 text-primary-foreground/70">
              Reach us on WhatsApp, by phone or through our contact form — we usually reply within
              a few hours.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4" /> {BUSINESS.address} (demo address)
            </div>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy-deep transition-all hover:brightness-110"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
