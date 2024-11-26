import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  isSubmenuOpen = false;

  constructor(private router: Router) { }

  toggleArrow(isOpen: boolean): void {
    this.isSubmenuOpen = isOpen;
  }

  isSelected(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
