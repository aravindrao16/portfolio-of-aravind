import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const projects = [
  {
    icon: "🏥",
    period: "2024-Present",
    title: "Benefit Experience Navigator (BEN)",
    company: "CIGNA Group",
    summary: "Enterprise platform for managing clinical and benefit configurations with automated backend workflows.",
    detail: "Built a comprehensive application for users to manage clinical and benefit configurations as a one-stop shop. Users can upload bid files, manage requests and plans. The application automates manual processes in the backend providing seamless user experience.",
    impact: "Reduced manual processing time significantly through automation",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "AEM", "AWS"],
  },
  {
    icon: "🔐",
    period: "2023-2024",
    title: "Customer Identity Access Management",
    company: "Florida Blue",
    summary: "Redesigned customer login with enhanced security — ID proofing, MFA, and role-based access flows.",
    detail: "Redesigned the customer login process for FloridaBlue.com and TruliForHealth.com with enhanced security features including ID proofing and multi-factor authentication. Built registration and forgot password flows with comprehensive security verification.",
    impact: "Served millions of users across multiple healthcare platforms",
    tech: ["React", "Next.js", "Node.js", "React Native", "Redux", "BloomReach"],
  },
  {
    icon: "🚗",
    period: "2021-2023",
    title: "Instant Cash Offer (ICO)",
    company: "Lithia Motors",
    summary: "Algorithm-driven vehicle valuation platform integrated with VIN decoding and real-time pricing APIs.",
    detail: "Built an algorithm to provide customers selling their vehicles through the Driveway online portal with instant cash offers. Users search by VIN, license plate, or vehicle details, and the system generates offers based on multiple business rules.",
    impact: "Automated vehicle valuation for Driveway.com customers",
    tech: ["Next.js", "React", "Node.js", "Loopback", "Redis", "Snowflake", "Azure"],
  },
  {
    icon: "📊",
    period: "2018-2021",
    title: "Executive Dashboard & Analytics",
    company: "Florida Blue",
    summary: "Interactive reporting platform with drill-down maps for enrollment, claims, and provider statistics.",
    detail: "Collections reports with stats for executives showing Enrollment, Submissions, Members & Providers, Claims Processing, and Customer Support. Features interactive charts and a Florida Map with drill-down to region and county levels.",
    impact: "Empowered executive decision-making with real-time data visualization",
    tech: ["React", "Next.js", "Node.js", "recharts", "nivo", "AWS Lambda", "PostgreSQL"],
  },
  {
    icon: "⚙️",
    period: "2018-2021",
    title: "IT Automation Tool",
    company: "Florida Blue",
    summary: "Automated report deployment pipeline eliminating manual IT interaction for Tableau and Power BI reports.",
    detail: "Application designed to minimize IT interaction for business users deploying reports. Automates the standard operating procedure for deploying Tableau, Power BI & SSRS reports to production, eliminating manual steps and reducing latency.",
    impact: "Eliminated manual deployment steps, reducing time-to-production",
    tech: ["React", "Node.js", "Express", "PowerShell", "Azure"],
  },
  {
    icon: "📧",
    period: "2016-2018",
    title: "Self Servicing Portal",
    company: "Biogen",
    summary: "Automated mailbox and distribution list creation using PowerShell runbooks, replacing manual admin processes.",
    detail: "Application enabling users to create their own mailboxes and distribution lists without admin intervention. Automated the entire process using PowerShell runbooks in Azure, reducing what was previously a multi-step manual process to a few clicks.",
    impact: "Eliminated admin dependency for IT resource provisioning",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Azure", "PowerShell"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="section-label block mb-4"
        >
          My Work
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-heading mb-4"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground mb-16 max-w-2xl"
        >
          A selection of impactful projects spanning healthcare, automotive, and enterprise automation.
        </motion.p>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="project-card group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{project.icon}</span>
                <span className="text-xs text-muted-foreground">{project.period}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-primary mb-3">{project.company}</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.summary}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="skill-tag text-[10px]">{t}</span>
                ))}
                {project.tech.length > 4 && (
                  <span className="skill-tag text-[10px]">+{project.tech.length - 4}</span>
                )}
              </div>
              <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Details →
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="card-surface max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-4xl mb-3 block">{selectedProject.icon}</span>
                  <h3 className="font-display font-bold text-2xl text-foreground">{selectedProject.title}</h3>
                  <p className="text-primary font-medium">{selectedProject.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">{selectedProject.period}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{selectedProject.detail}</p>

              <div className="card-surface p-4 mb-6 border-primary/20">
                <p className="text-sm text-primary font-medium">Impact</p>
                <p className="text-sm text-foreground">{selectedProject.impact}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
