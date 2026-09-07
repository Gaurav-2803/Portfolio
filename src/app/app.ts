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
  private isAnimating = false;
  private readonly reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  private readonly onWheel = (event: WheelEvent) => {
    // Preserve browser zooming and horizontal gestures.
    if (event.ctrlKey || event.metaKey || !event.deltaY || this.reducedMotion.matches) {
      return;
    }

    event.preventDefault();

    const delta = this.getWheelDelta(event);
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    this.targetScrollY = Math.max(0, Math.min(maxScroll, this.targetScrollY + delta));

    if (!this.isAnimating) {
      this.isAnimating = true;
      this.animateScroll();
    }
  };

  private readonly onNativeScroll = () => {
    // Keep keyboard, touch, scrollbar dragging, and anchor navigation in sync.
    if (!this.isAnimating) {
      this.targetScrollY = window.scrollY;
    }
  };

  private readonly cancelSmoothScroll = () => {
    this.targetScrollY = window.scrollY;
    this.isAnimating = false;

    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = undefined;
    }
  };

  ngAfterViewInit() {
    this.targetScrollY = window.scrollY;
    window.addEventListener('wheel', this.onWheel, { passive: false });
    window.addEventListener('scroll', this.onNativeScroll, { passive: true });
    window.addEventListener('portfolio:cancel-wheel-scroll', this.cancelSmoothScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('wheel', this.onWheel);
    window.removeEventListener('scroll', this.onNativeScroll);
    window.removeEventListener('portfolio:cancel-wheel-scroll', this.cancelSmoothScroll);

    this.cancelSmoothScroll();
  }

  private animateScroll = () => {
    const currentScrollY = window.scrollY;
    const distance = this.targetScrollY - currentScrollY;

    if (Math.abs(distance) < 0.5) {
      window.scrollTo(0, this.targetScrollY);
      this.isAnimating = false;
      return;
    }

    window.scrollTo(0, currentScrollY + distance * 0.14);
    this.animationFrame = requestAnimationFrame(this.animateScroll);
  };

  private getWheelDelta(event: WheelEvent) {
    // Wheel deltas are reported in pixels, lines, or pages depending on device.
    if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
      return event.deltaY * 16;
    }

    if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
      return event.deltaY * window.innerHeight;
    }

    return event.deltaY;
  }
}
