import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './modules/material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgwWowModule } from 'ngx-wow';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AdminDashboardComponent } from './panels/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './pages/account/login/login.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { ForgotPasswordComponent } from './pages/account/forgot-password/forgot-password.component';
import { AdminMenuComponent } from './panels/admin/shared/admin-menu/admin-menu.component';
import { AdminHeaderComponent } from './panels/admin/shared/admin-header/admin-header.component';
import { PanelFooterComponent } from './panels/shared/panel-footer/panel-footer.component';
import { AdminUserComponent } from './panels/admin/admin-user/admin-user.component';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {getDutchPaginatorIntl} from './dutch-paginator-intl';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminBannerComponent } from './panels/admin/admin-banner/admin-banner.component';
import { AdminAddBannerComponent } from './panels/admin/admin-banner/admin-add-banner/admin-add-banner.component';
import { AdminEditBannerComponent } from './panels/admin/admin-banner/admin-edit-banner/admin-edit-banner.component';
import { AdminBlogComponent } from './panels/admin/admin-blog/admin-blog.component';
import { AdminAddBlogComponent } from './panels/admin/admin-blog/admin-add-blog/admin-add-blog.component';
import { AdminAttorneyComponent } from './panels/admin/admin-attorney/admin-attorney.component';
import { AdminAddAttorneyComponent } from './panels/admin/admin-attorney/admin-add-attorney/admin-add-attorney.component';
import { AdminCommentComponent } from './panels/admin/admin-comment/admin-comment.component';
import { AdminReplyDialogCommentComponent } from './panels/admin/admin-comment/admin-reply-dialog-comment/admin-reply-dialog-comment.component';
import { AdminEditDialogCommentComponent } from './panels/admin/admin-comment/admin-edit-dialog-comment/admin-edit-dialog-comment.component';
import { AdminEditDialogBlogComponent } from './panels/admin/admin-blog/admin-edit-dialog-blog/admin-edit-dialog-blog.component';
import { AdminEditDialogBannerComponent } from './panels/admin/admin-banner/admin-edit-dialog-banner/admin-edit-dialog-banner.component';
import { AdminEditDialogAttorneyComponent } from './panels/admin/admin-attorney/admin-edit-dialog-attorney/admin-edit-dialog-attorney.component';
import {PrimengModule} from './modules/primeng/primeng.module';
import { ConsultationTypeComponent } from './pages/consultation/consultation-type/consultation-type.component';
import { TelConsultationComponent } from './pages/consultation/consultation-type/tel-consultation/tel-consultation.component';
import { InPersonConsultationComponent } from './pages/consultation/consultation-type/in-person-consultation/in-person-consultation.component';
import {OnlineConsultationComponent} from './pages/consultation/consultation-type/online-consultation/online-consultation.component';

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
    AdminHeaderComponent,
    PanelFooterComponent,
    AdminUserComponent,
    AdminBannerComponent,
    AdminAddBannerComponent,
    AdminEditBannerComponent,
    AdminBlogComponent,
    AdminAddBlogComponent,
    AdminAttorneyComponent,
    AdminAddAttorneyComponent,
    AdminCommentComponent,
    AdminReplyDialogCommentComponent,
    AdminEditDialogCommentComponent,
    AdminEditDialogBlogComponent,
    AdminEditDialogBannerComponent,
    AdminEditDialogAttorneyComponent,
    OnlineConsultationComponent,
    TelConsultationComponent,
    InPersonConsultationComponent,
    ConsultationTypeComponent
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
    PrimengModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
