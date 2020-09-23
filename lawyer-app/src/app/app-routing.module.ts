import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {FaqComponent} from './pages/faq/faq.component';
import {AttorneyComponent} from './pages/attorney/attorney.component';
import {AttorneyDetailComponent} from './pages/attorney/attorney-detail/attorney-detail.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import {BlogDetailComponent} from './pages/blog/blog-detail/blog-detail.component';
import {BlogComponent} from './pages/blog/blog.component';
import {ConsultationComponent} from './pages/consultation/consultation.component';
import {TelConsultationComponent} from './pages/consultation/tel-consultation/tel-consultation.component';
import {OnlineConsultationComponent} from './pages/consultation/online-consultation/online-consultation.component';
import {InPersonConsultationComponent} from './pages/consultation/in-person-consultation/in-person-consultation.component';
import {ServiceComponent} from './pages/service/service.component';
import {ServiceDetailComponent} from './pages/service/service-detail/service-detail.component';

import {LoginComponent} from './pages/account/login/login.component';
import {ForgotPasswordComponent} from './pages/account/forgot-password/forgot-password.component';
import {RegisterComponent} from './pages/account/register/register.component';

import {AdminDashboardComponent} from './panels/admin/admin-dashboard/admin-dashboard.component';
import {AdminBannerComponent} from './panels/admin/admin-banner/admin-banner.component';
import {AdminAddBannerComponent} from './panels/admin/admin-banner/admin-add-banner/admin-add-banner.component';
import {AdminBlogComponent} from './panels/admin/admin-blog/admin-blog.component';
import {AdminAddBlogComponent} from './panels/admin/admin-blog/admin-add-blog/admin-add-blog.component';
import {AdminAttorneyComponent} from './panels/admin/admin-attorney/admin-attorney.component';
import {AdminAddAttorneyComponent} from './panels/admin/admin-attorney/admin-add-attorney/admin-add-attorney.component';
import {AdminUserComponent} from './panels/admin/admin-user/admin-user.component';
import {AdminCommentComponent} from './panels/admin/admin-comment/admin-comment.component';

import {AttorneyDashboardComponent} from './panels/attorney/attorney-dashboard/attorney-dashboard.component';
import {AttorneyWorkComponent} from './panels/attorney/attorney-work/attorney-work.component';
import {AttorneyAddWorkComponent} from './panels/attorney/attorney-work/attorney-add-work/attorney-add-work.component';
import {AttorneyProfileComponent} from './panels/attorney/attorney-profile/attorney-profile.component';
import {AttorneyEducationComponent} from './panels/attorney/attorney-education/attorney-education.component';
import {AttorneyAddEducationComponent} from './panels/attorney/attorney-education/attorney-add-education/attorney-add-education.component';
import {AttorneyLegalCaseComponent} from './panels/attorney/attorney-legal-case/attorney-legal-case.component';
import {AttorneyTelConsultationComponent} from './panels/attorney/attorney-tel-consultation/attorney-tel-consultation.component';
import {AdminProfileComponent} from './panels/admin/admin-profile/admin-profile.component';
import {AttorneyEssentialInfoComponent} from './panels/attorney/attorney-essential-info/attorney-essential-info.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'faq' , component : FaqComponent},
  {path : 'attorney' , component : AttorneyComponent},
  {path : 'attorney-detail' , component : AttorneyDetailComponent},
  {path : 'service' , component : ServiceComponent},
  {path : 'service-detail' , component : ServiceDetailComponent},
  {path : 'blog' , component : BlogComponent},
  {path : 'blog-detail' , component : BlogDetailComponent},
  {path : 'consultation' , component : ConsultationComponent},
  {path : 'online-consultation' , component : OnlineConsultationComponent},
  {path : 'tel-consultation' , component : TelConsultationComponent},
  {path : 'in-person-consultation' , component : InPersonConsultationComponent},

  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'forgot-password' , component : ForgotPasswordComponent},

  {path : 'admin/dashboard' , component : AdminDashboardComponent},
  {path : 'admin/profile' , component : AdminProfileComponent},
  {path : 'admin/banner' , component : AdminBannerComponent},
  {path : 'admin/add-banner' , component : AdminAddBannerComponent},
  {path : 'admin/blog' , component : AdminBlogComponent},
  {path : 'admin/add-blog' , component : AdminAddBlogComponent},
  {path : 'admin/attorney' , component : AdminAttorneyComponent},
  {path : 'admin/add-attorney' , component : AdminAddAttorneyComponent},
  {path : 'admin/user' , component : AdminUserComponent},
  {path : 'admin/comment' , component : AdminCommentComponent},

  {path : 'attorney/dashboard' , component : AttorneyDashboardComponent},
  {path : 'attorney/info' , component : AttorneyEssentialInfoComponent},
  {path : 'attorney/profile' , component : AttorneyProfileComponent},
  {path : 'attorney/work' , component : AttorneyWorkComponent},
  {path : 'attorney/add-work' , component : AttorneyAddWorkComponent},
  {path : 'attorney/education' , component : AttorneyEducationComponent},
  {path : 'attorney/add-education' , component : AttorneyAddEducationComponent},
  {path : 'attorney/legal-case' , component : AttorneyLegalCaseComponent},
  {path : 'attorney/tel-consultation' , component : AttorneyTelConsultationComponent},

  {path : '**' , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
