import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  private supabase: SupabaseClient;

  // Tradicionalmente para realizar peticiones http a un servidor se usa los metodos predifinidos del protocolo http:
  // - Obtener datos de un servidor: get
  // - Crear un nuevo dato y dicho dato hacerlo llegar a un servidor: post
  // - Actualizar un dato: put
  // - Eliminar un dato: delete

  constructor(){
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // Las consultas (funciones) que se va realizar a supabase
  public obtenerProductos(){

    // Consulta SQL adaptada
    // Cuando se agrega el * en la consulta (select) le indicamos que traiga todas las columnas, en caso de que se requiera traer solo ciertas columnas se lo puede realizar de la siguiente forma:

    // En esta consulta solamente estamos solicitando obtener los datos de las columnas id y nombre
    // return this.supabase.from('productos').select('id, nombre');


    // Usuarios => nombre de usuario y contraseña
    return this.supabase.from('productos').select('*');
    
    // Peticion http
    //return this.http.get<any>(`http://localhost:8080/api/productos/obtener`);
  }

  // Servicio para crear un nuevo producto
  public crearProducto( producto: {
    nombre: string,
    precio: number,
    estado: boolean
  }){
    // Mendiante el insert estamos creando un nuevo producto
    return this.supabase.from('productos').insert(producto);
  }
}