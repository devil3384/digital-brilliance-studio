import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/data";

export function WhatsAppButton() {
  const href = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi NovaCart! I have a question about a product.")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.18_155)] text-white shadow-xl transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
