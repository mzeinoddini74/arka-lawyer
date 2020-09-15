import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {CommentModel, CommentReplyModel} from '../../../models/admin/CommentModel';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import {AdminReplyDialogCommentComponent} from './admin-reply-dialog-comment/admin-reply-dialog-comment.component';
import {AdminEditDialogCommentComponent} from './admin-edit-dialog-comment/admin-edit-dialog-comment.component';


@Component({
  selector: 'app-admin-comment',
  templateUrl: './admin-comment.component.html',
  styleUrls: ['./admin-comment.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AdminCommentComponent implements AfterViewInit{

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isTableExpanded = false;
  comments = [
    new CommentModel(
      1, 'mahnaz', 'mahnaz@gmail.com', 'Hello', 25, 21, '', false,
      [
        new CommentReplyModel(2, 1 , 'admin', 'admin@gmail.com' , 'Hello', 15, 20, '')
      ]
    ),
    new CommentModel(
      2, 'sara', 'sara@gmail.com', 'Hello', 25, 21, '', false,
      [
        new CommentReplyModel(3, 1 , 'admin', 'admin@gmail.com' , 'Hello', 15, 20, ''),
        new CommentReplyModel(4, 1 , 'admin', 'admin@gmail.com' , 'Hello', 15, 20, '')
      ]
    ),
    new CommentModel(
      5, 'ali', 'ali@gmail.com', 'Hello', 25, 21, '', false , []
    )
  ];

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'email', 'comment', 'like', 'dislike', 'actions'];

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.comments);
  }

  openReplyDialog(rowId: number, parentRowId: number): void {
    const dialogRef = this.dialog.open(AdminReplyDialogCommentComponent, {
      width: '600px',
      data: {id: rowId, parent: parentRowId, comment: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  openEditDialog(rowId: number, rowComment: string): void {
    const dialogRef = this.dialog.open(AdminEditDialogCommentComponent, {
      width: '600px',
      data: {id: rowId, comment: rowComment}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
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

  // tslint:disable-next-line:typedef
  approve() {
    console.log('approve');
  }

}
