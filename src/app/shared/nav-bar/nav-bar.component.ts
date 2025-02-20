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
  showMenu: boolean = false;

  @HostListener('window:scroll', [])
  onScrollTop() {
    const currentScroll = document.documentElement.scrollTop;
    const scrollTop = window.scrollY;

    console.log('Scroll normal ' + currentScroll);
    console.log('Scroll top ' + scrollTop);
  }

  menuvisibility() {
    this.menuToggle = !this.menuToggle;
    console.log(this.menuToggle);
  }
}
