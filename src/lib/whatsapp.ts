import { WHATSAPP_NUMBER } from "@/lib/constants";

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppOrderLink(productName: string): string {
  return getWhatsAppLink(`Hi, I'd like to order: ${productName}`);
}
