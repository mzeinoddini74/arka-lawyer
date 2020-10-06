import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-admin-specialty-category',
  templateUrl: './admin-specialty-category.component.html',
  styleUrls: ['./admin-specialty-category.component.css']
})
export class AdminSpecialtyCategoryComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'count', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              protected confirmationService: ConfirmationService) {
    const categories = [
      {id: 1, titile: 'کیفری', count: 6  },
      {id: 2, titile: 'کیفری', count: 12  },
      {id: 3, titile: 'کیفری', count: 3  }
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(categories);
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
