import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EntrenadorService } from '../../../services/entrenador.service';
import { Entrenador } from '../../../models/entrenador';

@Component({
  selector: 'app-agregar-entrenador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-entrenador.component.html',
  styleUrl: './agregar-entrenador.component.css'
})
export class AgregarEntrenadorComponent {

  entrenador = {
    nombre: '',
    nacionalidad: '',
    experiencia: 0
  };

  constructor(
    private entrenadorService: EntrenadorService,
    private router: Router
  ) {}

  guardar(): void {
    this.entrenadorService.addEntrenador(this.entrenador).subscribe({
      next: () => {
        this.router.navigate(['/entrenadores']);
      },
      error: (err) => console.error(err)
    });
  }
}
