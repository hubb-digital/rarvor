import type { Language } from "./site-content";

export const WHATSAPP_NUMBER = "5521978247667";

export function whatsappLink(lang: Language, message?: string) {
  const text = message ?? (lang === "pt"
    ? "Olá, Romulo. Vim pelo site da RARVOR e gostaria de conversar sobre a minha empresa."
    : "Hello, Romulo. I found RARVOR through the website and would like to discuss my company.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
