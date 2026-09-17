import { Component } from '@angular/core';
import { FadeUp } from '../../../../shared/directives/fade-up';
import { EXTERNAL_LINKS } from '../../../../core/config/external-links';

@Component({
  selector: 'app-contact-section',
  imports: [FadeUp],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  currentYear: number = new Date().getFullYear();
  links = EXTERNAL_LINKS;
}
