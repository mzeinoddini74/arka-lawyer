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
import {LoginComponent} from './pages/account/login/login.component';
import {ForgotPasswordComponent} from './pages/account/forgot-password/forgot-password.component';
import {RegisterComponent} from './pages/account/register/register.component';
import {AdminDashboardComponent} from './panels/admin/admin-dashboard/admin-dashboard.component';
import { AdminBannerComponent } from './panels/admin/admin-banner/admin-banner.component';
import {AdminAddBannerComponent} from './panels/admin/admin-banner/admin-add-banner/admin-add-banner.component';
import {AdminEditBannerComponent} from './panels/admin/admin-banner/admin-edit-banner/admin-edit-banner.component';
import {AdminBlogComponent} from './panels/admin/admin-blog/admin-blog.component';
import {AdminAddBlogComponent} from './panels/admin/admin-blog/admin-add-blog/admin-add-blog.component';
import {AdminAttorneyComponent} from './panels/admin/admin-attorney/admin-attorney.component';
import {AdminAddAttorneyComponent} from './panels/admin/admin-attorney/admin-add-attorney/admin-add-attorney.component';
import {AdminUserComponent} from './panels/admin/admin-user/admin-user.component';
import {AdminCommentComponent} from './panels/admin/admin-comment/admin-comment.component';
import {TelConsultationComponent} from './pages/consultation/consultation-type/tel-consultation/tel-consultation.component';
import {OnlineConsultationComponent} from './pages/consultation/consultation-type/online-consultation/online-consultation.component';
import {InPersonConsultationComponent} from './pages/consultation/consultation-type/in-person-consultation/in-person-consultation.component';
import {ConsultationTypeComponent} from './pages/consultation/consultation-type/consultation-type.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'faq' , component : FaqComponent},
  {path : 'attorney' , component : AttorneyComponent},
  {path : 'attorney-detail' , component : AttorneyDetailComponent},
  {path : 'blog' , component : BlogComponent},
  {path : 'blog-detail' , component : BlogDetailComponent},
  {path : 'consultation' , component : ConsultationComponent},
  {path : 'consultation-type' , component : ConsultationTypeComponent},
  {path : 'online-consultation' , component : OnlineConsultationComponent},
  {path : 'tel-consultation' , component : TelConsultationComponent},
  {path : 'in-person-consultation' , component : InPersonConsultationComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'forgot-password' , component : ForgotPasswordComponent},
  {path : 'admin/dashboard' , component : AdminDashboardComponent},
  {path : 'admin/banner' , component : AdminBannerComponent},
  {path : 'admin/add-banner' , component : AdminAddBannerComponent},
  {path : 'admin/edit-banner' , component : AdminEditBannerComponent},
  {path : 'admin/blog' , component : AdminBlogComponent},
  {path : 'admin/add-blog' , component : AdminAddBlogComponent},
  {path : 'admin/attorney' , component : AdminAttorneyComponent},
  {path : 'admin/add-attorney' , component : AdminAddAttorneyComponent},
  {path : 'admin/user' , component : AdminUserComponent},
  {path : 'admin/comment' , component : AdminCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
