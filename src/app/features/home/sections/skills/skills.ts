import { Component } from '@angular/core';
import { FadeUp } from '../../../../shared/directives/fade-up';
import { PRIMARY_SKILLS, SECONDARY_SKILLS } from '../../data/skills.data';

@Component({
  selector: 'app-skills-section',
  imports: [FadeUp],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  primarySkills = PRIMARY_SKILLS;
  secondarySkills = SECONDARY_SKILLS;
}
