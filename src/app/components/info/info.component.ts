import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ColorDirective } from '../../color.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    CommonModule, ColorDirective
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent { 
  colorValue: string = '#ff841';

  constructor(private router: Router){}
  
  navigateTo(): void {
    this.router.navigate(['/nosotros']);
  }
}
