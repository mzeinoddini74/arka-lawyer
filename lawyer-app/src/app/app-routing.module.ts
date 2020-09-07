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
import {AdminDashboardComponent} from './panels/admin/admin-dashboard/admin-dashboard.component';
import {LoginComponent} from './pages/account/login/login.component';
import {ForgotPasswordComponent} from './pages/account/forgot-password/forgot-password.component';
import {RegisterComponent} from './pages/account/register/register.component';

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
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'forgot-password' , component : ForgotPasswordComponent},
  {path : 'admin/dashboard' , component : AdminDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
