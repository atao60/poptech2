import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav class="flex flex-row lg:flex-col items-center lg:items-start mb-4">
      <a class="mb-0 lg:mb-2 transition-colors duration-200 ease-in-out hover:underline hover:text-primary cursor-pointer"
         [routerLink]="['/']"
         routerLinkActive="text-primary underline"
         [routerLinkActiveOptions]="{ exact: true }"
      >Blog</a>
      <a class="mb-0 ml-2 lg:mb-2 lg:ml-0 transition-colors duration-200 ease-in-out hover:underline hover:text-primary cursor-pointer"
         [routerLink]="['/about']"
         routerLinkActive="text-primary underline"
         [routerLinkActiveOptions]="{ exact: true }"
      >Welcome</a>
    </nav>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {}
