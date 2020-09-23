import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {LegalCaseModel} from '../../../models/attorney/LegalCaseModel';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {TelConsultationModel} from '../../../models/attorney/TelConsultationModel';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-attorney-tel-consultation',
  templateUrl: './attorney-tel-consultation.component.html',
  styleUrls: ['./attorney-tel-consultation.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AttorneyTelConsultationComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'description', 'category', 'user', 'duration', 'actions'];
  dataSource: MatTableDataSource<TelConsultationModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    const consultations = [
      new TelConsultationModel(1, 'اگر بی گناه باشید عدالت برای شما ممکن است', 'salam', '', '', '', '30 دقیقه', false ) ,
      new TelConsultationModel(2, 'اگر بی گناه باشید عدالت برای شما ممکن است', 'salam', '', '', '', '15 دقیقه', false)
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(consultations);
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

}
