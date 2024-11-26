import { Component } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { NzMessageService } from 'ng-zorro-antd/message';

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

  constructor(
    private roleService: RoleService,
    private message: NzMessageService,
  ) { }

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

  confirmDelete(item: any): void {
    this.roleService.deleteRole(item._id).subscribe({
      next: (res: any) => {
        this.message.success('Role deleted successfully');
        this.getList();
      },
      error: (err: any) => this.message.error('Failed to delete role: ' + err.message),
    });
  }
}
