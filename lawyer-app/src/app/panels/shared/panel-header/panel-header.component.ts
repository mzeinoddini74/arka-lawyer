import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.css']
})
export class PanelHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  toggleRightMenu() {
    if ($('#panel-menu').css('display') === 'block'){

      $('#panel-menu').css('display', 'none');
      $('#panel-navbar').addClass('w-100');
      $('#panel-footer').addClass('w-100');
      $('#main-content').addClass('pr-0');
    }
    else{
      $('#panel-menu').css('display', 'block');
      $('#panel-navbar').removeClass('w-100');
      $('#panel-footer').removeClass('w-100');
      $('#main-content').removeClass('pr-0');
    }
  }
}
