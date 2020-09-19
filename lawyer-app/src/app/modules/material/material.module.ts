import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';

const materialComponents = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatPaginatorModule,
  MatTableModule,
  MatExpansionModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule {
}
