import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {AttorneyEducationModel} from '../../../models/attorney/AttorneyModel';
import {ConfirmationService} from 'primeng/api';
import {AttorneyEditDialogEducationComponent} from '../attorney-essential-info/attorney-edit-dialog-education/attorney-edit-dialog-education.component';

@Component({
  selector: 'app-attorney-education',
  templateUrl: './attorney-education.component.html',
  styleUrls: ['./attorney-education.component.css'],
  providers: [ConfirmationService]
})
export class AttorneyEducationComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'university', 'grade', 'major',
    'startYear', 'endYear', 'stillStudying', 'degreePicture', 'actions'];
  dataSource: MatTableDataSource<AttorneyEducationModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              protected confirmationService: ConfirmationService) {
    const educationList = [
      new AttorneyEducationModel(1, 'Shariaty', 'Bachelor',
        'Computer', '1392', '1394', false,
        '', false, '' ) ,
      new AttorneyEducationModel(2, 'Shariaty', 'Bachelor', 'Computer', '1395', '1397', false, '', true, '')
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(educationList);
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

  openEditEducationDialog(row: AttorneyEducationModel): void {
    const dialogRef = this.dialog.open(AttorneyEditDialogEducationComponent,
      {
        width: '800px',
        data: new AttorneyEducationModel(
          row.id,
          row.university,
          row.grade,
          row.major,
          row.startYear,
          row.endYear,
          row.stillStudying,
          row.degreePicture,
          row.lastDegree,
          row.date
        )
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('edited');
      }
    });
  }
  delete(i): void {
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
