import { Component } from '@angular/core';
import { SidebarLayout } from '../sidebar-layout/sidebar-layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-desktop-layout',
  imports: [SidebarLayout, RouterOutlet],
  templateUrl: './desktop-layout.html',
  styleUrl: './desktop-layout.css',
})
export class DesktopLayout {

}