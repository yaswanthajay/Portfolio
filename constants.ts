import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: "Bhavanasi Yaswanth Ajay",
    role: "Computer Science Student | Software Developer",
    phone: "+91 6304710210",
    email: "2200090068csit@gmail.com",
    location: "Andhra Pradesh, India",
    education: {
      degree: "Bachelor of Technology in Computer Science",
      school: "K L University",
      location: "Vijayawada, Andhra Pradesh",
      duration: "Aug 2022 – May 2026",
      gpa: "9.29/10.0"
    }
  },
  skills: [
    {
      category: "Languages",
      items: ["C/C++", "Python", "JavaScript", "Java"]
    },
    {
      category: "Backend & Databases",
      items: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB", "SQL", "Spring Boot"]
    },
    {
      category: "AI/ML",
      items: ["Machine Learning", "NLP", "Scikit-learn", "PyTorch", "Pandas", "Numpy", "Transformers"]
    },
    {
      category: "Tools & Platforms",
      items: ["AWS (EC2, S3)", "Docker", "Git", "Streamlit", "React"]
    }
  ],
  experience: [
    {
      role: "Software Development Intern",
      company: "Juniper Networks",
      period: "Mar 2025 – Sep 2025",
      description: [
        "Designed a dynamic, investor-centric IPO listing platform with a responsive and intuitive UI.",
        "Built and optimized a highly scalable RESTful API using Node.js and Express.js, integrating MongoDB.",
        "Enhanced platform performance by implementing caching strategies reducing API response time by 40%.",
        "Strengthened system security by incorporating JWT-based authentication and role-based access controls."
      ]
    }
  ],
  projects: [
    {
      title: "Online Art Gallery Website",
      tech: "Java, Spring Boot, React, MySQL, REST APIs",
      period: "Aug 2024 – Nov 2024",
      points: [
        "Transformed complex design requirements into a clear visual language through precise responsive React elements.",
        "Engineered an engaging UI empowering over 1,500 users to effortlessly browse art collections.",
        "Increased sales conversions by approximately 30% through smooth transaction flows.",
        "Improved page performance, reducing load times from 4s to under 2s."
      ],
      link: "#" 
    },
    {
      title: "Stock Market Predictor",
      tech: "Python, Pandas, Numpy, Scikit-Learn, PyTorch, Streamlit",
      period: "Jan 2025 – Feb 2025",
      points: [
        "Developed a predictor allowing users to view past 30-day performance and upcoming trends.",
        "Built interactive visualizations using Streamlit for market trend analysis.",
        "Implemented feature engineering (moving averages, volatility) to enhance accuracy.",
        "Optimized forecasting by evaluating Linear Regression, LSTM, and Random Forest models."
      ],
      link: "#"
    },
    {
      title: "Generative AI Model",
      tech: "Python, LLMs, Transformers, PyTorch, NLP",
      period: "Jun 2025 – Sep 2025",
      points: [
        "Developed NLP models using Transformers with a React-based web interface.",
        "Implemented context-aware response mechanisms for better answer relevance.",
        "Fine-tuned transformer models on custom datasets achieving higher accuracy.",
        "Implemented caching pipelines to reduce latency for large transformer models."
      ],
      link: "#"
    }
  ],
  achievements: [
    "Successfully generated 1.3 lakh of funding for the Holo-Connect Project.",
    "Created a Mid-range GEN AI and LLMs model."
  ]
};
