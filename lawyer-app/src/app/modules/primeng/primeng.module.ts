import { NgModule } from '@angular/core';
import {InputNumberModule} from 'primeng/inputnumber';
import {KeyFilterModule} from 'primeng/keyfilter';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';

const primengComponents = [
  InputNumberModule,
  KeyFilterModule,
  FileUploadModule,
  ButtonModule,
  ConfirmDialogModule,
  DropdownModule,
  RadioButtonModule
];

@NgModule({
  declarations: [],
  imports: [primengComponents],
  exports: [primengComponents]
})
export class PrimengModule { }
