import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResumeComponent } from './resume/resume.component';
import { GiHomeComponent } from './gi/gi-home/gi-home.component';
import { Assn1Component } from './gi/assn1/assn1.component';
import { GiHeaderComponent } from './gi/gi-header/gi-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
    GiHomeComponent,
    Assn1Component,
    GiHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
