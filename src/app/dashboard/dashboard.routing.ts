import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ControlIngresosEgresosComponent } from '../control-ingresos-egresos/control-ingresos-egresos.component';
import { DetalleComponent } from '../control-ingresos-egresos/detalle/detalle.component';
import { EstadisticasComponent } from '../control-ingresos-egresos/estadisticas/estadisticas.component';

export const dashboardRoutes: Routes = [
    {path:'', component:EstadisticasComponent },
    {path:'finanzas', component: ControlIngresosEgresosComponent},
    {path:'detalle', component: DetalleComponent}
]