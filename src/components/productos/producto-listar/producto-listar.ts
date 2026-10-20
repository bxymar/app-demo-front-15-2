import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto-service';

@Component({
  selector: 'app-producto-listar',
  imports: [],
  templateUrl: './producto-listar.html',
  styleUrl: './producto-listar.css',
})
export class ProductoListar implements OnInit {

  // En este componente se listara todos los productos obtenidos de Supabase en formato tabla

  // Para obtener los producto, primeramente vamos a importar (inyectar) el servicio donde se encuetra la consulta
  private productoServicio = inject(ProductoService);

  // Los datos que se obtenga al realizar la consulta se debe guardar en algun lado, para ello creamos una array para almacenar la informacion obtenida
  public listaProductos: any[] = [];

  // Cuando el componente (ProductoListar) se inicialice o se cargue internamente tambien se deberia cargar todos los datos.
  ngOnInit(): void {
    this.cargarProductos();
  }

  // Funcion que se encargue de obtener todos los datos (productos) desde el servicio previamente importado (inyectado).
  
  /*Para obtener datos desde un Backend hay dos formas:
    1. Peticiones HTTP: Observables => Por defecto son Asíncronos
    2. Realizando consultas directas a una Base de Datos (Supabase) => Promises no son Asíncronos

  Para que una Promesa sea asincrona tenemos que usar el async (Para especificar si una funcion o variable es asincrona) y await (para esperar la respuesta de la consulta).
  */

  // Promesa (Promise): 
  // => Cumplir algo que vamos a realizar.
  // => Si decimos algo lo tenemos que hacer. 
  async cargarProductos(){
    // Cuando se realice la petición a la base de datos (supabase) este como ya es una promesa, dicha promesa terminará en dos resultados
    // await => "esperar"
    const { data, error} = await this.productoServicio.obtenerProductos();

    // Verificamos el resultado de la promesa
    if (error){
      console.error(`No se pudo obtener los datos, verificar`);
    }else{
      console.log(data);
      this.listaProductos = data;
    }
  }
}