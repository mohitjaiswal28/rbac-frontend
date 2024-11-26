import { Component } from '@angular/core';

@Component({
  selector: 'app-about-tech',
  templateUrl: './about.tech.component.html',
  styleUrl: './about.tech.component.css'
})

export class AboutTechComponent {
  redirectToGitHubRepo() {
    window.open('https://github.com/mohitjaiswal28?tab=repositories', '_blank');
  }
}
