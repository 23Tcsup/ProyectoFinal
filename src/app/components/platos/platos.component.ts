import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Galeria } from '../../../galeria';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [
    CommonModule, HttpClientModule
  ],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css',
})
export class PlatosComponent implements OnInit{
  galerias: Galeria[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchGalerias();
  }
  
  fetchGalerias(): void {
    this.apiService.getGalerias()
      .subscribe(
        (data: Galeria[]) => {
          this.galerias = data.filter(galeria => galeria.tipo === 'menu');
          console.log('Galerías cargadas:', this.galerias);
        },
        (error) => {
          console.error('Error al cargar galerías:', error);
        }
      );
  }
 }
