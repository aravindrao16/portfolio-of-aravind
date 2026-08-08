import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const stats = [
  { value: "12+", label: "Years in Tech" },
  { value: "6+", label: "Companies" },
  { value: "15+", label: "Projects Delivered" },
  { value: "MS", label: "Computer Science" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for new opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
            >
              Hey, I'm{" "}
              <span className="text-primary">Aravind</span>
              <br />
              <span className="text-primary">Rao</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-xl md:text-2xl text-primary font-display font-medium mb-6"
            >
              Full Stack Developer | Tech Lead
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              12+ years building high-performance web applications with React, Node.js, JavaScript, TypeScript, and cloud platforms — focused on clean architecture, great UX, and scalable systems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-lg transition-all duration-300 hover:scale-105 accent-glow"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-border text-foreground font-display font-semibold rounded-lg transition-all duration-300 hover:border-primary/50"
              >
                View Portfolio
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex gap-4"
            >
              {[
                { icon: Mail, href: "mailto:aravindrao.gone16@gmail.com", label: "Email" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/aravind-rao-gone-8883531b4", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/aravindrao16", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile image + floating stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            {/* Profile image */}
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-border relative">
              <img
                src={profileImg}
                alt="Aravind Rao"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 rounded-full ring-1 ring-primary/10" />
            </div>

            {/* Floating stat cards */}
            {stats.map((stat, i) => {
              const positions = [
                "top-0 -right-4 md:right-[-2rem]",
                "top-1/3 -right-8 md:right-[-3.5rem]",
                "bottom-1/4 -right-6 md:right-[-3rem]",
                "bottom-0 right-4 md:right-0",
              ];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className={`absolute ${positions[i]} card-surface px-4 py-3 min-w-[120px]`}
                >
                  <div className="text-xl font-bold font-display text-foreground">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/30 to-muted-foreground/60" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <ChevronDown size={14} className="text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
