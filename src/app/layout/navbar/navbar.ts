import { Component, HostListener, inject, signal } from '@angular/core';
import { ActiveSectionService } from '../../core/services/active-section';
import { ThemeService } from '../../core/services/theme';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected activeSectionService = inject(ActiveSectionService);
  protected themeService = inject(ThemeService);
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 60);
  }
}
