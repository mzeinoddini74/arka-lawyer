import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-admin-add-blog',
  templateUrl: './admin-add-blog.component.html',
  styleUrls: ['./admin-add-blog.component.css']
})
export class AdminAddBlogComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
  }

}
