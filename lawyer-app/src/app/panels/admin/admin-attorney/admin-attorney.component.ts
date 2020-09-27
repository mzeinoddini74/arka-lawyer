import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {UserModel} from '../../../models/user/UserModel';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {AttorneyEducationModel, AttorneyModel, AttorneyWorkModel} from '../../../models/attorney/AttorneyModel';
import {LegalUserType} from '../../../models/attorney/ILegalUserType';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ConfirmationService} from 'primeng/api';
import {AttorneyEditDialogEducationComponent} from '../../attorney/attorney-essential-info/attorney-edit-dialog-education/attorney-edit-dialog-education.component';
import {MatDialog} from '@angular/material/dialog';
import {AdminEditDialogAttorneyComponent} from './admin-edit-dialog-attorney/admin-edit-dialog-attorney.component';

@Component({
  selector: 'app-admin-attorney',
  templateUrl: './admin-attorney.component.html',
  styleUrls: ['./admin-attorney.component.css'],
  providers: [ConfirmationService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminAttorneyComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'mobile', 'fullname', 'email', 'type', 'actions'];
  dataSource: MatTableDataSource<AttorneyModel>;
  type: LegalUserType;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              protected confirmationService: ConfirmationService) {

    const users = [
      new AttorneyModel(
        1,
        'ali',
        'Male',
        '',
        'ali@google.com',
        '',
        '',
        'tehran',
        '',
        [
          new AttorneyEducationModel(
            1,
            1,
            'Shariaty',
            'Bachelor',
            'Computer',
            '1390',
            '1392',
            false,
            '',
            false,
            ''
          )
        ],
        [
          new AttorneyWorkModel(
            1,
            1,
            '12',
            'developer',
            '1399',
            '',
            true,
            ''
          )
        ],
        '',
        '' ,
        '',
        this.type,
        '',
        false,
        '09122222222'
      ),
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
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

  openEditAttorneyDialog(row: AttorneyModel): void {

    const dialogRef = this.dialog.open(AdminEditDialogAttorneyComponent,
      {
        width: '800px',
        data: new AttorneyModel(
          row.id,
          row.fullname,
          row.gender,
          row.tel,
          row.email,
          row.profilePicture,
          row.fatherName,
          row.address,
          row.date,
          row.educationList,
          row.workList,
          row.booklet,
          row.license,
          row.resume,
          row.type,
          row.licenseValidityDate,
          row.isExpanded,
          row.mobile
        )
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('edited');
      }
    });
  }
  deleteAttorney(i): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-info-circle',
      acceptLabel: 'بله',
      rejectLabel: 'خیر',
      accept: () => {
        console.log('deleted');
      }
    });
  }

}
