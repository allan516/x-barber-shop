import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-media.component.css'],
})
export class HomeComponent {}
