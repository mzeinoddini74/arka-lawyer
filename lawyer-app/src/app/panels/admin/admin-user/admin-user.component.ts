import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {UserModel} from '../../../models/admin/UserModel';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})

export class AdminUserComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'mobile', 'fullname', 'email', 'date'];
  dataSource: MatTableDataSource<UserModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

    const users = [
      new UserModel(1, '09122222222', 'ali', 'ali@google.com', '1399/06/20'),
      new UserModel(2, '09122222222', 'sara', 'sara@google.com', '1399/06/20'),
      new UserModel(3, '09122222222', 'ali', 'ali@google.com', '1399/06/20'),
      new UserModel(4, '09122222222', 'mina', 'mina@google.com', '1399/06/20'),
      new UserModel(5, '09122222222', 'ali', 'ali@google.com', '1399/06/20'),
      new UserModel(6, '09122222222', 'sima', 'sima@google.com', '1399/06/20'),
      new UserModel(7, '09122222222', 'ali', 'ali@google.com', '1399/06/20'),
      new UserModel(8, '09122222222', 'mohammad', 'mohammad@google.com', '1399/06/20'),
      new UserModel(9, '09122222222', 'amir', 'amir@google.com', '1399/06/20')
    ];

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
