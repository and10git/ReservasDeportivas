import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { AgregarEditarCitaComponent } from './components/agregar-editar-cita/agregar-editar-cita.component';
import { ListadoCitasComponent } from './components/listado-citas/listado-citas.component';
import { VerCitaComponent } from './components/ver-cita/ver-cita.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarCitaComponent,
    ListadoCitasComponent,
    VerCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
