import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { SliderComponent } from "./components/slider/slider.component";
import { InfoComponent } from './components/info/info.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { FooterComponent } from './components/footer/footer.component';
import { ColorDirective } from './color.directive';
import { TextPipe } from './text.pipe';
import { FormsModule } from '@angular/forms'; 


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, 
    CommonModule, 
    NavbarComponent, 
    CarruselComponent, 
    SliderComponent, 
    
    FooterComponent,
    HttpClientModule,
    ColorDirective,
    FormsModule
    ]
})
export class AppComponent {
  
}
