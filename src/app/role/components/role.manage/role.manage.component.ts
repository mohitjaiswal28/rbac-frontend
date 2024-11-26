import { Component } from '@angular/core';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-role-manage',
  templateUrl: './role.manage.component.html',
})

export class RoleManageComponent {
  roles: any = [];
  searchData: string = '';
  blocks: any = [
    'Name',
    'Active',
    'Permissions',
    'Created Date',
    'Action'
  ]

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.roleService.getRoles().subscribe((result: any) => {
      this.roles = result.data.roles;
    });
  }

  search(): void {
    if (this.searchData === '') {
      this.getList();
      return;
    }
    this.roleService.searchRole(this.searchData).subscribe((result: any) => {
      this.roles = result.data.roles;
    });
  }
}
