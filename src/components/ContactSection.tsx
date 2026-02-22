import { Instagram, Phone, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/918281100764?text=Hi%2C%20I'm%20interested%20in%20your%20services.%20Could%20we%20discuss%20a%20project%3F";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3">
          Get in Touch
        </p>
        <h2 className="font-display text-5xl lg:text-6xl text-foreground mb-6">
          LET'S <span className="text-gradient">COLLABORATE</span>
        </h2>
        <p className="text-muted-foreground font-body max-w-lg mx-auto mb-12">
          Have a project in mind? I'd love to hear about it. Reach out through any of the channels below.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-whatsapp/50 transition-colors group"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-8 h-8 text-whatsapp group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-foreground font-body text-sm font-medium">WhatsApp</p>
              <p className="text-muted-foreground text-xs">+91 82811 00764</p>
            </div>
          </a>

          <a
            href="tel:+918281100764"
            className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            aria-label="Call phone number"
          >
            <Phone className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-foreground font-body text-sm font-medium">Phone</p>
              <p className="text-muted-foreground text-xs">+91 82811 00764</p>
            </div>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            aria-label="Follow on Instagram"
          >
            <Instagram className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-foreground font-body text-sm font-medium">Instagram</p>
              <p className="text-muted-foreground text-xs">@studio</p>
            </div>
          </a>

          <a
            href="mailto:hello@studio.com"
            className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            aria-label="Send an email"
          >
            <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-foreground font-body text-sm font-medium">Email</p>
              <p className="text-muted-foreground text-xs">hello@studio.com</p>
            </div>
          </a>
        </div>

        {/* Inquiry form (non-functional demo) */}
        <div className="max-w-lg mx-auto bg-card border border-border rounded-lg p-8">
          <h3 className="font-display text-2xl text-foreground mb-6 tracking-wide">SEND AN INQUIRY</h3>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              aria-label="Your name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              aria-label="Your email"
            />
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              aria-label="Project details"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground rounded-full py-3 font-body text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
