import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatIconModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  skillCategories = [
    {
      category: 'Backend',
      icon: '⚙️',
      color: '#00d4ff',
      skills: ['Node.js', 'Express', 'Spring Boot', 'Apache Camel', 'FastAPI', 'Python', 'Socket.IO']
    },
    {
      category: 'Frontend',
      icon: '🎨',
      color: '#8b5cf6',
      skills: ['Angular', 'TypeScript', 'Streamlit', 'PyGame', 'Flet']
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      color: '#10b981',
      skills: ['AWS EC2', 'S3', 'RDS', 'Fargate', 'Docker', 'Docker Compose', 'Jenkins', 'CI/CD']
    },
    {
      category: 'Database',
      icon: '🗄️',
      color: '#f59e0b',
      skills: ['MySQL', 'Oracle', 'MongoDB', 'DynamoDB', 'OpenSearch']
    },
    {
      category: 'AI/ML',
      icon: '🤖',
      color: '#f472b6',
      skills: ['LangChain', 'OpenAI APIs', 'Scikit-Learn', 'Logistic Regression']
    },
    {
      category: 'Tools & Integrations',
      icon: '🔧',
      color: '#6366f1',
      skills: ['Git', 'GitHub', 'GitLab', 'Jira', 'Postman', 'Linux', 'OAuth', 'Spotify API', 'YouTube API']
    },
  ];
}
