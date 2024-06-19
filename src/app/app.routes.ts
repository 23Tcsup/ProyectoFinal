import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AmbientesComponent } from './components/ambientes/ambientes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PlatosComponent } from './components/platos/platos.component';
import { EventoComponent } from './components/evento/evento.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'ambientes', component: AmbientesComponent},
    { path: 'eventos', component: EventoComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'menu', component: PlatosComponent},


];
