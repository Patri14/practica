import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Para formularios
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { DetallecasaComponent } from './inmobiliaria/detallecasa/detallecasa.component';
import { NuevacasaComponent } from './inmobiliaria/nuevacasa/nuevacasa.component';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

//servicios
import { ServicioService } from './providers/servicio.service';
import { InmobiliariaService } from './providers/inmobiliaria.service';

//formulario
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { CasaFilter } from './pipes/casaFilter.pipe';







@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    FormularioBasicoComponent,
    InmobiliariaComponent,
    DetallecasaComponent,
    NuevacasaComponent,
    CasaFilter 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // para servicios rest
  ],
  providers: [
    ServicioService,
    InmobiliariaService,
    HttpClientModule // para servicios rest
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
