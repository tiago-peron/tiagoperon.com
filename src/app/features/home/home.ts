import { afterNextRender, Component, inject } from '@angular/core';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { ActiveSectionService } from '../../core/services/active-section';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Projects, Contact],
  templateUrl: './home.html',
})
export class Home {
  private activeSectionService = inject(ActiveSectionService);

  constructor() {
    afterNextRender(() => {
      const sections = document.querySelectorAll('section[id]');
      this.activeSectionService.observe(sections);
    });
  }
}
