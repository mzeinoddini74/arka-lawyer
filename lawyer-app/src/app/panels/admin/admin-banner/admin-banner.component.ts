import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {BannerModel} from '../../../models/admin/BannerModel';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationService} from 'primeng/api';
import {AdminEditDialogBannerComponent} from './admin-edit-dialog-banner/admin-edit-dialog-banner.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-admin-banner',
  templateUrl: './admin-banner.component.html',
  styleUrls: ['./admin-banner.component.css'],
  providers: [ConfirmationService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class AdminBannerComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'picture', 'title', 'link', 'actions'];
  dataSource: MatTableDataSource<BannerModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              protected confirmationService: ConfirmationService) {
    const blogs = [
      new BannerModel(1, 'assets/images/home/1.jpg', 'وكلای ما همیشه خدمات عالی ارائه می دهند', 'qwe', '', '') ,
      new BannerModel(2, 'assets/images/home/1.jpg', 'وكلای ما همیشه خدمات عالی ارائه می دهند',  '', '', '')
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

  openEditDialog(row: BannerModel): void {

    const dialogRef = this.dialog.open(AdminEditDialogBannerComponent,
      {
        width: '800px',
        data: new BannerModel(
          row.id,
          row.picture,
          row.title,
          row.description,
          row.link,
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
