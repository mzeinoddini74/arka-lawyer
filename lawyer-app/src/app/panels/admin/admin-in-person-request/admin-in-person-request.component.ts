import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {LegalCaseModel} from '../../../models/attorney/LegalCaseModel';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {BannerModel} from '../../../models/admin/BannerModel';
import {AdminEditDialogBannerComponent} from '../admin-banner/admin-edit-dialog-banner/admin-edit-dialog-banner.component';
import {AdminAssignRequestDialogComponent} from './admin-assign-request-dialog/admin-assign-request-dialog.component';

@Component({
  selector: 'app-admin-in-person-request',
  templateUrl: './admin-in-person-request.component.html',
  styleUrls: ['./admin-in-person-request.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class AdminInPersonRequestComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'category', 'user', 'actions'];
  dataSource: MatTableDataSource<LegalCaseModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    const blogs = [
      new LegalCaseModel(1, 'اگر بی گناه باشید عدالت برای شما ممکن است', 'salam', '', '', '', false ) ,
      new LegalCaseModel(2, 'اگر بی گناه باشید عدالت برای شما ممکن است', 'salam', '', '', '', false)
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(blogs);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openAssignDialog(rowId: number): void {

    const dialogRef = this.dialog.open(AdminAssignRequestDialogComponent,
      {
        width: '800px',
        data: rowId
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('edited');
      }
    });
  }

}
