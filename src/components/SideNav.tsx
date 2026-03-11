import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SideNav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4"
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[11px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-body">
            {label}
          </span>
          <div className={`nav-dot ${active === id ? "nav-dot-active" : ""}`} />
        </a>
      ))}
    </motion.nav>
  );
};

export default SideNav;
