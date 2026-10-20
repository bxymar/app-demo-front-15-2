import { Component, inject } from '@angular/core';
import { ProductoListar } from '../producto-listar/producto-listar';
import { ProductoListarMovil } from '../producto-listar-movil/producto-listar-movil';
import { IsResponsive } from '../../../services/is-responsive';

@Component({
  selector: 'app-producto',
  imports: [ProductoListar, ProductoListarMovil],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  
  // Servicio para determinar si estamos en formato PC o Movil
  public isResponsive = inject(IsResponsive);

  
}