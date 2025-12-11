export type SectionType = 'about' | 'experience' | 'projects' | 'skills' | 'education' | 'achievements' | null;

export interface ResumeData {
  personalInfo: {
    name: string;
    role: string;
    phone: string;
    email: string;
    location: string;
    education: {
      degree: string;
      school: string;
      location: string;
      duration: string;
      gpa: string;
    };
  };
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    description: string[];
  }[];
  projects: {
    title: string;
    tech: string;
    period: string;
    points: string[];
    link?: string; // Added for project links
  }[];
  achievements: string[];
}
