import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "CIGNA Group",
    role: "Software Engineering Sr Advisor (Tech Lead)",
    period: "October 2024 — Present",
    description: "Leading a team of 5 developers building enterprise healthcare applications. Built the Benefit Experience Navigator (BEN) — a platform for managing clinical and benefit configurations with automated backend workflows.",
    highlights: [
      "Led full-stack development with React, TypeScript, Node.js, and Express",
      "Integrated AEM as CMS for content management",
      "Implemented microservices architecture for scalability",
      "Coordinated cross-team collaboration with business and infrastructure teams",
    ],
    tech: ["React", "JavaScript", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS"],
  },
  {
    company: "Florida Blue (BCBSFL)",
    role: "Principal IT Developer (Tech Lead / Solution Architect)",
    period: "April 2023 — October 2024",
    description: "Architected customer identity and access management systems including login, registration, and forgot password flows with enhanced security features like ID proofing and MFA.",
    highlights: [
      "Led team of 15 developers coordinating with security and infrastructure teams",
      "Built role-based login flows for Members, Providers, Agents, and Admins",
      "Developed React Native mobile apps with accessibility compliance",
      "Integrated BloomReach CMS for content management",
    ],
    tech: ["React", "JavaScript", "Next.js", "Node.js", "React Native", "Redux", "MongoDB"],
  },
  {
    company: "Lithia Motors",
    role: "Lead Software Engineer (Full Stack)",
    period: "July 2021 — March 2023",
    description: "Built ICO (Instant Cash Offer) — an algorithm-driven vehicle valuation platform, and SCT (Service Center for Technician) — a service history dashboard with QR code generation.",
    highlights: [
      "Integrated 3rd party vendor APIs for VIN decoding",
      "Implemented Redis caching for API performance optimization",
      "Used Snowflake DB for metadata capture during ICO calculations",
      "Developed mobile app for service center using React Native",
    ],
    tech: ["Next.js", "React", "Node.js", "Loopback", "Redis", "Snowflake", "Azure"],
  },
  {
    company: "Florida Blue (BCBSFL)",
    role: "Sr. IT Developer",
    period: "July 2018 — June 2021",
    description: "Built Executive Dashboard for collections reporting with interactive charts and drill-down maps, ABNPT for provider termination analysis, and an Automation Tool to minimize IT interaction for report deployment.",
    highlights: [
      "Created sophisticated charts and maps using recharts and nivo",
      "Built AWS Lambda serverless APIs for batch job script file execution",
      "Developed automation tools reducing manual deployment processes",
      "Used MERN stack for full-stack application development",
    ],
    tech: ["React", "Next.js", "Node.js", "AWS Lambda", "MongoDB", "PostgreSQL"],
  },
  {
    company: "Biogen",
    role: "Sr. Software Engineer",
    period: "August 2016 — July 2018",
    description: "Built a Self Servicing Portal enabling users to create mailboxes and distribution lists automatically, replacing a manual admin-dependent process with PowerShell runbook automation.",
    highlights: [
      "Developed SPA with React, Redux, and Next.js",
      "Created PowerShell script runbooks in Azure for automation",
      "Implemented JWT authentication and authorization",
      "Used MongoDB for database persistence",
    ],
    tech: ["React", "JavaScript", "Node.js", "MSSQL", "Azure", "PowerShell"],
  },
  {
    company: "ICON Analytical Equipments",
    role: "Software Developer",
    period: "June 2013 — June 2015",
    description: "Developed an Executive Profile Application for performance measurement, allowing supervisors to assign roles, track career overviews, and rate team member performance.",
    highlights: [
      "Built responsive UI with HTML5, JavaScript, jQuery, and Bootstrap",
      "Designed and developed web forms using ASP.NET",
      "Wrote complex SQL queries and stored procedures",
      "Performed code reviews and unit testing",
    ],
    tech: ["JavaScript", "jQuery", "ASP.NET", "C#", "SQL Server", "Bootstrap"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="section-label block mb-4"
        >
          Work History
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-heading mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1/2" />

                <div className="card-surface p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground">{exp.company}</h3>
                      <p className="text-primary font-medium text-sm">{exp.role}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap font-body">{exp.period}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-[6px]">●</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="skill-tag text-[11px]">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
