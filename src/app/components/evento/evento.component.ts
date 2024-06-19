import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Evento } from '../../../evento';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ColorDirective } from '../../color.directive';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [
    CommonModule, HttpClientModule, ColorDirective
  ],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css',
})
export class EventoComponent implements OnInit { 
  colorValue: string = ' ';
  eventos: Evento[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.fetchEventos();
  }
 
  fetchEventos(): void {
    this.apiService.getEventos()
      .subscribe(
        (data: Evento[]) => {
          this.eventos = data;
          console.log('Eventos cargadas:', this.eventos);
        },
        (error) => {
          console.error('Error al cargar galerías:', error);
        }
      );
  }


}
