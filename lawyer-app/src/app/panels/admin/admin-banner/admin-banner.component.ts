import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {BannerModel} from '../../../models/admin/BannerModel';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-admin-banner',
  templateUrl: './admin-banner.component.html',
  styleUrls: ['./admin-banner.component.css']
})
export class AdminBannerComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'picture', 'title', 'actions'];
  dataSource: MatTableDataSource<BannerModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const blogs = [
      new BannerModel(1, 'assets/images/home/1.jpg', 'وكلای ما همیشه خدمات عالی ارائه می دهند', '', '', '', ) ,
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

  // tslint:disable-next-line:typedef
  delete() {
    console.log('delete');
  }
}
