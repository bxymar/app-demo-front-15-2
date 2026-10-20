import { Component, inject } from '@angular/core';
import { ProductoService } from '../../../services/producto-service';

@Component({
  selector: 'app-producto-listar',
  imports: [],
  templateUrl: './producto-listar.html',
  styleUrl: './producto-listar.css',
})
export class ProductoListar {

  // En este componente se listara todos los productos obtenidos de Supabase en formato tabla

  // Para obtener los producto, primeramente vamos a importar (inyectar) el servicio donde se encuetra la consulta
  private productoServicio = inject(ProductoService);

  // Los datos que se obtenga al realizar la consulta se debe guardar en algun lado, para ello creamos una array para almacenar la informacion obtenida
  public listaProductos: any[] = [];
}