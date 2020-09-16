import { NgModule } from '@angular/core';
import {PasswordModule} from 'primeng/password';



const primengComponents = [
  PasswordModule
];

@NgModule({
  declarations: [],
  imports: [
    primengComponents
  ],
  exports: [
    primengComponents
  ]
})
export class PrimengModule { }
