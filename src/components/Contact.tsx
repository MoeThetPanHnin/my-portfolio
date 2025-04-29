import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="contact" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center reveal">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left column: your contact info */}
          <div className="reveal">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">moethet057@gmail.com</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+82 10 4883 6466</p>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Seoul, South Korea</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Formspree form */}
          <div className="reveal">
            <form
              action="https://formspree.io/f/xvgazrzb"
              method="POST"
              className="space-y-6"
            >
              {/* Optional: set email subject */}
              <input type="hidden" name="_subject" value="New message from portfolio" />

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  className="min-h-[120px]"
                  placeholder="Your message"
                  required
                />
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
