import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Testimonio } from '../../../testimonio';
import { HttpClientModule } from '@angular/common/http';
import { ColorDirective } from '../../color.directive';
import { TextPipe } from '../../text.pipe';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [
    CommonModule, HttpClientModule, ColorDirective, TextPipe
  ],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css',
})
export class TestimoniosComponent implements OnInit{ 
  
  colorValue: string = ' ';
  testimonios: Testimonio[] = [];
  currentIndex: number = 0;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.obtenerTestimonio();
  }
  
  obtenerTestimonio(): void {
    this.apiService.getTestimonio()
      .subscribe(
        (data: Testimonio[]) => {
          this.testimonios = data;
          console.log('Testimonios cargados:', this.testimonios);
        },
        (error) => {
          console.error('Error al cargar testimonios:', error);
        }
      );
  }

  nextTestimonio(): void {
    if (this.testimonios.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.testimonios.length;
    }
  }

  prevTestimonio(): void {
    if (this.testimonios.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.testimonios.length) % this.testimonios.length;
    }
  }

  

}
