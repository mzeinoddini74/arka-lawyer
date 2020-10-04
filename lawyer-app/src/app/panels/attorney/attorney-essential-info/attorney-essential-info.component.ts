import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {AttorneyEducationModel, AttorneyWorkModel} from '../../../models/attorney/AttorneyModel';
import {AttorneyEditDialogEducationComponent} from './attorney-edit-dialog-education/attorney-edit-dialog-education.component';
import {ConfirmationService} from 'primeng/api';
import {AttorneyEditDialogWorkComponent} from './attorney-edit-dialog-work/attorney-edit-dialog-work.component';
import {LegalUserType} from '../../../models/attorney/ILegalUserType';
import {ConsultationCategoryModel} from '../../../models/consultation-category/ConsultationCategoryModel';
import {MatSelectionList} from '@angular/material/list';

@Component({
  selector: 'app-attorney-essential-info',
  templateUrl: './attorney-essential-info.component.html',
  styleUrls: ['./attorney-essential-info.component.css'],
  providers: [ConfirmationService]
})
export class AttorneyEssentialInfoComponent implements OnInit {

  @ViewChild('subCategoriesElement') subCategoriesList: MatSelectionList;

  personalForm: FormGroup;
  educationForm: FormGroup;
  workForm: FormGroup;
  additionalForm: FormGroup;
  LegalUserTypes: LegalUserType[];

  personalErrorMessages = {
    fullname: [
      { type: 'required', message: 'نام خود را وارد کنید.' },
      { type: 'maxlength', message: 'نام نمی تواند بیشتر از 100 کاراکتر باشد.' }
    ],
    email: [
      { type: 'required', message: 'پست الکترونیکی خود را وارد کنید.' },
      { type: 'maxlength', message: 'پست الکترونیکی نمی تواند بیشتر از 200 کاراکتر باشد.' },
      { type: 'email', message: 'لطفا پست الکترونیکی معتبر وارد کنید.' }
    ],
    tel: [
      { type: 'required', message: 'شماره تلفن را وارد کنید.' },
      { type: 'minlength', message: 'شماره تلفن باید 11 رقم باشد.' },
      { type: 'maxlength', message: 'شماره تلفن باید 11 رقم باشد.' },
      { type: 'pattern', message: 'لطفا شماره تلفن معتبر وارد کنید.' }
    ],
    gender: [
      { type: 'required', message: 'جنسیت را انتخاب کنید.' }
    ],
    address: [
      { type: 'required', message: 'آدرس را انتخاب کنید.' },
      { type: 'maxlength', message: 'آدرس نمی تواند بیشتر از 200 کاراکتر باشد.' }
    ],
    fatherName: [
      { type: 'required', message: 'نام پدر را وارد کنید.' },
      { type: 'maxlength', message: 'نام پدر نمی تواند بیشتر از 100 کاراکتر باشد.' }
    ],
    profilePicture: [
      { type: 'required', message: 'تصویر پروفایل را آپلود کنید.' }
    ]
  };
  educationalErrorMessages = {
    university: [
      { type: 'required', message: 'نام دانشگاه خود را وارد کنید.' },
      { type: 'maxlength', message: 'نام دانشگاه نمی تواند بیشتر از 200 کاراکتر باشد.' }
    ],
    grade: [
      { type: 'required', message: 'مقطع تحصیلی را وارد کنید.' },
      { type: 'maxlength', message: 'مقطع تحصیلی نمی تواند بیشتر از 100 کاراکتر باشد.' }
    ],
    major: [
      { type: 'required', message: 'رشته تحصیلی را وارد کنید.' },
      { type: 'maxlength', message: 'رشته تحصیلی نمی تواند بیشتر از 200 کاراکتر باشد.' }
    ],
    startYear: [
      { type: 'required', message: 'سال شروع را وارد کنید.' },
      { type: 'minlength', message: 'سال شروع باید 4 رقم باشد.' },
      { type: 'maxlength', message: 'سال شروع باید 4 رقم باشد.' },
    ],
    endYear: [
      { type: 'minlength', message: 'سال پایان باید 4 رقم باشد.' },
      { type: 'maxlength', message: 'سال پایان باید 4 رقم باشد.' },
    ]
  };
  workErrorMessages = {
    company: [
      { type: 'required', message: 'نام موسسه خود را وارد کنید.' },
      { type: 'maxlength', message: 'نام موسسه نمی تواند بیشتر از 200 کاراکتر باشد.' }
    ],
    position: [
      { type: 'required', message: 'سمت را وارد کنید.' },
      { type: 'maxlength', message: 'سمت نمی تواند بیشتر از 100 کاراکتر باشد.' }
    ],
    startYear: [
      { type: 'required', message: 'سال شروع را وارد کنید.' },
      { type: 'minlength', message: 'سال شروع باید 4 رقم باشد.' },
      { type: 'maxlength', message: 'سال شروع باید 4 رقم باشد.' },
    ],
    endYear: [
      { type: 'minlength', message: 'سال پایان باید 4 رقم باشد.' },
      { type: 'maxlength', message: 'سال پایان باید 4 رقم باشد.' },
    ]
  };
  additionalErrorMessages = {
    type: [
      { type: 'required', message: 'نوع کاربر حقوقی را انتخاب کنید.' }
    ],
  };

