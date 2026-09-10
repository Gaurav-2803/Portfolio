import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { CertificationsComponent } from './components/certifications/certifications';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <div class="bg-dots"></div>
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-certifications></app-certifications>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      position: relative;
      z-index: 1;
    }
  `]
})
export class App implements AfterViewInit, OnDestroy {
  private targetScrollY = 0;
  private animationFrame?: number;
  private isGliding = false;
  private readonly reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  private readonly onWheel = (event: WheelEvent) => {
    if (event.ctrlKey || event.metaKey || !event.deltaY || this.reducedMotion.matches) {
      return;
    }

    event.preventDefault();
    const delta = event.deltaMode === WheelEvent.DOM_DELTA_LINE
      ? event.deltaY * 16
      : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
        ? event.deltaY * window.innerHeight
        : event.deltaY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    this.targetScrollY = Math.max(0, Math.min(maxScroll, this.targetScrollY + delta));

    if (!this.isGliding) {
      this.isGliding = true;
      document.body.classList.add('is-wheel-scrolling');
      this.glide();
    }
  };

  private readonly onScroll = () => {
    if (!this.isGliding) {
      this.targetScrollY = window.scrollY;
    }
  };

  private readonly cancelGlide = () => {
    this.targetScrollY = window.scrollY;
    this.isGliding = false;
    document.body.classList.remove('is-wheel-scrolling');
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
  };

  ngAfterViewInit() {
    this.targetScrollY = window.scrollY;
    window.addEventListener('wheel', this.onWheel, { passive: false });
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('portfolio:cancel-wheel-scroll', this.cancelGlide);
  }

  ngOnDestroy() {
    window.removeEventListener('wheel', this.onWheel);
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('portfolio:cancel-wheel-scroll', this.cancelGlide);
    this.cancelGlide();
  }

  private glide = () => {
    const distance = this.targetScrollY - window.scrollY;
    if (Math.abs(distance) < 0.5) {
      window.scrollTo(0, this.targetScrollY);
      this.isGliding = false;
      document.body.classList.remove('is-wheel-scrolling');
      return;
    }

    window.scrollTo(0, window.scrollY + distance * 0.16);
    this.animationFrame = requestAnimationFrame(this.glide);
  };
}
