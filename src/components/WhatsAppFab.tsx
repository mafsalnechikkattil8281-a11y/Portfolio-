import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/918281100764?text=Hi%2C%20I'm%20interested%20in%20your%20services.%20Could%20we%20discuss%20a%20project%3F";

const WhatsAppFab = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppFab;
