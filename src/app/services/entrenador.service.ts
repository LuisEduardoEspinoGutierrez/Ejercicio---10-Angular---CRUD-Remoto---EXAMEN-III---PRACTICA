import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrenador } from '../models/entrenador';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class EntrenadorService {

  private apiUrl = "https://practica-viii-examen-ii-orm-y-jwt.onrender.com";

  constructor(private http:HttpClient, private authService:AuthService) { }

  //Obtener todos lo entrenadores
  getEntrenadores():Observable<Entrenador[]>{
    return this.http.get<Entrenador[]>(this.apiUrl+"/api/entrenadores",{
      headers:{
          Authorization:"Bearer "+this.authService.getToken()
      }
    });
  }

  //Obtener un entrenador por ID
  getEntrenadorById(id:any):Observable<Entrenador>{
    return this.http.get<Entrenador>(this.apiUrl+"/api/entrenadores/"+id, 
      {
      headers:{
          Authorization:"Bearer "+this.authService.getToken()
      }
    }
    );
  }

  //Actualizar un entrenador
  updateEntrenador(id:any,entrenador:Entrenador):Observable<Entrenador>{
    console.log(this.authService.getToken())
    return this.http.put<Entrenador>(this.apiUrl+"/api/entrenadores/"+id,entrenador,{
      headers:{
          Authorization:"Bearer "+this.authService.getToken()
      }
    });
  }
  //Eliminar un entrenador
  deleteEntrenador(id:any):Observable<void>{
    return this.http.delete<void>(this.apiUrl+"/api/entrenadores/"+id,{
      headers:{
        Authorization:"Bearer "+this.authService.getToken()
      }
    });
  }

  //Agregar un entrenador
  addEntrenador(entrenador:Entrenador):Observable<Entrenador>{
    return this.http.post<Entrenador>(this.apiUrl +"/api/entrenadores",entrenador,{
      headers:{
        Authorization:"Bearer "+this.authService.getToken()
      }
    });
  }
}
