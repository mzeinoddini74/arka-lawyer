import { NgModule } from '@angular/core';
import {InputNumberModule} from 'primeng/inputnumber';
import {KeyFilterModule} from 'primeng/keyfilter';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';

const primengComponents = [
  InputNumberModule,
  KeyFilterModule,
  FileUploadModule,
  ButtonModule
];

@NgModule({
  declarations: [],
  imports: [primengComponents],
  exports: [primengComponents]
})
export class PrimengModule { }
