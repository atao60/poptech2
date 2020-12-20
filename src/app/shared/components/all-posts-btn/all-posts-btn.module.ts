import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AllPostsBtnComponent } from './all-posts-btn.component';

@NgModule({
  declarations: [AllPostsBtnComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AllPostsBtnComponent]
})
export class AllPostsBtnModule { }
