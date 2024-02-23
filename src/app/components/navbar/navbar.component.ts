import { Component } from '@angular/core';
import { SidebarServiceService } from '../../services/sidebar-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private sidebarService: SidebarServiceService) { }

  onClick(): void {
    this.sidebarService.toggleSidebar();
  }

}
