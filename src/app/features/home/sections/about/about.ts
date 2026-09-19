import { Component } from '@angular/core';
import { FadeUp } from '../../../../shared/directives/fade-up';
import { EXTERNAL_LINKS } from '../../../../core/config/external-links';

@Component({
  selector: 'app-about-section',
  imports: [FadeUp],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  links = EXTERNAL_LINKS;
}
