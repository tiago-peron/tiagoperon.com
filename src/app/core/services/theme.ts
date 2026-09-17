import { afterNextRender, computed, effect, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private systemIsLight = signal(true);
  pref = signal<'light' | 'dark' | 'auto'>('auto');

  resolved = computed(() =>
    this.pref() === 'auto' ? (this.systemIsLight() ? 'light' : 'dark') : this.pref(),
  );

  constructor() {
    afterNextRender(() => {
      const stored = localStorage.getItem('theme') as 'light' | 'dark' | 'auto' | null;
      if (stored) {
        this.pref.set(stored);
      }

      const mql = window.matchMedia('(prefers-color-scheme: light)');
      this.systemIsLight.set(mql.matches);
      mql.addEventListener('change', (e) => this.systemIsLight.set(e.matches));
    });

    effect(() => {
      if (typeof document === 'undefined') {
        return;
      }
      document.documentElement.setAttribute('data-bs-theme', this.resolved());
      localStorage.setItem('theme', this.pref());
    });
  }

  setTheme(choice: 'light' | 'dark' | 'auto') {
    this.pref.set(choice);
  }
}
