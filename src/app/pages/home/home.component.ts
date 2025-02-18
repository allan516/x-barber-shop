import { Component, HostListener, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
    CarouselModule,
    ButtonModule,
    TagModule,
  ],
  animations: [
    trigger('scrollState', [
      state('notScrolled', style({ opacity: 0, transform: 'translateX(0)' })),
      state('scrolled', style({ opacity: 1, transform: 'translateX(0px)' })),
      transition('notScrolled <=> scrolled', [animate('0.8s ease-in-out')]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-media.component.css'],
})
export class HomeComponent implements OnInit {
  scrollState: string = 'notScrolled';

  // Usar HostListener para escutar o evento de scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    if (scrollPercentage > 22) {
      this.scrollState = 'scrolled';
    } else {
      this.scrollState = 'notScrolled';
    }
  }

  products: any[] = [
    {
      image: '../../../assets/icons/lamina.png',
      title: 'Barba Tradicional',
      paragraph: 'Alinhada com técnica, garantindo um visual impecável.',
      price: '40',
    },
    {
      image: '../../../assets/icons/maquina.png',
      title: 'Degradê Premium',
      paragraph:
        ' Transições suaves e bem definidas para um look moderno e impecável.',
      price: '50',
    },
    {
      image: '../../../assets/icons/tesoura.png',
      title: 'Corte Clássico',
      paragraph:
        'Um corte atemporal, perfeito para qualquer ocasião. Feito com precisão e estilo.',
      price: '40',
    },
  ];

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
