import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../../models/usuario';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-registro',
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  //Binding bidireccional = HTML - TS, TS - HTML
  usuario:Usuario={
    fullName:"",
    username:"",
    password:""
  }

  constructor(private authService:AuthService){

  }

  regitro(){
    this.authService.registrar(this.usuario).subscribe({
      next:(data)=>{
        alert("Registro exitoso");
      },
      error:(error)=>{
        alert("Ocurrio un erro al registrarse");
      }
    })
  }

}
