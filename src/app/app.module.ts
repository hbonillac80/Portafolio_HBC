import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiVidaLaboralComponent } from './portafolio/mi-vida-laboral/mi-vida-laboral.component';
import { MisDatosComponent } from './portafolio/mis-datos/mis-datos.component';
import { MisEstudiosComponent } from './portafolio/mis-estudios/mis-estudios.component';
import { MisHabilidadesComponent } from './portafolio/mis-habilidades/mis-habilidades.component';
import { MisInteresesComponent } from './portafolio/mis-intereses/mis-intereses.component';
import { MisPremiosComponent } from './portafolio/mis-premios/mis-premios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MisDatosComponent,
    MisEstudiosComponent,
    MiVidaLaboralComponent,
    MisHabilidadesComponent,
    MisInteresesComponent,
    MisPremiosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
