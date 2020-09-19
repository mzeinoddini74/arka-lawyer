import { NgModule } from '@angular/core';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {KeyFilterModule} from 'primeng/keyfilter';

const primengComponents = [
  InputMaskModule,
  InputNumberModule,
  KeyFilterModule
];

@NgModule({
  declarations: [],
  imports: [primengComponents],
  exports: [primengComponents]
})
export class PrimengModule { }
