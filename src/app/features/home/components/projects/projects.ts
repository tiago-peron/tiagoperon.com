import { Component } from '@angular/core';
import { FadeUp } from '../../../../shared/directives/fade-up';
import { ProjectCard } from './project-card/project-card';
import { PROJECTS } from '../../../../core/models/projects.data';

@Component({
  selector: 'app-project-section',
  imports: [FadeUp, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = PROJECTS;
}
