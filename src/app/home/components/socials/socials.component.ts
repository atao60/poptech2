import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Social } from '../social-icon/social-icon.component';

const socials = [
  { id: Social.Github, link: 'https://github.com/atao60' },
  { id: Social.Stackoverflow, link: 'https://stackoverflow.com/users/1921503/atao' },
  { id: Social.Email, link: 'mailto:atao60.dev@gmail.com' }
];

@Component({
  selector: 'app-socials',
  template: `
    <app-social-icon
      *ngFor="let social of socials"
      [socialId]="social.id"
      [link]="social.link"
    ></app-social-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full lg:w-1/2 grid grid-cols-6 lg:grid-cols-3 gap-2 mb-4',
  },
})
export class SocialsComponent {
  socials = socials;
}
