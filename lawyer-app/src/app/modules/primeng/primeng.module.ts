import { NgModule } from '@angular/core';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {KeyFilterModule} from 'primeng/keyfilter';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

const primengComponents = [
  InputMaskModule,
  InputNumberModule,
  KeyFilterModule,
  CardModule,
  ButtonModule
];

@NgModule({
  declarations: [],
  imports: [primengComponents],
  exports: [primengComponents]
})
export class PrimengModule { }
