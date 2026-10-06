import { Component, signal } from '@angular/core';
import { SidebarLayout } from '../sidebar-layout/sidebar-layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movil-layout',
  imports: [SidebarLayout, RouterOutlet],
  templateUrl: './movil-layout.html',
  styleUrl: './movil-layout.css',
})
export class MovilLayout {

  public menuAbierto = signal(false);

  // Método para que alterne el valor del menu abierto
  public alternarMenu(): void{
    this.menuAbierto.update(valor => !valor);
  }
}