import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BlogModel} from '../../../models/admin/BlogModel';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {AdminEditDialogBlogComponent} from './admin-edit-dialog-blog/admin-edit-dialog-blog.component';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})

export class AdminBlogComponent implements AfterViewInit{

  displayedColumns: string[] = ['id', 'picture', 'title', 'actions'];
  dataSource: MatTableDataSource<BlogModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    const blogs = [
      new BlogModel(1, 'اگر بی گناه باشید عدالت برای شما ممکن است', 'assets/images/home/1.jpg', '', '', '', ) ,
      new BlogModel(2, 'اگر بی گناه باشید عدالت برای شما ممکن است', 'assets/images/home/1.jpg', '', '', '')
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(blogs);
  }

  openEditDialog(row: BlogModel): void {
    const dialogRef = this.dialog.open(AdminEditDialogBlogComponent, {
      width: '800px',
      data: {id: row.id, title: row.title, picture: row.picture, summary: row.summary, description: row.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
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

  // tslint:disable-next-line:typedef
  delete() {
    console.log('delete');
  }
}
