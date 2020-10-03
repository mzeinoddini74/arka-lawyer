import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

const ngxBootstrapComponents = [
  CarouselModule
];
@NgModule({
  declarations: [],
  imports: [
    ngxBootstrapComponents
  ],
  exports: [
    ngxBootstrapComponents
  ]
})
export class NgxBootstrapModule { }
