import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleManageComponent } from './components/role.manage/role.manage.component';
import { RoleAddComponent } from './components/role.add/role.add.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/manage'
  },
  {
    path: 'manage',
    component: RoleManageComponent
  },
  {
    path: 'add',
    component: RoleAddComponent
  },
  {
    path: 'edit/:roleId',
    component: RoleAddComponent
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RoleRoutingModule { }
