import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import emailjs from "emailjs-com";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_tc3pmt9",
        "template_o6w1sgi",
        formRef.current,
        "KUtg1Xj2anZWmswwD"
      )
      .then(() => {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "rouengnak.biu@gmail.com" },
    { icon: Phone, label: "Phone", value: "096 32 01 723" },
    {
      icon: MapPin,
      label: "Location",
      value: "Sankat Stoeng Meanchey,Khan Meanchey,Phnom Penh",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to
            life
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div
              className={`space-y-6 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card
              className={`p-6 transition-all duration-700 delay-300 hover:shadow-lg hover:shadow-primary/10 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="from_name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Input
                    name="form_email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full glow-effect hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
