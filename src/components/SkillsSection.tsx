import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor, Smartphone, Globe, FileCode2, Code2, Layout, Palette, Columns2, Braces, Zap,
  Server, Cloud, Container, Coffee, Leaf, Hash, Plug, Waves, CloudCog, ShieldCheck, Ship, Box,
  Database, HardDrive, Snowflake, ServerCog, CircleDot, MemoryStick, Layers, BarChart3,
  GitBranch, Github, GitMerge, Rocket, Settings2, ClipboardList, Figma, PenTool, Send, Timer,
  Globe2, FileText, Search, Activity, BarChart, PieChart, TrendingUp,
  RefreshCcw, Target, FlaskConical, Building2, Microscope, Users, Kanban, Network, AppWindow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillItem {
  name: string;
  icon: LucideIcon;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "React", icon: Braces },
      { name: "React Native", icon: Smartphone },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: FileCode2 },
      { name: "JavaScript", icon: Code2 },
      { name: "HTML5", icon: Layout },
      { name: "CSS3", icon: Palette },
      { name: "Bootstrap", icon: Columns2 },
      { name: "jQuery", icon: Zap },
      { name: "Redux", icon: RefreshCcw },
      { name: "AJAX", icon: Plug },
      { name: "JSX", icon: Braces },
    ],
  },
  {
    title: "Backend & Cloud",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Leaf },
      { name: "Express.js", icon: Rocket },
      { name: "Loopback", icon: RefreshCcw },
      { name: "Java", icon: Coffee },
      { name: "Spring Boot", icon: Leaf },
      { name: "ASP.NET", icon: Hash },
      { name: "REST APIs", icon: Plug },
      { name: "SOAP", icon: Waves },
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: CloudCog },
      { name: "OpenShift", icon: ShieldCheck },
      { name: "Docker", icon: Container },
      { name: "Kubernetes", icon: Ship },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Layers },
      { name: "Snowflake", icon: Snowflake },
      { name: "SQL Server", icon: ServerCog },
      { name: "Oracle", icon: CircleDot },
      { name: "Redis", icon: MemoryStick },
      { name: "Hadoop", icon: HardDrive },
      { name: "Synapse", icon: BarChart3 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Settings2,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "GitLab", icon: GitMerge },
      { name: "Jenkins", icon: Rocket },
      { name: "Azure DevOps", icon: CloudCog },
      { name: "CI/CD", icon: RefreshCcw },
      { name: "Jira", icon: ClipboardList },
      { name: "Figma", icon: Figma },
      { name: "AdobeXD", icon: PenTool },
      { name: "Postman", icon: Send },
      { name: "JMeter", icon: Timer },
    ],
  },
  {
    title: "CMS & Integration",
    icon: Globe2,
    skills: [
      { name: "AEM", icon: FileText },
      { name: "Contentful", icon: FileText },
      { name: "BloomReach", icon: Search },
      { name: "Splunk", icon: Activity },
      { name: "Dynatrace", icon: BarChart },
      { name: "Power BI", icon: PieChart },
      { name: "Tableau", icon: TrendingUp },
    ],
  },
  {
    title: "Methodologies",
    icon: Target,
    skills: [
      { name: "Agile", icon: RefreshCcw },
      { name: "Scrum", icon: Users },
      { name: "Waterfall", icon: Layers },
      { name: "Kanban", icon: Kanban },
      { name: "SAFe", icon: Building2 },
      { name: "Microservices", icon: Network },
      { name: "MVC", icon: AppWindow },
      { name: "SPA", icon: Monitor },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="section-label block mb-4"
        >
          What I Know
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-heading mb-4"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground mb-16 max-w-2xl"
        >
          A broad toolkit across the full stack, from modern frontend frameworks to cloud infrastructure and enterprise integrations.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="card-surface p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <category.icon size={20} />
                </div>
                <h3 className="font-display font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-tag text-[11px] inline-flex items-center gap-1.5"
                  >
                    <skill.icon size={12} className="text-primary/70" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
