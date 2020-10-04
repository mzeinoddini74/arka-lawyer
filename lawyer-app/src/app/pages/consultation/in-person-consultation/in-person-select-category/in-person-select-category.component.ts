import { Component, OnInit } from '@angular/core';
import {ConsultationCategoryModel} from '../../../../models/consultation-category/ConsultationCategoryModel';

@Component({
  selector: 'app-in-person-select-category',
  templateUrl: './in-person-select-category.component.html',
  styleUrls: ['./in-person-select-category.component.css']
})
export class InPersonSelectCategoryComponent implements OnInit {
  list: ConsultationCategoryModel[];
  mainCategories: ConsultationCategoryModel[];
  subCategories: ConsultationCategoryModel[];
  selectedCategory: string;

  constructor() {
    this.list = [
      new ConsultationCategoryModel(
        1, 'حقوقی', 0
      ),
      new ConsultationCategoryModel(
        2, 'کیفری - مجازات اسلامی', 0
      ),
      new ConsultationCategoryModel(
        3, 'کیفری - جرائم رایانه ای', 0
      ),
      new ConsultationCategoryModel(
        4, 'کیفری - مبارزه با مواد مخدر', 0
      ),
      new ConsultationCategoryModel(
        5, 'دادرسی', 0
      ),
      new ConsultationCategoryModel(
        6, 'حقوقی 1', 1
      ),
      new ConsultationCategoryModel(
        7, 'حقوقی 2', 1
      ),
      new ConsultationCategoryModel(
        8, 'حقوقی 3', 1
      ),
      new ConsultationCategoryModel(
        9, 'مجازات اسلامی 1', 2
      ),
      new ConsultationCategoryModel(
        10, 'مجازات اسلامی 2', 2
      ),
      new ConsultationCategoryModel(
        11, 'مجازات اسلامی 3', 2
      ),
      new ConsultationCategoryModel(
        12, 'جرائم رایانه ای 1', 3
      ),
      new ConsultationCategoryModel(
        13, 'جرائم رایانه ای 2', 3
      ),
      new ConsultationCategoryModel(
        14, 'جرائم رایانه ای 3', 3
      ),
      new ConsultationCategoryModel(
        12, 'مبارزه با مواد مخدر 1', 4
      ),
      new ConsultationCategoryModel(
        13, 'مبارزه با مواد مخدر 2', 4
      ),
      new ConsultationCategoryModel(
        14, 'مبارزه با مواد مخدر 3', 4
      ),
      new ConsultationCategoryModel(
        12, 'دادرسی 1', 5
      ),
      new ConsultationCategoryModel(
        13, 'دادرسی 2', 5
      ),
      new ConsultationCategoryModel(
        14, 'دادرسی 3', 5
      )
    ];
  }

  ngOnInit(): void {
    this.mainCategories = this.list.filter(x => x.parent === 0);
    this.getList(this.mainCategories[0].id, this.mainCategories[0].title);
  }

  getList(i: number, t: string): void {
    this.subCategories = this.list.filter(x => x.parent === i);
    this.selectedCategory = t;
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.subCategories = this.list.filter(
      x => x.title.includes(filterValue.trim().toLowerCase())
      && x.parent !== 0 );
  }
}
