import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { GiHomeComponent } from './gi/gi-home/gi-home.component';
import { Assn1Component } from './gi/assn1/assn1.component';
import { Assn2Component } from './gi/assn2/assn2.component';
import { Assn3Component } from './gi/assn3/assn3.component';
import { AdvancedKdtreesComponent } from './gi/advanced-kdtrees/advanced-kdtrees.component';
import { Assn4Component } from './gi/assn4/assn4.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: BioComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'csci711', component: GiHomeComponent},
  {path: 'csci711/assn1', component: Assn1Component},
  {path: 'csci711/assn2', component: Assn2Component},
  {path: 'csci711/assn3', component: Assn3Component},
  {path: 'csci711/advanced-kd', component: AdvancedKdtreesComponent},
  {path: 'csci711/assn4', component: Assn4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
