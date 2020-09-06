import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './modules/material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgwWowModule } from 'ngx-wow';

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
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
