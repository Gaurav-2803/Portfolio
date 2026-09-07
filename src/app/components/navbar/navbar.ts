import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatRippleModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  mobileOpen = false;

  navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  ngOnInit() {}

  scrollTo(href: string, event?: MouseEvent) {
    event?.preventDefault();
    this.mobileOpen = false;
    const el = document.querySelector(href);

    if (el) {
      // A navigation click should take priority over an in-progress wheel glide.
      window.dispatchEvent(new Event('portfolio:cancel-wheel-scroll'));
      const navbarOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  }
}
