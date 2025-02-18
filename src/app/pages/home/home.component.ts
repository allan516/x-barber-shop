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
      state(
        'notScrolled',
        style({ opacity: 0, transform: 'translateY(1000px)' })
      ),
      state('scrolled', style({ opacity: 1, transform: 'translateY(0px)' })),
      transition('notScrolled <=> scrolled', [animate('1.3s ease-in-out')]),
    ]),

    trigger('scrollStateSection2', [
      state(
        'sectionNotScrolled',
        style({ opacity: 0, transform: 'translateY(1000px)' })
      ),
      state(
        'sectionScrolled',
        style({ opacity: 1, transform: 'translateY(0px)' })
      ),
      transition('sectionNotScrolled <=> sectionScrolled', [
        animate('1.3s ease-in-out'),
      ]),
    ]),

    trigger('scrollStateSection3', [
      state(
        'sectionNotScrolled',
        style({ opacity: 0, transform: 'translateY(800px)' })
      ),
      state(
        'sectionScrolled',
        style({ opacity: 1, transform: 'translateY(0px)' })
      ),
      transition('sectionNotScrolled <=> sectionScrolled', [
        animate('1.3s ease-in-out'),
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-media.component.css'],
})
export class HomeComponent implements OnInit {
  scrollState: string = 'notScrolled';
  scrollStateSection2: string = 'sectionNotScrolled';
  scrollStateSection3: string = 'sectionNotScrolled';

  // Usar HostListener para escutar o evento de scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    console.log(scrollPercentage);

    if (scrollPercentage > 6) {
      this.scrollState = 'scrolled';
    } else {
      this.scrollState = 'notScrolled';
    }
    if (scrollPercentage > 35) {
      this.scrollStateSection2 = 'sectionScrolled';
    } else {
      this.scrollStateSection2 = 'sectionNotScrolled';
    }

    if (scrollPercentage > 60) {
      this.scrollStateSection3 = 'sectionScrolled';
    } else {
      this.scrollStateSection3 = 'sectionNotScrolled';
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
