import { Routes } from '@angular/router';
import { Producto } from '../components/productos/producto/producto';

export const routes: Routes = [
    // Definir las rutas del proyecto
    {
        path: 'productos',
        component: Producto
    },
];
