import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { NgZorroModule } from '../ngzorro.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page.not.found/page.not.found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],

  imports: [
    CommonModule,
    CoreRoutingModule,
    NgZorroModule
  ],

  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})

export class CoreModule { }
