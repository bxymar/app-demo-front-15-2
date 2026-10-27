import { Component, inject, signal } from '@angular/core';
import { ProductoListar } from '../producto-listar/producto-listar';
import { ProductoListarMovil } from '../producto-listar-movil/producto-listar-movil';
import { IsResponsive } from '../../../services/is-responsive';
import { ProductoGuardar } from '../producto-guardar/producto-guardar';

@Component({
  selector: 'app-producto',
  imports: [ProductoListar, ProductoListarMovil, ProductoGuardar],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  
  // Servicio para determinar si estamos en formato PC o Movil
  public isResponsive = inject(IsResponsive);

  // Definir una variable que permite controlar la visibilidad del formulario para registrar un nuevo producto, 

  // Si la visibilidad del formulario es verdadera, debe abrirse el componente producto guardar, si en caso contrario no esta visible (false) el producto guardar no debe visualizarse
  public formularioVisibilidad = signal(false);

  // Método para abrir el formulario (Cambiar la visibilidad) false => true
  abrirFormulario(){
    this.formularioVisibilidad.set(true);
  } 

  // Método para cerrar el formulario true => false
  cerrarFormulario(){
    this.formularioVisibilidad.set(false);
  }
}