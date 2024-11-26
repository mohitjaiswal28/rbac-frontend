import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user.manage.component.html',
})

export class UserManageComponent {
  users: any = [];
  searchData: string = '';
  blocks: any = [
    'Name',
    'Email',
    'Phone',
    'DOB',
    'Role',
    'Status',
    'Created Date',
    'Action'
  ]

  constructor(
    private userService: UserService,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data.data.users;
    });
  }

  search(): void {
    if (this.searchData === '') {
      this.getList();
      return;
    }
    this.userService.searchUser(this.searchData).subscribe((result: any) => {
      this.users = result.data.users;
    });
  }

  confirmDelete(item: any): void {
    this.userService.deleteUser(item._id).subscribe({
      next: (res: any) => {
        this.message.success('User deleted successfully');
        this.getList();
      },
      error: (err: any) => this.message.error('Failed to delete user: ' + err.message),
    });
  }
}
