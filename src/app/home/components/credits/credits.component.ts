import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-credits',
  template: `
    <p class="text-gray-medium font-thin text-sm ml-1 mt-0 lg:mt-2 lg:ml-0">
      Built with
      <a
        href="https://angular.io"
        rel="noreferrer"
        target="_blank"
        class="cursor-pointer text-primary hover:underline"
      >
        Angular
      </a>
      , 
      <a
        href="https://scully.io"
        rel="noreferrer"
        target="_blank"
        class="cursor-pointer text-primary hover:underline"
      >
        Scully
      </a>
      and 
      <a
        href="https://tailwindcss.com"
        rel="noreferrer"
        target="_blank"
        class="cursor-pointer text-primary hover:underline"
      >
        Tailwind
      </a>
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditsComponent { }
