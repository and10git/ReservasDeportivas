import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { ListadoCitasComponent } from './components/listado-citas/listado-citas.component';
import { AgregarEditarCitaComponent } from './components/agregar-editar-cita/agregar-editar-cita.component';
import { VerCitaComponent } from './components/ver-cita/ver-cita.component';

const routes: Routes = [
  {path: '', redirectTo: 'listaCitas', pathMatch: 'full'},  
  { path: 'listaCitas', component: ListadoCitasComponent},
  { path: 'agregarCita', component: AgregarEditarCitaComponent},
  { path: 'verCita/:id', component: VerCitaComponent},
  { path: 'editarCita/:id', component: AgregarEditarCitaComponent},

  //SIEMPRE ULTIMO EN LA LISTA
  {path: '**', redirectTo: 'listaCitas', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
