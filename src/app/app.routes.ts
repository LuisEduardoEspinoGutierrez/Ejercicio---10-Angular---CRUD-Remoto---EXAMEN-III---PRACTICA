import { Routes } from '@angular/router';
import { ListadoEntrenadoresComponent } from './components/entrenador/listado-entrenadores/listado-entrenadores.component';
import { ActualizarEntrenadorComponent } from './components/entrenador/actualizar-entrenador/actualizar-entrenador.component';
import { EliminarEntrenadorComponent } from './components/entrenador/eliminar-entrenador/eliminar-entrenador.component';
import { AgregarEntrenadorComponent } from './components/entrenador/agregar-entrenador/agregar-entrenador.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { LoginComponent } from './components/auth/login/login.component';
import { miguardGuard } from './guards/miguard.guard';

//Proteger con guards
//Agregar el token en las solicitudes: PUT, POST, DELETE - Requiere Token
export const routes: Routes = [
  {path:'entrenadores', component:ListadoEntrenadoresComponent,canActivate:[miguardGuard]},
  {path:'entrenadores/editar/:id',component:ActualizarEntrenadorComponent,canActivate:[miguardGuard]},
  {path:'entrenadores/eliminar/:id',component:EliminarEntrenadorComponent,canActivate:[miguardGuard]},
  {path:'entrenadores/agregar',component:AgregarEntrenadorComponent,canActivate:[miguardGuard]},

  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent}
];
