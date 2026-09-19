import { afterNextRender, Component, inject } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
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
