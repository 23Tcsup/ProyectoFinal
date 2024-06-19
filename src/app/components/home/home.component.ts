import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CarruselComponent } from '../carrusel/carrusel.component';
import { InfoComponent } from "../info/info.component";
import { TestimoniosComponent } from "../testimonios/testimonios.component";
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Galeria } from '../../../galeria';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        CarruselComponent,
        InfoComponent,
        TestimoniosComponent
    ]
})
export class HomeComponent { 
    imagesToShow: Galeria[] = [];

    constructor(private router: Router, private apiService: ApiService) {}

    ngOnInit(): void {
        this.fetchImages();
    }

    fetchImages(): void {
        this.apiService.getGalerias()
            .subscribe(
                (data: Galeria[]) => {
                    this.imagesToShow = data.filter(galeria => galeria.tipo === 'menu').slice(0, 6);
                    console.log('Imágenes cargadas:', this.imagesToShow);
                },
                (error) => {
                    console.error('Error al cargar imágenes:', error);
                }
            );
    }

    navigateToPlatos(): void {
        this.router.navigate(['/menu']);
    }
}