import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from '../ngzorro.module';
import { UserRoutingModule } from './user-routing.module';
import { UserManageComponent } from './components/user.manage/user.manage.component';
import { UserAddComponent } from './components/user.add/user.add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserManageComponent,
    UserAddComponent
  ],

  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    CommonModule,
    UserRoutingModule
  ]
})

export class UserModule { }
