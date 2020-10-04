import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BlogModel} from '../../../models/admin/BlogModel';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {AdminEditDialogBlogComponent} from './admin-edit-dialog-blog/admin-edit-dialog-blog.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css'],
  providers: [ConfirmationService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})

export class AdminBlogComponent implements AfterViewInit{

  displayedColumns: string[] = ['id', 'picture', 'title', 'actions'];
  dataSource: MatTableDataSource<BlogModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              protected confirmationService: ConfirmationService) {
    const blogs = [
      new BlogModel(1, 'اگر بی گناه باشید عدالت برای شما ممکن است', 'assets/images/home/1.jpg', '123', 'dfg', '', ) ,
      new BlogModel(2, 'اگر بی گناه باشید عدالت برای شما ممکن است', 'assets/images/home/1.jpg', '', '', '')
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(blogs);
  }

  openEditDialog(row: BlogModel): void {
    const dialogRef = this.dialog.open(AdminEditDialogBlogComponent, {
      width: '700px',
      data: {id: row.id, title: row.title, picture: row.picture, summary: row.summary, description: row.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
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
