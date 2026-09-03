import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  contactLinks = [
    {
      icon: 'email',
      label: 'Email',
      value: 'gauravagrawal2833@gmail.com',
      href: 'mailto:gauravagrawal2833@gmail.com',
      color: '#f472b6',
      id: 'contact-email'
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/gaurav2803',
      href: 'https://linkedin.com/in/gaurav2803/',
      color: '#0077b5',
      id: 'contact-linkedin'
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: 'github.com/Gaurav-2803',
      href: 'https://github.com/Gaurav-2803',
      color: '#e2e8f0',
      id: 'contact-github'
    },
    {
      icon: 'article',
      label: 'GFG Articles',
      value: 'bit.ly/GFGarticles',
      href: 'https://bit.ly/GFGarticles',
      color: '#10b981',
      id: 'contact-gfg'
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+91 758-841-9581',
      href: 'tel:+917588419581',
      color: '#8b5cf6',
      id: 'contact-phone'
    }
  ];
}
