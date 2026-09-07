import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatIconModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class AboutComponent {
  skillCategories = [
    {
      category: 'Backend Engineering',
      icon: '⚙️',
      color: '#00d4ff',
      skills: [
        'Python',
        'Node.js',
        'Express.js',
        'Kafka',
        'Redis',
        'FastAPI',
        'Flask',
        'WebSockets',
        'Java',
        'Spring Boot',
        'Apache Camel',
        'SOAP',
        'COBOL',
      ],
    },
    {
      category: 'System Design',
      icon: '🏗️',
      color: '#06b6d4',
      skills: [
        'CDNs',
        'Caching',
        'Concurrency',
        'Microservices Architecture',
        'Event-Driven Architecture',
        'Bloom Filters',
        'Rate Limiting',
      ],
    },
    {
      category: 'Security & Integrations',
      icon: '🔐',
      color: '#ef4444',
      skills: [
        'JWT Authentication',
        'OAuth 2.0',
        'Session & Role Management',
        'AES',
        'RSA',
        'Base62 Encoding',
        'GitHub APIs',
        'Google APIs',
        'Spotify APIs',
      ],
    },

    {
      category: 'Cloud & Infrastructure',
      icon: '☁️',
      color: '#10b981',
      skills: ['AWS', 'Oracle Cloud', 'Docker', 'Nginx', 'Linux', 'CI/CD', 'Jenkins'],
    },

    {
      category: 'Databases & Data',
      icon: '🗄️',
      color: '#f59e0b',
      skills: [
        'Oracle',
        'PL/SQL',
        'MySQL',
        'MongoDB',
        'DynamoDB',
        'DBMS Schedulers',
        'Master-Slave Replication',
      ],
    },
    {
      category: 'Frontend Engineering',
      icon: '🎨',
      color: '#8b5cf6',
      skills: [
        'Angular',
        'RxJS',
        'Material Design',
        'Bootstrap',
        'HTML',
        'CSS',
        'JavaScript',
        'XML',
        'HTC',
      ],
    },

    {
      category: 'AI / ML',
      icon: '🤖',
      color: '#f472b6',
      skills: [
        'LangChain',
        'Agentic AI',
        'Hugging Face',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Matplotlib',
        'Seaborn',
      ],
    },

    {
      category: 'Tools & Engineering',
      icon: '🔧',
      color: '#6366f1',
      skills: [
        'Git',
        'GitHub',
        'GitLab',
        'OpenSearch',
        'Portainer',
        'Postman',
        'Jira',
        'Command Center Alerts',
      ],
    },

    // {
    //   category: 'Python Applications',
    //   icon: '🐍',
    //   color: '#22c55e',
    //   skills: ['Streamlit', 'Flet', 'PyGame'],
    // },
  ];
}
