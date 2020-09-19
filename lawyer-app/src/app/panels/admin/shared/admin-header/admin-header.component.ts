import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleRightMenu() {
    if ($('#panel-menu').css('display') === 'block'){

      $('#panel-menu').css('display', 'none');
      $('#panel-navbar').addClass('w-100');
      $('#main-content').addClass('pr-0');
    }
    else{
      $('#panel-menu').css('display', 'block');
      $('#panel-navbar').removeClass('w-100');
      $('#main-content').removeClass('pr-0');
    }
  }
}
