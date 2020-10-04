import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AttorneyWorkModel} from '../../../models/attorney/AttorneyModel';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationService} from 'primeng/api';
import {AttorneyEditDialogWorkComponent} from '../attorney-essential-info/attorney-edit-dialog-work/attorney-edit-dialog-work.component';

@Component({
  selector: 'app-attorney-work',
  templateUrl: './attorney-work.component.html',
  styleUrls: ['./attorney-work.component.css'],
  providers: [ConfirmationService]
})
export class AttorneyWorkComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'company', 'position',
    'startYear', 'endYear', 'stillWorking', 'actions'];
  dataSource: MatTableDataSource<AttorneyWorkModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              protected confirmationService: ConfirmationService) {
    const workList = [
      new AttorneyWorkModel(1, 1, 'Shariaty', 'Developer',
        '1390', '1392', false, '') ,
      new AttorneyWorkModel(1, 1, 'Shariaty', 'Developer',
        '1392', '', true, '')
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(workList);
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

  openEditWorkDialog(row: AttorneyWorkModel): void {
    const dialogRef = this.dialog.open(AttorneyEditDialogWorkComponent, {
      width: '800px',
      data: new AttorneyWorkModel(
        row.id,
        row.attorneyId,
        row.company,
        row.position,
        row.startYear,
        row.endYear,
        row.stillWorking,
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
    console.log('opened');
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
