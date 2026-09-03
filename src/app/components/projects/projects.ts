import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

export interface Project {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  github?: string;
  demo?: string;
  accent: string;
  emoji: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'The Phoenix Project',
      subtitle: 'Self-Healing Deployment System',
      period: 'Dec 2023 – Mar 2024',
      description: 'A Python-based web app that automates deployment processes and enables server-level self-healing. Integrates GitHub OAuth, Jenkins, Docker, and FastAPI into a seamless DevOps workflow.',
      highlights: [
        'Automated deployment & server healing using Python + Bash',
        'GitHub OAuth login integration for secure access',
        'Improved automation efficiency by ~30–40%',
        'Leveraged Jenkins + Docker + FastAPI pipeline'
      ],
      tags: ['Python', 'Streamlit', 'FastAPI', 'Docker', 'Jenkins', 'GitHub OAuth', 'Bash'],
      accent: '#00d4ff',
      emoji: '🦅',
      featured: true
    },
    {
      title: 'CryptShield',
      subtitle: 'Secure CLI Password Manager',
      period: 'Nov 2023',
      description: 'A CLI-based password manager built with Python OOP, managing 100+ credentials on AWS DynamoDB. Enforces zero plain-text exposure using Argon2 hashing and Fernet symmetric encryption.',
      highlights: [
        'Manages 100+ credentials on AWS DynamoDB',
        'Argon2 hashing + Fernet encryption for secure storage',
        'Zero plain-text credential exposure',
        'Fully object-oriented Python design'
      ],
      tags: ['Python', 'OOP', 'AWS DynamoDB', 'Argon2', 'Fernet', 'Cryptography', 'CLI'],
      github: 'https://github.com/Gaurav-2803/CryptShield',
      accent: '#8b5cf6',
      emoji: '🔐',
      featured: true
    },
    {
      title: 'Spotify Scraper',
      subtitle: 'Music Data Pipeline',
      period: 'Jul 2023 – Oct 2023',
      description: 'An end-to-end Spotify data pipeline processing 300+ tracks using Spotify and YouTube APIs. Features a cross-platform UI built with Flet and workflow managed via Jira.',
      highlights: [
        'Processes 300+ tracks via Spotify + YouTube Data APIs',
        'Cross-platform UI built with Flet (Python)',
        'Managed delivery with Jira for task tracking',
        'Automated scraping and storage pipeline'
      ],
      tags: ['Python', 'Spotify API', 'YouTube API', 'Flet', 'Data Pipeline', 'Jira'],
      github: 'https://github.com/Gaurav-2803/Spotify-Scraper',
      accent: '#10b981',
      emoji: '🎵',
    },
    {
      title: 'Early Fire Alert System',
      subtitle: 'ML-Powered Fire Detection',
      period: 'Sep 2022 – Oct 2022',
      description: 'An ML model achieving 94% accuracy in detecting fires earlier than conventional systems. Trained a logistic regression model in Python and deployed on Heroku for real-time predictions.',
      highlights: [
        '94% accuracy in early fire detection',
        'Outperforms conventional fire detection systems',
        'Logistic Regression model trained in Python',
        'Deployed on Heroku for live predictions'
      ],
      tags: ['Python', 'Scikit-Learn', 'Machine Learning', 'Logistic Regression', 'Heroku'],
      github: 'https://github.com/Gaurav-2803/Ealry-Fire-Alert-System',
      accent: '#f59e0b',
      emoji: '🔥',
    },
  ];
}
