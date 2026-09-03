import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
  navItems = ['About', 'Experience', 'Projects', 'Certifications', 'Contact'];

  scrollTo(section: string) {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  }
}
