import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <p class="font-bold mb-4 text-xl">PopTech Blog</p>
    <p class="font-hairline mb-4">
      Yet another dev blog...
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent { }
