export interface NavItem {
  name: string;
  link: `#${string}`;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface ApproachStep {
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  introduction: string;
  about: string;
  email?: string;
}

// Update these details and add your own work when it is ready to share.
export const profile: Profile = {
  name: "Anurag Panuhar",
  introduction: "A personal space for projects, ideas, and things I’m building.",
  about:
    "Welcome to my portfolio. This space brings together my work and the ideas behind it. More about me and my projects is coming soon.",
};

export const navItems: NavItem[] = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

// Keep these empty until you can add real projects, feedback, and experience.
export const projects: Project[] = [];
export const testimonials: Testimonial[] = [];
export const workExperience: WorkExperience[] = [];

export const approachSteps: ApproachStep[] = [
  {
    title: "Define the goal",
    description: "Start with the problem, who it affects, and what a useful result looks like.",
  },
  {
    title: "Build iteratively",
    description: "Break the work into small steps and improve each part along the way.",
  },
  {
    title: "Review and refine",
    description: "Check the details, test the result, and make room for feedback.",
  },
];
