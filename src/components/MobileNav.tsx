import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 bg-background/90 backdrop-blur-md border-b border-border">
        <span className="font-display font-bold text-lg text-foreground">
          <span className="text-primary">AR</span>
        </span>
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex items-center justify-center text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-background/95 backdrop-blur-md border-b border-border px-6 py-4"
          >
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
