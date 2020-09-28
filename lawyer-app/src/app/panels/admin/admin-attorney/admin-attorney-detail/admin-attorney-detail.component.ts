import {Component, Input, OnInit} from '@angular/core';
import {AttorneyModel} from '../../../../models/attorney/AttorneyModel';
import {ActivatedRoute, Router} from '@angular/router';
import {AttorneyDataServiceService} from '../../../../services/attorney/attorney-data-service.service';

@Component({
  selector: 'app-admin-attorney-detail',
  templateUrl: './admin-attorney-detail.component.html',
  styleUrls: ['./admin-attorney-detail.component.css']
})
export class AdminAttorneyDetailComponent implements OnInit {

  id: number;
  attorney: any;

  constructor(private route: ActivatedRoute,
              private data: AttorneyDataServiceService) {
  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.queryParamMap.get('id'));
    console.log(this.id);
    this.attorney = this.data.getData(this.id);
  }
}
