import { Component } from '@angular/core';
import { FadeUp } from '../../../../shared/directives/fade-up';
import { SKILLS } from '../../../../core/models/skills.data';

@Component({
  selector: 'app-skills-section',
  imports: [FadeUp],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = SKILLS;
}
