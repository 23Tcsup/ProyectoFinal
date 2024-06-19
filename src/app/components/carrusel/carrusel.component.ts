import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';
import { TextPipe } from '../../text.pipe';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [
    CommonModule, CarouselModule, TextPipe
  ],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css',
 
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class CarruselComponent { }
