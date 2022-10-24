import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cita } from 'src/app/interfaces/cita';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-ver-cita',
  templateUrl: './ver-cita.component.html',
  styleUrls: ['./ver-cita.component.css']
})
export class VerCitaComponent implements OnInit {
  id: number;
  cita!: Cita;


  constructor(private _citaService: CitaService, private aRout: ActivatedRoute) {     
    this.id = Number(this.aRout.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getCita();
  }

  getCita() {
    this._citaService.viewCita(this.id).subscribe(data => {
      debugger;
      this.cita = data;
    })
  }

}
