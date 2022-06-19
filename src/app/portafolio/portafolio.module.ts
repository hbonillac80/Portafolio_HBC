import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { MiVidaLaboralComponent } from './mi-vida-laboral/mi-vida-laboral.component';
import { MisEstudiosComponent } from './mis-estudios/mis-estudios.component';
import { MisHabilidadesComponent } from './mis-habilidades/mis-habilidades.component';
import { MisInteresesComponent } from './mis-intereses/mis-intereses.component';
import { MisPremiosComponent } from './mis-premios/mis-premios.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MisDatosComponent,
    MiVidaLaboralComponent,
    MisEstudiosComponent,
    MisHabilidadesComponent,
    MisInteresesComponent,
    MisPremiosComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    MisDatosComponent,
    MiVidaLaboralComponent,
    MisEstudiosComponent,
    MisHabilidadesComponent,
    MisInteresesComponent,
    MisPremiosComponent,
    MatButtonModule
  ]
})
export class PortafolioModule { }
