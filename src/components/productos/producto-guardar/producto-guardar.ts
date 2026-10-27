import { Component, inject, output } from '@angular/core';
import { ProductoService } from '../../../services/producto-service';

@Component({
  selector: 'app-producto-guardar',
  imports: [],
  templateUrl: './producto-guardar.html',
  styleUrl: './producto-guardar.css',
})
export class ProductoGuardar {

  // Inyectar el servicio del producto para crear uno nuevo
  private productoServicio = inject(ProductoService); 

  // Evento para cerrar el formulario (Producto Guardar)
  public cerrar = output<void>();

  // Definir las propiedades (columnas definidas en Supabase) que necesita el formulario para registrar el nuevo producto
  public nombre: string = '';
  public precio: number = 0;
  public estado: boolean = true;

  // Método para guardar el nuevo producto
  async guardarProducto(): Promise<void>{
    
    const nuevoProducto = {
      nombre: this.nombre,
      precio: this.precio,
      estado: this.estado
    }

    const { error } = await this.productoServicio.crearProducto(nuevoProducto);

    // En caso de tener una respuesta de tipo error luego de la espera (await)
    if (error){
      console.log(`Se presento un error al crear el nuevo producto`);
      return;
    }

    // Si la condicion no se cumplio (no se retorno el error), significa que se creo correctamente el producto
    this.cerrar.emit();
  }
}