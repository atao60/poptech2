import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  post$: Observable<ScullyRoute>;

  constructor(
    private readonly scullyRoutesService: ScullyRoutesService
  ) {
    this.post$ = this.scullyRoutesService.getCurrent();
  }
}
