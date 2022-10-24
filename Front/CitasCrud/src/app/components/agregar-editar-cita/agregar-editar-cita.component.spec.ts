import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarCitaComponent } from './agregar-editar-cita.component';

describe('AgregarEditarCitaComponent', () => {
  let component: AgregarEditarCitaComponent;
  let fixture: ComponentFixture<AgregarEditarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
