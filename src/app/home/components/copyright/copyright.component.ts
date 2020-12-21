import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template: `
    <p class="text-gray-medium font-thin text-sm">Pierre Raoul © 2020 - All rights reserved</p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-row lg:flex-col',
  }
})
export class CopyrightComponent { }
