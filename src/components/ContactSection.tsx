import { useState } from "react";
import { Instagram, Phone, Mail, MessageCircle } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";
import { toast } from "sonner";

const WHATSAPP_URL =
  "https://wa.me/918281100764?text=Hi%2C%20I'm%20interested%20in%20your%20services.%20Could%20we%20discuss%20a%20project%3F";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Creating mailto link
    const subject = `Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    toast.success("Opening your email client...");

    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
            href="https://www.instagram.com/af.filmss_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            aria-label="Follow af.filmss_ on Instagram"
          >
            <Instagram className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-foreground font-body text-sm font-medium">Instagram (Work)</p>
              <p className="text-muted-foreground text-xs">@af.filmss_</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/ax4lll?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            aria-label="Follow ax4lll on Instagram"
          >
            <Instagram className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-foreground font-body text-sm font-medium">Instagram (Personal)</p>
              <p className="text-muted-foreground text-xs">@ax4lll</p>
            </div>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            aria-label="Send an email"
          >
            <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-foreground font-body text-sm font-medium">Email</p>
              <p className="text-muted-foreground text-xs truncate max-w-[150px] sm:max-w-none">
                {personalInfo.email}
              </p>
            </div>
          </a>
        </div>

        {/* Inquiry form */}
        <div className="max-w-lg mx-auto bg-card border border-border rounded-lg p-8">
          <h3 className="font-display text-2xl text-foreground mb-6 tracking-wide">SEND AN INQUIRY</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                aria-label="Your name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                aria-label="Your email"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                aria-label="Project details"
                required
              />
            </div>
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
