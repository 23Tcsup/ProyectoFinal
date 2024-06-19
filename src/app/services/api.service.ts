import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Galeria } from '../../galeria';
import { Testimonio } from '../../testimonio';
import { Evento } from '../../evento';
import { Contacto } from '../../contacto';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/';
  

  constructor(private http: HttpClient) {}

  getGalerias(): Observable<Galeria[]> {
    return this.http.get<Galeria[]>(`${this.apiUrl}galerias/`);
  }

  getTestimonio(): Observable<Testimonio[]> {
    return this.http.get<Testimonio[]>(`${this.apiUrl}testimonios/`)
  }

  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiUrl}eventos/`)
  }

  crearContacto(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(`${this.apiUrl}contacto/`, contacto);
  }

  

}
