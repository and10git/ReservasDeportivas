import { DatePipe, DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from 'src/app/interfaces/actividad';
import { Cita } from 'src/app/interfaces/cita';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-agregar-editar-cita',
  templateUrl: './agregar-editar-cita.component.html',
  styleUrls: ['./agregar-editar-cita.component.css']
})
export class AgregarEditarCitaComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar'
  listaActividades: Actividad[] = [];

  constructor(private fb: FormBuilder, private _citaService: CitaService, private _snackBar: MatSnackBar, private _router: Router, private _aRoute: ActivatedRoute) {
    this.form = fb.group({      
      actividad: [''],
      nombre: ['', Validators.required],
      numeroPista: ['', Validators.required],
      fecha: ['', Validators.required],
      tiempoHoras: ['', Validators.required],
      observaciones: ['']
    });

    this.id = Number(this._aRoute.snapshot.paramMap.get('id'))
  }

  agregarEditarCita() {
    debugger;
    var cita: Cita = {
      actividad: this.form.value.actividad,
      nombre: this.form.value.nombre,
      numPista: this.form.value.numeroPista,
      fechaCita: this.form.value.fecha,
      tiempoHoras: this.form.value.tiempoHoras,
      observaciones: this.form.value.observaciones,
    }

    if (this.id != 0) { //edit
      this.editarCita(this.id, cita);
    } else { //insert
      this.agregarcita(cita);
    }
  }

  agregarcita(cita: Cita) {
    this._citaService.addCita(cita).subscribe(data => {
      this.mensajeExito("Cita agregada correctamente");
      this._router.navigate(['/listaCitas']);

    })
  }

  editarCita(id: number, cita: Cita) {
    debugger;
    this._citaService.updateCita(id, cita).subscribe(data => {
      this.mensajeExito("Cita modificada correctamente");
      this._router.navigate(['/listaCitas']);

    });
  }

  mensajeExito(mensaje: string) {
    this._snackBar.open(mensaje, '', {
      duration: 3000,
      horizontalPosition: 'right'
    });
  }

  getCita(id: number) {
    debugger;
    this._citaService.getCita(id).subscribe(data => {
      debugger;
      this.form.setValue({
        actividad: data.actividad,
        nombre: data.nombre,
        numeroPista: data.numPista,
        fecha: null,
        tiempoHoras: data.tiempoHoras,
        observaciones: data.observaciones

      })
    });
  }

  getActividades() {
    this._citaService.getActividades().subscribe({      
      next: (data) => {
        this.listaActividades = data;
      },
      error: (e) => {
        console.log(e);
        alert("Error al obtener actividades");
      },
      complete: () => { console.info('complete actividades') }
    });
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar';
      this.getCita(this.id);
    }

    this.getActividades();
  }


}
