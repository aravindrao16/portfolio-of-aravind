import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SideNav from "@/components/SideNav";
import MobileNav from "@/components/MobileNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MobileNav />
      <SideNav />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