  displayedEducationColumns: string[] = ['id', 'university', 'grade', 'major', 'startYear', 'endYear', 'stillStudying', 'lastDegree', 'actions'];
  displayedWorkColumns: string[] = ['id', 'company', 'position', 'startYear', 'endYear', 'stillWorking', 'actions'];
  educationDataSource: MatTableDataSource<AttorneyEducationModel>;
  workDataSource: MatTableDataSource<AttorneyWorkModel>;
  public educationList: AttorneyEducationModel[] = [];
  public workList: AttorneyWorkModel[] = [];
  public list: ConsultationCategoryModel[] = [];
  public subCategories: ConsultationCategoryModel[] = [];
  public selectedSubCategories: string[] = [];

  constructor(public formBuilder: FormBuilder,
              public dialog: MatDialog,
              protected confirmationService: ConfirmationService) {

    this.educationDataSource = new MatTableDataSource(this.educationList);
    this.workDataSource = new MatTableDataSource(this.workList);

    this.createPersonalForm();
    this.createEducationalForm();
    this.createWorkForm();
    this.createAdditionalForm();
    this.LegalUserTypes = [
      {name: 'وکیل پایه یک دادگستری', code: '1'},
      {name: 'وکیل پایه یک قوه قضاییه', code: '2'},
      {name: 'وکیل پایه دو قوه قضاییه', code: '3'},
      {name: 'کارآموز کانون وکلای دادگستری', code: '4'},
      {name: 'کارآموز قوه قضاییه', code: '5'},
      {name: 'کارشناس حقوقی', code: '6'},
      {name: 'کارشناس رسمی دادگستری', code: '7'}
    ];

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
    this.subCategories = this.list.filter(x => x.parent !== 0);
  }

  createPersonalForm(): void {
    this.personalForm = this.formBuilder.group(
      {
        fullname: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ),
        gender: new FormControl(
          null,
          Validators.compose([
            Validators.required
          ])
        ),
        tel: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(11),
            Validators.minLength(11)
          ])
        ),
        address: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200)
          ])
        ),
        fatherName: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ),
        email: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200),
            Validators.email
          ])
        ),
        profilePicture: new FormControl(
          null,
          Validators.compose([
            Validators.required
          ])
        )
      }
    );
  }
  createEducationalForm(): void {
    this.educationForm = this.formBuilder.group(
      {
        university: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200)
          ])
        ),
        grade: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ),
        major: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200)
          ])
        ),
        startYear: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(4),
            Validators.minLength(4)
          ])
        ),
        endYear: new FormControl(
          null,
          Validators.compose([
            Validators.maxLength(4),
            Validators.minLength(4)
          ])
        ),
        stillStudying: new FormControl(
          null
        ),
        degreePicture: new FormControl(
          null
        ),
        lastDegree: new FormControl(
          null
        )
      }
    );
  }
  createWorkForm(): void {
    this.workForm = this.formBuilder.group(
      {
        company: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200)
          ])
        ),
        position: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ),
        startYear: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(4),
            Validators.minLength(4)
          ])
        ),
        endYear: new FormControl(
          null,
          Validators.compose([
            Validators.maxLength(4),
            Validators.minLength(4)
          ])
        ),
        stillWorking: new FormControl(
          null
        )
      }
    );
  }
  createAdditionalForm(): void {
    this.additionalForm = this.formBuilder.group(
      {
        resume: new FormControl(
          null
        ),
        license: new FormControl(
          null
        ),
        booklet: new FormControl(
          null
        ),
        type: new FormControl(
          null,
          Validators.compose([
            Validators.required,
          ])
        )
      }
    );
  }

  addEducation(): void {
    this.educationList.push(this.educationForm.value);
    this.refreshEducationDataSource();
  }
  deleteEducation(i): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-info-circle',
      acceptLabel: 'بله',
      rejectLabel: 'خیر',
      accept: () => {
        this.educationList.splice(i - 1, 1);
        this.refreshEducationDataSource();
      }
    });
  }
  openEditEducationDialog(row: AttorneyEducationModel): void {
    const dialogRef = this.dialog.open(AttorneyEditDialogEducationComponent, {
      width: '800px',
      data: new AttorneyEducationModel(
        row.id,
        row.attorneyId,
        row.university,
        row.grade,
        row.major,
        row.startYear,
        row.endYear,
        row.stillStudying,
        row.degreePicture,
        row.lastDegree,
        row.date
      )
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.editEducation(result);
        this.refreshEducationDataSource();
      }
    });
  }
  editEducation(newData: AttorneyEducationModel): void {
    this.educationList.splice(newData.id - 1, 1, newData);
    this.refreshEducationDataSource();
  }
  refreshEducationDataSource(): void {
    this.educationDataSource = new MatTableDataSource(this.educationList);
  }

  addWork(): void {
    this.workList.push(this.workForm.value);
    this.refreshWorkDataSource();
  }
  deleteWork(i): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-info-circle',
      acceptLabel: 'بله',
      rejectLabel: 'خیر',
      accept: () => {
        this.workList.splice(i - 1, 1);
        this.refreshWorkDataSource();
      }
    });
  }
  openEditWorkDialog(row: AttorneyWorkModel): void {
    const dialogRef = this.dialog.open(AttorneyEditDialogWorkComponent, {
      width: '800px',
      data: new AttorneyWorkModel(
        row.id,
        row.attorneyId,
        row.company,
        row.position,
        row.startYear,
        row.endYear,
        row.stillWorking,
        row.date
      )
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.editWork(result);
        this.refreshWorkDataSource();
      }
    });
  }
  editWork(newData: AttorneyWorkModel): void {
    this.workList.splice(newData.id - 1, 1, newData);
    this.refreshWorkDataSource();
  }
  refreshWorkDataSource(): void {
    this.workDataSource = new MatTableDataSource(this.workList);
  }

  getLicense(event): void {
    for ( const file of event.files){
      this.additionalForm.controls.license = file.name;
    }
  }
  getBooklet(event): void {
    for ( const file of event.files){
      this.additionalForm.controls.booklet = file.name;
    }
  }
  getResume(event): void {
    for ( const file of event.files){
      this.additionalForm.controls.resume = file.name;
    }
  }
  getDegreePicture(event): void {
    for ( const file of event.files){
      this.educationForm.controls.degreePicture = file.name;
    }
  }
  getProfilePicture(event): void {
    for ( const file of event.files){
      this.personalForm.controls.personalPicture = file.name;
    }
  }

  save(): void {
    console.log('saved');
  }

  onSelectionChange(): void {
    this.selectedSubCategories = this.getSelected(this.list);
  }

  getSelected(list: ConsultationCategoryModel[]): string[] {
    const selected: string[] = [];
    const values: any[] = this.subCategoriesList.selectedOptions.selected.map(s => s.value);

    if (values !== null){
      // tslint:disable-next-line:only-arrow-functions
      values.forEach( function(value): void {
        const row = list.find(x => x.id === value);
        selected.push(row.title);
      });
    }
    return selected;
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
