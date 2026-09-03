import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './certifications.html',
  styleUrls: ['./certifications.scss']
})
export class CertificationsComponent {
  certifications = [
    {
      name: 'AWS Certified Developer — Associate',
      issuer: 'Amazon Web Services',
      credentialId: '7cbcf11be09c4d0faa486b2d4c3a6ced',
      logo: '☁️',
      color: '#f59e0b',
      skills: ['EC2', 'S3', 'RDS', 'Lambda', 'DynamoDB', 'CloudFormation', 'IAM'],
      verifyUrl: 'https://aws.amazon.com/certification/',
    }
  ];

  education = [
    {
      degree: 'B.E. Computer Engineering',
      institution: "JSPM's Jayawantrao Sawant College of Engineering",
      period: '2020 – 2024',
      location: 'Pune, India',
      cgpa: '8.56 / 10.00',
      achievements: [
        '🥇 Secured 1st place in Clean Code Challenge',
        '🚀 Led GDSC as Competitive Programming Lead',
        '📝 Managed 200+ Hacktoberfest contributions',
        '🎓 Mentored 250+ juniors in C programming',
        '🏆 Organized DSA competitions with 200+ participants'
      ]
    }
  ];
}
