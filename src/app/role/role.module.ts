import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from '../ngzorro.module';
import { SharedModule } from '../shared/shared.module';
import { RoleRoutingModule } from './role-routing.module';
import { RoleManageComponent } from './components/role.manage/role.manage.component';
import { RoleAddComponent } from './components/role.add/role.add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RoleManageComponent,
    RoleAddComponent
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgZorroModule,
    CommonModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
