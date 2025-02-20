import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  menuToggle: boolean = false;
  top: boolean = false;

  @HostListener('window:scroll', [])
  buttonTop() {
    const currentScroll = document.documentElement.scrollTop;

    currentScroll > 1400 ? (this.top = true) : (this.top = false);
  }

  menuvisibility() {
    this.menuToggle = !this.menuToggle;
    console.log(this.menuToggle);
  }
}
