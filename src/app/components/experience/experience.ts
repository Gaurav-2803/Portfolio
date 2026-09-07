import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  logo: string;
  accent: string;
  highlights: string[];
  tags: string[];
  awards?: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatChipsModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Software Engineer',
      company: 'Tata Consultancy Services',
      period: 'Jan 2025 – Present',
      location: 'Thane, Maharashtra',
      type: 'Full-Time',
      logo: '🔷',
      accent: '#00d4ff',
      awards: ['⭐ Star of the Month — August 2026', '🏅 On-the-Spot Award'],
      highlights: [
        'Re-architected LMS to Dockerized microservices, improving modularity and reducing deployment issues by ~50%.',
        'Delivered 12+ modules (APIs, middleware, DB jobs, reporting), enabling faster feature rollout with daily releases.',
        'Engineered Socket.IO services (~100 events/day) and proposed real-time report streaming, reducing latency by ~200%.',
        'Established shared middleware layer across 50+ modules, reducing development effort by ~25%.',
        'Optimized 50+ SQL queries and converted COBOL compression logic to SQL — reduced report execution time by 90%.',
        'Implemented 20+ Spring Boot + Apache Camel APIs to expose legacy COBOL services for modern integrations.',
        'Owned CI/CD pipeline with 5–10 deployments/week, improving release reliability and turnaround time.',
        'Resolved 10+ production issues/month and conducted code reviews.',
      ],
      tags: [
        'Spring Boot',
        'Apache Camel',
        'Socket.IO',
        'Docker',
        'SQL',
        'CI/CD',
        'COBOL',
        'Microservices',
      ],
    },
    {
      role: 'Content Writer',
      company: 'GeeksForGeeks',
      period: 'Oct 2023 – Sep 2024',
      location: 'Remote',
      type: 'Freelance',
      logo: '✍️',
      accent: '#10b981',
      highlights: [
        'Authored 20+ technical articles on Python, FastAPI, AWS, and Docker.',
        'Generated 300K+ total article views, reaching a global developer audience.',
        'Broke down complex engineering topics into accessible, beginner-friendly content.',
      ],
      tags: ['Python', 'FastAPI', 'AWS', 'Docker', 'Technical Writing'],
    },
    {
      role: 'Python Developer',
      company: 'Shatterdome',
      period: 'Feb 2023 – Jun 2024',
      location: 'Remote',
      type: 'Part-Time',
      logo: '🐍',
      accent: '#8b5cf6',
      highlights: [
        'Developed 40+ Python (OOP) algorithms for step-by-step mathematical solutions.',
        'Created Flask APIs integrated with Angular UI using regex + LaTeX parsing to process 1000+ expressions.',
        'Collaborated in Agile teams (Git, Docker), contributing to weekly releases.',
        'Gained exposure to MongoDB for data persistence.',
      ],
      tags: ['Python', 'Flask', 'Angular', 'LaTeX', 'MongoDB', 'Docker', 'OOP', 'Agile'],
    },
  ];
}
