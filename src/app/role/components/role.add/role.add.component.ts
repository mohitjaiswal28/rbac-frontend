import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../../services/role.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-add',
  templateUrl: './role.add.component.html',
})

export class RoleAddComponent {
  roleId: string = '';
  operation = 'Add';
  btnName = 'Add Role';
  roleForm!: FormGroup;
  permissions: any[] = [
    {
      name: 'View Users',
      value: 'View Users'
    },
    {
      name: 'Create Users',
      value: 'Create Users'
    },
    {
      name: 'Edit Users',
      value: 'Edit Users'
    },
    {
      name: 'Delete Users',
      value: 'Delete Users'
    },
    {
      name: 'View Roles',
      value: 'View Roles'
    },
    {
      name: 'Create Roles',
      value: 'Create Roles'
    },
    {
      name: 'Edit Roles',
      value: 'Edit Roles'
    },
    {
      name: 'Delete Roles',
      value: 'Delete Roles'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private message: NzMessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.roleId = this.route.snapshot.paramMap.get('roleId') || '';

    if (this.roleId) {
      this.operation = 'Edit';
      this.btnName = 'Update Role';
      this.roleService.getRoleById(this.roleId).subscribe({
        next: (res: any) => {
          this.roleForm.patchValue(res.data.role);
        },
        error: (err: any) => this.message.error('Failed to fetch role: ' + err.message),
      });
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.roleForm = this.fb.group({
      name: [
        { value: '', disabled: this.operation === 'Edit' },
        [Validators.required, Validators.minLength(3)],
      ],
      role: ['', [Validators.required, Validators.minLength(3)]],
      is_active: [true],
      permissions: [[], Validators.required],
      remarks: ['']
    });
  }

  submitForm(): void {
    if (this.roleForm.invalid) {
      Object.values(this.roleForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }

    switch (this.operation) {
      case 'Add':
        this.roleService.createRole(this.roleForm.value).subscribe({
          next: () => {
            this.roleForm.reset();
            this.message.success('Role created successfully');
          },
          error: (err) => {
            this.message.error('Failed to create role: ' + err.message);
          }
        });
        break;

      case 'Edit':
        this.roleService.updateRole(this.roleId, this.roleForm.value).subscribe({
          next: () => {
            this.router.navigate(['/roles/manage']);
            this.message.success('Role updated successfully');
          },
          error: (err) => {
            this.message.error('Failed to update role: ' + err.message);
          }
        });
        break;
    }
  }

  cancel(): void {
    window.location.reload();
  }

  getTitle(): string {
    return this.operation === 'Add' ? 'Add Role' : 'Update Role';
  }
}