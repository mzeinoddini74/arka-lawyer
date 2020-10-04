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
import {AdminAttorneyDetailComponent} from './panels/admin/admin-attorney/admin-attorney-detail/admin-attorney-detail.component';
import {AdminLegalCaseComponent} from './panels/admin/admin-legal-case/admin-legal-case.component';
import {AdminAddConsultorComponent} from './panels/admin/admin-consultor/admin-add-consultor/admin-add-consultor.component';
import {AdminConsultorComponent} from './panels/admin/admin-consultor/admin-consultor.component';
import {AdminInPersonRequestComponent} from './panels/admin/admin-in-person-request/admin-in-person-request.component';
import {AdminAddLegalCaseComponent} from './panels/admin/admin-legal-case/admin-add-legal-case/admin-add-legal-case.component';
import {AdminOnlineRequestComponent} from './panels/admin/admin-online-request/admin-online-request.component';
import {AdminTelRequestComponent} from './panels/admin/admin-tel-request/admin-tel-request.component';
import {UserDashboardComponent} from './panels/user/user-dashboard/user-dashboard.component';
import {UserProfileComponent} from './panels/user/user-profile/user-profile.component';
import {InPersonSelectCategoryComponent} from './pages/consultation/in-person-consultation/in-person-select-category/in-person-select-category.component';
import {TelSelectCategoryComponent} from './pages/consultation/tel-consultation/tel-select-category/tel-select-category.component';
import {TelSelectConsultorComponent} from './pages/consultation/tel-consultation/tel-select-consultor/tel-select-consultor.component';

import {ConsultorDashboardComponent} from './panels/consultor/consultor-dashboard/consultor-dashboard.component';

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
  {path : 'tel-select-category' , component : TelSelectCategoryComponent},
  {path : 'tel-select-consultor' , component : TelSelectConsultorComponent},
  {path : 'in-person-consultation' , component : InPersonConsultationComponent},
  {path : 'in-person-select-category' , component : InPersonSelectCategoryComponent},

  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'forgot-password' , component : ForgotPasswordComponent},

  {path : 'admin/dashboard' , component : AdminDashboardComponent},
  {path : 'admin' , component : AdminDashboardComponent},
  {path : 'admin/profile' , component : AdminProfileComponent},
  {path : 'admin/banner' , component : AdminBannerComponent},
  {path : 'admin/add-banner' , component : AdminAddBannerComponent},
  {path : 'admin/blog' , component : AdminBlogComponent},
  {path : 'admin/add-blog' , component : AdminAddBlogComponent},
  {path : 'admin/attorney' , component : AdminAttorneyComponent},
  {path : 'admin/add-attorney' , component : AdminAddAttorneyComponent},
  {path : 'admin/attorney-detail' , component : AdminAttorneyDetailComponent},
  {path : 'admin/user' , component : AdminUserComponent},
  {path : 'admin/legal-case' , component : AdminLegalCaseComponent},
  {path : 'admin/add-legal-case' , component : AdminAddLegalCaseComponent},
  {path : 'admin/online-request' , component : AdminOnlineRequestComponent},
  {path : 'admin/tel-request' , component : AdminTelRequestComponent},
  {path : 'admin/in-person-request' , component : AdminInPersonRequestComponent},
  {path : 'admin/consultor' , component : AdminConsultorComponent},
  {path : 'admin/add-consultor' , component : AdminAddConsultorComponent},

  {path : 'attorney/dashboard' , component : AttorneyDashboardComponent},
  {path : 'attorney' , component : AttorneyDashboardComponent},
  {path : 'attorney/info' , component : AttorneyEssentialInfoComponent},
  {path : 'attorney/profile' , component : AttorneyProfileComponent},
  {path : 'attorney/work' , component : AttorneyWorkComponent},
  {path : 'attorney/add-work' , component : AttorneyAddWorkComponent},
  {path : 'attorney/education' , component : AttorneyEducationComponent},
  {path : 'attorney/add-education' , component : AttorneyAddEducationComponent},
  {path : 'attorney/legal-case' , component : AttorneyLegalCaseComponent},
  {path : 'attorney/tel-consultation' , component : AttorneyTelConsultationComponent},

  {path : 'user/dashboard' , component : UserDashboardComponent},
  {path : 'user' , component : UserDashboardComponent},
  {path : 'user/profile' , component : UserProfileComponent},

  {path : 'consultor/dashboard' , component : ConsultorDashboardComponent},
  {path : 'consultor' , component : ConsultorDashboardComponent},

  {path : '**' , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
