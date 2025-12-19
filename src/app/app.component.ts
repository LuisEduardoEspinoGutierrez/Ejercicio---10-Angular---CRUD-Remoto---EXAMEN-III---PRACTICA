import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  mostrarNavbar = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        const ruta = event.urlAfterRedirects;

        this.mostrarNavbar =
          !ruta.startsWith('/login') &&
          !ruta.startsWith('/registro');
      });
  }
}

