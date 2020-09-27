import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {UserModel} from '../../../models/user/UserModel';
import {AdminEditDialogUserComponent} from './admin-edit-dialog-user/admin-edit-dialog-user.component';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationService} from 'primeng/api';


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css'],
  providers: [ConfirmationService]
})

export class AdminUserComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'mobile', 'fullname', 'email', 'gender', 'actions'];
  dataSource: MatTableDataSource<UserModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              protected confirmationService: ConfirmationService) {

    const users = [
      new UserModel(
        1,
        '09122222222',
        '123',
        'reza',
        'Male',
        '02122222222',
        'reza@google.com',
        '',
        'shiraz',
        'shiraz',
        'shiraz',
        ''
      ),
      new UserModel(
        1,
        '0915555555',
        '123',
        'ali',
        'Male',
        '02155555555',
        'ali@google.com',
        '',
        'tehran',
        'tehran',
        'tehran',
        ''
      )
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

  delete(i): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-info-circle',
      acceptLabel: 'بله',
      rejectLabel: 'خیر',
      accept: () => {

      }
    });
  }
  openEditDialog(row: UserModel): void {
    const dialogRef = this.dialog.open(AdminEditDialogUserComponent, {
      width: '800px',
      data: new UserModel(
        row.id,
        row.fullname,
        row.mobile,
        row.password,
        row.gender,
        row.tel,
        row.email,
        row.profilePicture,
        row.province,
        row.city,
        row.address,
        row.date
      )
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

}
