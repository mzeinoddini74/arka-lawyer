import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {UserModel} from '../../../models/user/UserModel';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {AttorneyEducationModel, AttorneyModel, AttorneyWorkModel} from '../../../models/attorney/AttorneyModel';
import {LegalUserType} from '../../../models/attorney/ILegalUserType';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-admin-attorney',
  templateUrl: './admin-attorney.component.html',
  styleUrls: ['./admin-attorney.component.css'],
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

  constructor() {

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

}
