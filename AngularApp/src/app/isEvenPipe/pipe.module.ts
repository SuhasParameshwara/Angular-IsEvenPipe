import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { isEvenPipe } from '../isEvenPipe/isEven.pipe';


@NgModule({
  declarations: [
    isEvenPipe
  ],
  imports: [
    BrowserModule
  ],
  exports: [isEvenPipe],
  providers: [],
})
export class PipeModule { }
