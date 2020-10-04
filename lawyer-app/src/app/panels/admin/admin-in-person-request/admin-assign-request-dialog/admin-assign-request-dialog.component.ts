import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BannerModel} from '../../../../models/admin/BannerModel';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

const ELEMENT_DATA: any[] = [
  {id: 1, fullname: 'Hydrogen', type: 'مشاور', category: 'کیفری - طلاق'},
  {id: 2, fullname: 'Helium', type: 'وکیل', category: 'کیفری - طلاق'},
  {id: 3, fullname: 'Lithium', type: 'مشاور', category: 'کیفری - قتل'},
  {id: 4, fullname: 'Beryllium', type: 'وکیل', category: 'کیفری - طلاق'},
  {id: 5, fullname: 'Boron', type: 'وکیل', category: 'کیفری - طلاق'},
  {id: 6, fullname: 'Carbon', type: 'مشاور', category: 'کیفری - طلاق'},
  {id: 7, fullname: 'Nitrogen', type: 'وکیل', category: 'کیفری - افترا'},
  {id: 8, fullname: 'Oxygen', type: 'مشاور', category: 'کیفری - طلاق'},
  {id: 9, fullname: 'Fluorine', type: 'وکیل', category: 'کیفری - طلاق'},
  {id: 10, fullname: 'Neon', type: 'مشاور', category: 'کیفری - افترا'},
];

@Component({
  selector: 'app-admin-assign-request-dialog',
  templateUrl: './admin-assign-request-dialog.component.html',
  styleUrls: ['./admin-assign-request-dialog.component.css']
})
export class AdminAssignRequestDialogComponent implements AfterViewInit{

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AdminAssignRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) {
  }

  displayedColumns: string[] = ['select', 'id', 'fullname', 'type', 'category'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selection = new SelectionModel<any>(false, []);

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(this.data);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
