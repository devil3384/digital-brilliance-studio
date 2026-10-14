import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { BUSINESS } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — NovaCart" },
      {
        name: "description",
        content: "Get in touch with NovaCart via WhatsApp, phone, email or our contact form. Based in Pune, Maharashtra, India.",
      },
      { property: "og:title", content: "Contact Us — NovaCart" },
      { property: "og:description", content: "Reach NovaCart support via WhatsApp, phone, email or contact form." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be under 1000 characters"),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring";

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-light">Contact</p>
        <h1 className="mt-3 font-display text-4xl text-foreground">We'd love to hear from you</h1>
        <p className="mt-3 text-muted-foreground">
          Questions about a product, an order or anything else — reach us any way you like.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        {/* Contact info */}
        <div className="space-y-4 lg:col-span-2">
          {[
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: `${BUSINESS.phone} (demo)`,
              href: `https://wa.me/${BUSINESS.whatsapp}`,
            },
            { icon: Phone, label: "Phone", value: `${BUSINESS.phone} (demo)`, href: `tel:${BUSINESS.phoneHref}` },
            { icon: Mail, label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
            { icon: MapPin, label: "Address", value: `${BUSINESS.address} (demo)` },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-medium text-primary hover:underline">
                    {value}
                  </a>
                ) : (
                  <p className="font-medium text-foreground">{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Map placeholder */}
          <div className="flex h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted text-center">
            <MapPin className="h-8 w-8 text-muted-foreground" />
            <p className="mt-3 text-sm font-medium text-foreground">Google Maps location</p>
            <p className="mt-1 max-w-xs text-xs text-muted-foreground">
              An embedded map will appear here once the final business address is confirmed.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-border bg-card p-8 lg:col-span-3">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="h-14 w-14 text-primary" />
              <h2 className="mt-5 font-display text-2xl text-foreground">Message noted!</h2>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                Thank you, {form.name.split(" ")[0]}. This demo form doesn't store submissions yet —
                for a guaranteed reply, please also message us on{" "}
                <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
                  WhatsApp
                </a>
                . Secure form storage will be enabled with the backend.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="mt-6 rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  maxLength={100}
                  autoComplete="name"
                />
                {errors["name"] && <p className="mt-1 text-xs text-destructive">{errors["name"]}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  maxLength={255}
                  autoComplete="email"
                />
                {errors["email"] && <p className="mt-1 text-xs text-destructive">{errors["email"]}</p>}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass}
                  maxLength={1000}
                />
                {errors["message"] && <p className="mt-1 text-xs text-destructive">{errors["message"]}</p>}
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-navy-light"
              >
                Send Message
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Demo mode: submissions are validated but not stored until the backend is configured.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
