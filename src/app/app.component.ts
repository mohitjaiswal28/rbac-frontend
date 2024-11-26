import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isCollapsed = false;
  isLoading$ = this.loadingService.isLoading$;
  SIDENAV_ITEMS: any = [
    {
      label: 'Home',
      iconName: 'home',
      link: '/home',
      child: []
    },
    {
      label: 'About',
      iconName: 'info-circle',
      link: '/about',
      child: [
        { label: 'Project', link: '/about/project', iconName: 'project' },
        { label: 'Developer', link: '/about/developer', iconName: 'code' },
        { label: 'Tech Stack Used', link: '/about/tech', iconName: 'tool' }
      ]
    },
    {
      label: 'Users',
      iconName: 'user',
      link: '/users',
      child: [
        { label: 'Manage Users', link: '/users/manage', iconName: 'team' },
        { label: 'Add User', link: '/users/add', iconName: 'user-add' }
      ]
    },
    {
      label: 'Roles',
      iconName: 'key',
      link: '/roles',
      child: [
        { label: 'Manage Roles', link: '/roles/manage', iconName: 'lock' },
        { label: 'Add Role', link: '/roles/add', iconName: 'plus-square' }
      ]
    },
  ];

  constructor(private loadingService: LoadingService) { }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
