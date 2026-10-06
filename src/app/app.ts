import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopLayout } from '../layouts/desktop-layout/desktop-layout';
import { MovilLayout } from '../layouts/movil-layout/movil-layout';
import { IsResponsive } from '../services/is-responsive';

@Component({
  selector: 'app-root',
  imports: [DesktopLayout, MovilLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  public responsivoService = inject(IsResponsive);
}