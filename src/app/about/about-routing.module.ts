import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutProjectComponent } from './components/about.project/about.project.component';
import { AboutDeveloperComponent } from './components/about.developer/about.developer.component';
import { AboutTechComponent } from './components/about.tech/about.tech.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/project'
  },
  {
    path: 'project',
    component: AboutProjectComponent
  },
  {
    path: 'developer',
    component: AboutDeveloperComponent
  },
  {
    path: 'tech',
    component: AboutTechComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AboutRoutingModule { }
