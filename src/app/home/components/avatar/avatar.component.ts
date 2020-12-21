import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <div
      class="w-16 h-16 relative mb-4 pointer-events-none"
      role="img"
      aria-label="Avatar of the blog author"
    >
      <div
        class="group w-full h-full rounded-full border-4 border-transparent text-center flex items-center relative avatar"
      >
        <img
          src="assets/img/poptech.jpg"
          alt="avatar"
          class="object-cover object-center rounded-full w-full h-full visible group-hover:hidden"
          width="64"
          height="64"
        />
      </div>
    </div>
  `,
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent { }
