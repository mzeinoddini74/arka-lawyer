import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './modules/material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgwWowModule } from 'ngx-wow';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxCaptchaModule } from 'ngx-captcha';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getDutchPaginatorIntl } from './dutch-paginator-intl';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrimengModule} from './modules/primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HomeBannerComponent } from './pages/home/home-banner/home-banner.component';
import { HomeAboutComponent } from './pages/home/home-about/home-about.component';
import { HomeServiceComponent } from './pages/home/home-service/home-service.component';
import { HomeTeamComponent } from './pages/home/home-team/home-team.component';
import { HomeExpertiseComponent } from './pages/home/home-expertise/home-expertise.component';
import { HomeContactComponent } from './pages/home/home-contact/home-contact.component';
import { HomeBlogComponent } from './pages/home/home-blog/home-blog.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AttorneyComponent } from './pages/attorney/attorney.component';
import { AttorneyDetailComponent } from './pages/attorney/attorney-detail/attorney-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { HomeAppComponent } from './pages/home/home-app/home-app.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { TelConsultationComponent } from './pages/consultation/tel-consultation/tel-consultation.component';
import { InPersonConsultationComponent } from './pages/consultation/in-person-consultation/in-person-consultation.component';
import { OnlineConsultationComponent } from './pages/consultation/online-consultation/online-consultation.component';
import { ServiceComponent } from './pages/service/service.component';
import { ServiceDetailComponent } from './pages/service/service-detail/service-detail.component';
import { InPersonSelectCategoryComponent } from './pages/consultation/in-person-consultation/in-person-select-category/in-person-select-category.component';
import { TelSelectCategoryComponent } from './pages/consultation/tel-consultation/tel-select-category/tel-select-category.component';
import { TelSelectConsultorComponent } from './pages/consultation/tel-consultation/tel-select-consultor/tel-select-consultor.component';

import { LoginComponent } from './pages/account/login/login.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { ForgotPasswordComponent } from './pages/account/forgot-password/forgot-password.component';

import { PanelHeaderComponent } from './panels/shared/panel-header/panel-header.component';
import { PanelFooterComponent } from './panels/shared/panel-footer/panel-footer.component';

import { AdminDashboardComponent } from './panels/admin/admin-dashboard/admin-dashboard.component';
import { AdminMenuComponent } from './panels/admin/shared/admin-menu/admin-menu.component';
import { AdminUserComponent } from './panels/admin/admin-user/admin-user.component';
import { AdminBannerComponent } from './panels/admin/admin-banner/admin-banner.component';
import { AdminAddBannerComponent } from './panels/admin/admin-banner/admin-add-banner/admin-add-banner.component';
import { AdminBlogComponent } from './panels/admin/admin-blog/admin-blog.component';
import { AdminAddBlogComponent } from './panels/admin/admin-blog/admin-add-blog/admin-add-blog.component';
import { AdminAttorneyComponent } from './panels/admin/admin-attorney/admin-attorney.component';
import { AdminAddAttorneyComponent } from './panels/admin/admin-attorney/admin-add-attorney/admin-add-attorney.component';
import { AdminEditDialogBlogComponent } from './panels/admin/admin-blog/admin-edit-dialog-blog/admin-edit-dialog-blog.component';
import { AdminEditDialogBannerComponent } from './panels/admin/admin-banner/admin-edit-dialog-banner/admin-edit-dialog-banner.component';
import { AdminProfileComponent } from './panels/admin/admin-profile/admin-profile.component';
import { AdminEditDialogUserComponent } from './panels/admin/admin-user/admin-edit-dialog-user/admin-edit-dialog-user.component';
import { AdminAttorneyDetailComponent } from './panels/admin/admin-attorney/admin-attorney-detail/admin-attorney-detail.component';
import { AdminLegalCaseComponent } from './panels/admin/admin-legal-case/admin-legal-case.component';
import { AdminConsultorComponent } from './panels/admin/admin-consultor/admin-consultor.component';
import { AdminAddConsultorComponent } from './panels/admin/admin-consultor/admin-add-consultor/admin-add-consultor.component';
import { AdminEditDialogConsultorComponent } from './panels/admin/admin-consultor/admin-edit-dialog-consultor/admin-edit-dialog-consultor.component';
import { AdminAddLegalCaseComponent } from './panels/admin/admin-legal-case/admin-add-legal-case/admin-add-legal-case.component';
import { AdminEditDialogLegalCaseComponent } from './panels/admin/admin-legal-case/admin-edit-dialog-legal-case/admin-edit-dialog-legal-case.component';
import { AdminInPersonRequestComponent } from './panels/admin/admin-in-person-request/admin-in-person-request.component';
import { AdminTelRequestComponent } from './panels/admin/admin-tel-request/admin-tel-request.component';
import { AdminOnlineRequestComponent } from './panels/admin/admin-online-request/admin-online-request.component';
import { AdminReplyDialogOnlineRequestComponent } from './panels/admin/admin-online-request/admin-reply-dialog-online-request/admin-reply-dialog-online-request.component';
import { AdminEditDialogOnlineRequestComponent } from './panels/admin/admin-online-request/admin-edit-dialog-online-request/admin-edit-dialog-online-request.component';

import { AttorneyDashboardComponent } from './panels/attorney/attorney-dashboard/attorney-dashboard.component';
import { AttorneyMenuComponent } from './panels/attorney/shared/attorney-menu/attorney-menu.component';
import { AttorneyProfileComponent } from './panels/attorney/attorney-profile/attorney-profile.component';
import { AttorneyWorkComponent } from './panels/attorney/attorney-work/attorney-work.component';
import { AttorneyAddWorkComponent } from './panels/attorney/attorney-work/attorney-add-work/attorney-add-work.component';
import { AttorneyEducationComponent } from './panels/attorney/attorney-education/attorney-education.component';
// tslint:disable-next-line:max-line-length
import { AttorneyAddEducationComponent } from './panels/attorney/attorney-education/attorney-add-education/attorney-add-education.component';
import { AttorneyLegalCaseComponent } from './panels/attorney/attorney-legal-case/attorney-legal-case.component';
import { AttorneyEssentialInfoComponent } from './panels/attorney/attorney-essential-info/attorney-essential-info.component';
import { AttorneyEditDialogEducationComponent } from './panels/attorney/attorney-essential-info/attorney-edit-dialog-education/attorney-edit-dialog-education.component';
import { AttorneyEditDialogWorkComponent } from './panels/attorney/attorney-essential-info/attorney-edit-dialog-work/attorney-edit-dialog-work.component';
import { AttorneyTelConsultationComponent } from './panels/attorney/attorney-tel-consultation/attorney-tel-consultation.component';


import { UserDashboardComponent } from './panels/user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './panels/user/user-profile/user-profile.component';
import { UserMenuComponent } from './panels/user/shared/user-menu/user-menu.component';
import { ConsultorDashboardComponent } from './panels/consultor/consultor-dashboard/consultor-dashboard.component';
import { ConsultorMenuComponent } from './panels/consultor/shared/consultor-menu/consultor-menu.component';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import { AdminAssignRequestDialogComponent } from './panels/admin/admin-in-person-request/admin-assign-request-dialog/admin-assign-request-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeBannerComponent,
    HomeAboutComponent,
    HomeServiceComponent,
    HomeTeamComponent,
    HomeExpertiseComponent,
    HomeContactComponent,
    HomeBlogComponent,
    FaqComponent,
    AttorneyComponent,
    AttorneyDetailComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    BlogDetailComponent,
    HomeAppComponent,
    ConsultationComponent,
    AdminDashboardComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AdminMenuComponent,
    PanelHeaderComponent,
    PanelFooterComponent,
    AdminUserComponent,
    AdminBannerComponent,
    AdminAddBannerComponent,
    AdminBlogComponent,
    AdminAddBlogComponent,
    AdminAttorneyComponent,
    AdminAddAttorneyComponent,
    AdminReplyDialogOnlineRequestComponent,
    AdminEditDialogOnlineRequestComponent,
    AdminEditDialogBlogComponent,
    AdminEditDialogBannerComponent,
    OnlineConsultationComponent,
    TelConsultationComponent,
    InPersonConsultationComponent,
    ServiceComponent,
    ServiceDetailComponent,
    AttorneyDashboardComponent,
    AttorneyMenuComponent,
    AttorneyProfileComponent,
    AttorneyWorkComponent,
    AttorneyEducationComponent,
    AttorneyLegalCaseComponent,
    AdminProfileComponent,
    AttorneyAddWorkComponent,
    AttorneyAddEducationComponent,
    AttorneyEssentialInfoComponent,
    AttorneyEditDialogEducationComponent,
    AttorneyEditDialogWorkComponent,
    AttorneyTelConsultationComponent,
    AdminEditDialogUserComponent,
    AdminAttorneyDetailComponent,
    AdminLegalCaseComponent,
    AdminConsultorComponent,
    AdminAddConsultorComponent,
    AdminEditDialogConsultorComponent,
    UserDashboardComponent,
    UserProfileComponent,
    UserMenuComponent,
    AdminAddLegalCaseComponent,
    AdminEditDialogLegalCaseComponent,
    AdminInPersonRequestComponent,
    AdminTelRequestComponent,
    AdminOnlineRequestComponent,
    InPersonSelectCategoryComponent,
    TelSelectCategoryComponent,
    TelSelectConsultorComponent,
    ConsultorDashboardComponent,
    ConsultorMenuComponent,
    AdminAssignRequestDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    NgwWowModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    SweetAlert2Module.forRoot(),
    NgxCaptchaModule,
    PrimengModule,
    HttpClientModule,
    DpDatePickerModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
