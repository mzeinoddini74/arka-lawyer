import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BlogModel} from '../../../models/admin/BlogModel';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})

export class AdminBlogComponent implements AfterViewInit{

  displayedColumns: string[] = ['id', 'title', 'picture', 'actions'];
  dataSource: MatTableDataSource<BlogModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const blogs = [
      new BlogModel(1, 'اگر بی گناه باشید عدالت برای شما ممکن است', 'assets/images/home/1.jpg', '', '', '', ) ,
      new BlogModel(2, 'اگر بی گناه باشید عدالت برای شما ممکن است', 'assets/images/home/1.jpg', '', '', '')
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

}
