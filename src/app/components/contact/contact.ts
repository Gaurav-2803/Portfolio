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
      svgPath: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79ZM6.88 8.56a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36Zm1.39 9.94v-8.37H5.5v8.37h2.77Z',
      label: 'LinkedIn',
      value: 'linkedin.com/in/gaurav2803',
      href: 'https://linkedin.com/in/gaurav2803/',
      color: '#0077b5',
      id: 'contact-linkedin'
    },
    {
      icon: 'github',
      svgPath: 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.84c.85 0 1.7.11 2.5.3 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.35 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.74 0 .27.18.58.69.48A10 10 0 0 0 12 2Z',
      label: 'GitHub',
      value: 'github.com/Gaurav-2803',
      href: 'https://github.com/Gaurav-2803',
      color: '#e2e8f0',
      id: 'contact-github'
    },
    {
      icon: 'gfg',
      label: 'GFG Articles',
      value: 'bit.ly/GFGarticles',
      href: 'https://bit.ly/GFGarticles',
      color: '#10b981',
      id: 'contact-gfg'
    }
  ];
}
