import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideBadgeDollarSign, LucideBox, LucideCalendarDays, LucideFlag, LucideLayoutDashboard, LucideMoon, LucideShoppingCart, LucideSquareArrowRight, LucideSquareChevronLeft, LucideSquareChevronRight, LucideSun, LucideUserGroup } from '@lucide/angular';

@Component({
  selector: 'app-sidebar-layout',
  imports: [
    LucideBox,
    LucideShoppingCart,
    LucideBadgeDollarSign,
    LucideUserGroup,
    LucideFlag,
    LucideLayoutDashboard,
    LucideCalendarDays,
    LucideMoon,
    LucideSun,
    LucideSquareChevronLeft,
    LucideSquareChevronRight,
    RouterLink,
    NgClass
  ],
  templateUrl: './sidebar-layout.html',
  styleUrl: './sidebar-layout.css',
})
export class SidebarLayout {
  
  // Variable para controlar el modo <lucide-icon name="badge-dollar-sign"></lucide-icon>
  public temaOscuro = signal(true);

  // Variable para controlar si esta abierto el menu
  public menu = signal(false);

  // Método para cambiar de tema
  cambiarTema(oscuro: boolean): void{
    this.temaOscuro.set(oscuro);
  }

  // Método para activar el menu pequeñp
  menuActivar(){
    this.menu.update(estado => !estado);
  }
}