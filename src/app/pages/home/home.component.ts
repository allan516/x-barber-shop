import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

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
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-media.component.css'],
})
export class HomeComponent implements OnInit {
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
