import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {UserModel} from '../../../models/user/UserModel';


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})

export class AdminUserComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'mobile', 'fullname', 'email', 'type', 'actions'];
  dataSource: MatTableDataSource<UserModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

    const users = [
      new UserModel(1, '09122222222', '', 'ali', 'Male', '',
        'ali@google.com', '', 'tehran', 'tehran', 'teh', ''),
      new UserModel(1, '09122222222', '', 'ali', 'Male', '',
        'ali@google.com', '', 'tehran', 'tehran', 'teh', '')    ];

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
