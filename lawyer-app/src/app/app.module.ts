import { FlexModule } from './modules/flex/flex.module';
import { NgxBootstrapModule } from './modules/ngx-bootstrap/ngx-bootstrap.module';
import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './pages/home/home.component';
import { HomeSliderComponent } from './pages/home/home-slider/home-slider.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HomeNewsComponent } from './pages/home/home-news/home-news.component';
import { HomeServiceComponent } from './pages/home/home-service/home-service.component';
import { HomeLawyerComponent } from './pages/home/home-lawyer/home-lawyer.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { HomeAboutComponent } from './pages/home/home-about/home-about.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { HomeContactComponent } from './pages/home/home-contact/home-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSliderComponent,
    FooterComponent,
    HomeNewsComponent,
    HomeServiceComponent,
    HomeLawyerComponent,
    HomeAboutComponent,
    HeaderComponent,
    HomeContactComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgxBootstrapModule,
        FlexModule,
        CarouselModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
