import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SkillsSection from "./SkillsSection";

describe("SkillsSection", () => {
  it("renders certification links in the certifications category", () => {
    render(<SkillsSection />);

    expect(screen.getByText("Certifications")).toBeInTheDocument();
    expect(screen.getByText("AI Fluency: Framework & Foundations")).toBeInTheDocument();

    const link = screen.getByRole("link", { name: /AI Fluency: Framework & Foundations/i });
    expect(link).toHaveAttribute("href", "https://verify.skilljar.com/c/mjmrof7gpqyy");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
