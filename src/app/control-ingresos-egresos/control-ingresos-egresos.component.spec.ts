import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlIngresosEgresosComponent } from './control-ingresos-egresos.component';

describe('ControlIngresosEgresosComponent', () => {
  let component: ControlIngresosEgresosComponent;
  let fixture: ComponentFixture<ControlIngresosEgresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlIngresosEgresosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlIngresosEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
