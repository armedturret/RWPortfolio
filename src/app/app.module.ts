import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

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
import { Assn2Component } from './gi/assn2/assn2.component';
import { Assn3Component } from './gi/assn3/assn3.component';
import { AdvancedKdtreesComponent } from './gi/advanced-kdtrees/advanced-kdtrees.component';
import { Assn4Component } from './gi/assn4/assn4.component';
import { Assn5Component } from './gi/assn5/assn5.component';
import { AdvancedPhotonMapComponent } from './gi/advanced-photon-map/advanced-photon-map.component';

@NgModule({ declarations: [AppComponent], bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule, BioComponent,
        ProjectsComponent,
        HeaderComponent,
        FooterComponent,
        ResumeComponent,
        GiHomeComponent,
        Assn1Component,
        GiHeaderComponent,
        Assn2Component,
        Assn3Component,
        AdvancedKdtreesComponent,
        Assn4Component,
        Assn5Component,
        AdvancedPhotonMapComponent], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
