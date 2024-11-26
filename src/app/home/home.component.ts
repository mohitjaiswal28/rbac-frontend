import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  redirectToUsers() {
    window.location.href = '/users/manage';
  }

  redirectToAbout() {
    window.location.href = '/about/project';
  }
}
