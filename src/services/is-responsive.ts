import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsResponsive {

  private responsivo = inject(BreakpointObserver);

  // Método para verificar el tamaño de la pantalla

  // El metodo toSignal es una funcion encarga de convertir un Observable en una señal.
  public isMovil = toSignal(
    this.responsivo.observe(Breakpoints.XSmall).pipe(
      map(result => result.matches)
    ),
    { initialValue: false }
  )
}