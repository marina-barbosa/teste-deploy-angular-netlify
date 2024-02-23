import { Component } from '@angular/core';
import { CentralComponent } from '../../components/central/central.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, CentralComponent, FooterComponent, SidebarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
