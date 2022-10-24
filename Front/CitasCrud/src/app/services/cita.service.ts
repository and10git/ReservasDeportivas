import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actividad } from '../interfaces/actividad';
import { Cita } from '../interfaces/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private appUrl: string = environment.endpoint;
  private apiUrl: string = 'api/Cita/';
  private apiUrlView: string = 'api/Cita/View/';
  private apiUrlActividades: string = 'api/Cita/Actividades';

  constructor(private http: HttpClient) { }


  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.appUrl}${this.apiUrl}`);
  }

  getCita(id: number): Observable<Cita> {
    return this.http.get<Cita>(`${this.appUrl}${this.apiUrl}${id}`);   
  }

  viewCita(id: number): Observable<Cita> {
    return this.http.get<Cita>(`${this.appUrl}${this.apiUrlView}${id}`);   
  }

  deleteCita(id: number) : Observable<void> {
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`);
  }

  addCita(cita: Cita) : Observable<void>{
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, cita);
  }

  updateCita(id: number, cita: Cita) : Observable<void>{
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, cita);
  }

  getActividades(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(`${this.appUrl}${this.apiUrlActividades}`);
  }
}
