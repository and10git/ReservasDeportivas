import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cita } from 'src/app/interfaces/cita';
import { CitaService } from 'src/app/services/cita.service';

const LISTA_CITAS: Cita[] = [];

@Component({
  selector: 'app-listado-citas',
  templateUrl: './listado-citas.component.html',
  styleUrls: ['./listado-citas.component.css']
})

export class ListadoCitasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'actividad', 'numPista', 'fechaCita', 'tiempoHoras', 'acciones'];
  dataSource = new MatTableDataSource<Cita>(LISTA_CITAS);
  loading: boolean = false

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _citaService: CitaService) { }


  ngOnInit(): void {
    this.getCitas();
  }

  getCitas() {
    this.loading = true;
    this._citaService.getCitas().subscribe({
      next: (data) => {
        this.loading = false;
        this.dataSource.data = data;
      },
      error: (e) => {
        this.loading = false;
        console.log(e);
        alert("Error al conectar con la base de datos");
      },
      complete: () => { console.info('complete') }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    debugger;
    this.paginator._intl.itemsPerPageLabel = 'Mostrar'
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarCita(id: number) {
    this.loading = true;
    this._citaService.deleteCita(id).subscribe(() => {
      this.loading = false;
      this.mensajeExito();
      this.getCitas();
    });
  }

  mensajeExito() {
    this._snackBar.open('Cita eliminada correctamente', '', {
      duration: 3000,
      horizontalPosition: 'right'
    });
  }

}