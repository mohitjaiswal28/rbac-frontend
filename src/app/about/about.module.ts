import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from '../ngzorro.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutProjectComponent } from './components/about.project/about.project.component';
import { AboutDeveloperComponent } from './components/about.developer/about.developer.component';
import { AboutTechComponent } from './components/about.tech/about.tech.component';

@NgModule({
  declarations: [
    AboutProjectComponent,
    AboutDeveloperComponent,
    AboutTechComponent,
  ],

  imports: [
    NgZorroModule,
    CommonModule,
    AboutRoutingModule
  ]
})

export class AboutModule { }
