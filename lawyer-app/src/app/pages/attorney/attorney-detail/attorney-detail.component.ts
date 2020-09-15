import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-attorney-detail',
  templateUrl: './attorney-detail.component.html',
  styleUrls: ['./attorney-detail.component.css']
})
export class AttorneyDetailComponent implements OnInit {

  public Editor = ClassicEditor;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  handleSuccess($event: string) {
    console.log('success');
  }
}
