import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BioComponent } from './bio/bio.component';
import { ReferencesComponent } from './references/references.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: BioComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'references', component: ReferencesComponent},
  {path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
