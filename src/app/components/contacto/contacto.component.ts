import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ColorDirective } from '../../color.directive';
import { Contacto } from '../../../contacto';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule, ColorDirective, HttpClientModule, FormsModule
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  
})
export class ContactoComponent { 
  colorValue: string = 'blue';
  contacto: Contacto = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };
  enviado = false;
  error = '';

  constructor(private apiService: ApiService) {}

  enviarFormulario(): void {
    this.apiService.crearContacto(this.contacto).subscribe(
      response => {
        console.log('Contacto guardado correctamente:', response);
        this.enviado = true;
        this.contacto = { nombre: '', email: '', asunto: '', mensaje: '' };
      },
      error => {
        console.error('Error al guardar el contacto:', error);
        this.error = 'Error al enviar el formulario. Inténtalo de nuevo más tarde.';
      }
    );
  }
}
