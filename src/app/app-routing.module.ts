import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { AboutComponent } from "./about/about.component";
import { ResumeComponent } from "./resume/resume.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProjectsComponent } from "./projects/projects.component";
const routes: Routes =[
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  {path: 'home', component: HomepageComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'resume', component: ResumeComponent},
  { path: 'about', component: AboutComponent },
  {path:'**', component: NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
