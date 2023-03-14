import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SeriesComponent } from './components/series/series.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgregarItemComponent } from './components/agregar-item/agregar-item.component';


@NgModule({
  declarations: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent,
    DashboardComponent,
    AgregarItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    InicioComponent
  ]
})
export class RoutesModule { }
