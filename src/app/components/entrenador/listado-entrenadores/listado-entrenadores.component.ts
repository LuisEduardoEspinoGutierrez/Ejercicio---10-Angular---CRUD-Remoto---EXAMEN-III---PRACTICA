import { Component } from '@angular/core';
import { Entrenador } from '../../../models/entrenador';
import { EntrenadorService } from '../../../services/entrenador.service';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-listado-entrenadores',
  imports: [RouterLink],
  templateUrl: './listado-entrenadores.component.html',
  styleUrl: './listado-entrenadores.component.css'
})
export class ListadoEntrenadoresComponent {
  //Arreglo de entrenadores y de inicio vacio
  entrenadores:Entrenador[]=[];
  datosCargados:boolean=false;
  //En el contructor inyectamos todo lo que se requiera

  constructor(
    private servicioEntrenador:EntrenadorService,
    private authService:AuthService,
    private rutas:Router){

  }

  //Cuando se inicie el componente obtenemos los entrenadores
  ngOnInit():void{
    //Consumir el servicio de entrenadores - Suscribirse
    if(!this.datosCargados)
    this.servicioEntrenador.getEntrenadores().subscribe({
      next:(data)=>{
        //No hay error, tenemos los entrenadores
        this.entrenadores=data;
        this.datosCargados=true;
      },
      error:(error)=>{
        alert("Error interno de servidor: "+error);
      }
    })
  }

  logout(){
    this.authService.logout();
    this.rutas.navigate(['/login']);
  }

}
