import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const expertise = [
  "Full Stack Architecture & React Development",
  "Microservices & RESTful API Design",
  "Cloud Architecture (AWS, Azure, OpenShift)",
  "Team Leadership & Technical Mentorship",
  "Performance Optimization & Scalability",
  "CMS Integration (AEM, Contentful, BloomReach)",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label block mb-4"
        >
          About Me
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading mb-8"
        >
          Passionate engineer,{" "}
          <span className="text-primary">focused on impact</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-5 text-muted-foreground leading-relaxed mb-12"
        >
          <p>
            I'm a Full Stack Developer with <strong className="text-foreground">11+ years of industry experience</strong> specializing 
            in modern tech stacks including React, TypeScript, Node.js, and cloud platforms like AWS and Azure. 
            My work centers on creating scalable, high-performance web applications backed by robust backend services.
          </p>
          <p>
            At <strong className="text-foreground">CIGNA Group</strong>, I lead a team of developers as a Tech Lead, 
            driving full-stack development for enterprise healthcare applications. Previously at <strong className="text-foreground">Florida Blue</strong>, 
            I architected customer identity and access management solutions serving millions of users.
          </p>
          <p>
            I hold a <strong className="text-foreground">Master's in Computer Science</strong> from the University of Central Missouri 
            and bring deep expertise across the MERN stack, microservices architecture, and enterprise-level UI/UX standards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {expertise.map((item) => (
              <span key={item} className="skill-tag">{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Education</h3>
          <div className="space-y-3">
            <div className="card-surface p-4">
              <div className="font-display font-semibold text-foreground">MS in Computer Science</div>
              <div className="text-sm text-muted-foreground">University of Central Missouri · December 2016</div>
            </div>
            <div className="card-surface p-4">
              <div className="font-display font-semibold text-foreground">BS in Electronic Engineering Technology (Avionics)</div>
              <div className="text-sm text-muted-foreground">Vaughn College of Aeronautics and Technology · June 2013</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
