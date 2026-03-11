import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "aravindrao.gone16@gmail.com", href: "mailto:aravindrao.gone16@gmail.com" },
  { icon: Phone, label: "Phone", value: "+1 (321) 634-2718", href: "tel:13216342718" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/aravind-rao-gone-8883531b4" },
  { icon: Github, label: "GitHub", value: "aravindrao16", href: "https://github.com/aravindrao16" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="container mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="section-label block mb-4"
        >
          Get In Touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-heading mb-4"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground mb-12 max-w-lg mx-auto"
        >
          I'm always open to discussing new projects, technical challenges, or opportunities to be part of something impactful.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="card-surface p-5 flex items-center gap-4 hover:border-primary/50 transition-all duration-300 group text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                <link.icon size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{link.label}</div>
                <div className="text-sm text-foreground font-medium">{link.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin size={14} />
          <span>United States</span>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto max-w-5xl mt-24 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Aravind Rao. All rights reserved.</span>
          <span>Built with React & TypeScript</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
