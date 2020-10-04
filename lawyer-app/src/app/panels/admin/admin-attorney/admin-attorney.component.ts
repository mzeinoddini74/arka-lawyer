import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {AttorneyEducationModel, AttorneyModel, AttorneyWorkModel} from '../../../models/attorney/AttorneyModel';
import {LegalUserType} from '../../../models/attorney/ILegalUserType';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ConfirmationService} from 'primeng/api';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {AttorneyDataService} from '../../../services/attorney/attorney-data.service';

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
  selectedRow: number;
  users = [
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
      '09122222222'
    ),
    new AttorneyModel(
      2,
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
      '09122222222'
    ),
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router,
              protected data: AttorneyDataService,
              public dialog: MatDialog,
              protected confirmationService: ConfirmationService) {

    // Assign the data to the data source for the table to render
    data.setData(this.users);
    this.dataSource = new MatTableDataSource(data.getAllData());
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
