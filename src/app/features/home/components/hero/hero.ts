import { Component } from '@angular/core';
import { FadeUp } from '../../../../shared/directives/fade-up';
import { EXTERNAL_LINKS } from '../../../../core/config/external-links';

@Component({
  selector: 'app-hero-section',
  imports: [FadeUp],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  links = EXTERNAL_LINKS;
}
