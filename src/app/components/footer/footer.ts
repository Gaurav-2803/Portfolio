import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import packageJson from '../../../../package.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
  version = packageJson.version;
  navItems = ['About', 'Experience', 'Projects', 'Certifications', 'Contact'];

  scrollTo(section: string, event?: MouseEvent) {
    event?.preventDefault();
    const target = document.getElementById(section.toLowerCase());

    if (target) {
      window.dispatchEvent(new Event('portfolio:cancel-wheel-scroll'));
      const heading = target.querySelector('.section__header') ?? target;
      const top = heading.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  }
}
