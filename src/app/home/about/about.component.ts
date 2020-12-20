import { ChangeDetectionStrategy, Component } from '@angular/core';

const startingYear = 2013;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent { 
  copyrightYears: string;

  constructor() {
    const currentYear = new Date().getFullYear();
    const copyrightYearsParts = [startingYear.toString()];
    if (currentYear > startingYear) {
      copyrightYearsParts.push(`- ${currentYear}`);
    }
    this.copyrightYears = copyrightYearsParts.join('')
  }
}
