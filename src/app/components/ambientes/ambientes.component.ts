import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { Galeria } from '../../../galeria';

@Component({
  selector: 'app-ambientes',
  standalone: true,
  imports: [
    CommonModule, HttpClientModule
  ],
  templateUrl: './ambientes.component.html',
  styleUrls: ['./ambientes.component.css'],
 
})
export class AmbientesComponent implements OnInit {
  galerias: Galeria[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchGalerias();
  }
  
  fetchGalerias(): void {
    this.apiService.getGalerias()
      .subscribe(
        (data: Galeria[]) => {
          this.galerias = data.filter(galeria => galeria.tipo === 'ambiente');
          console.log('Galerías cargadas:', this.galerias);
        },
        (error) => {
          console.error('Error al cargar galerías:', error);
        }
      );
  }
}
