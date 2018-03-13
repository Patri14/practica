import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Para formularios
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

//servicios
import { ServicioService } from './providers/servicio.service';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';




@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    FormularioBasicoComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // para servicios rest
  ],
  providers: [
    ServicioService,
    HttpClientModule // para servicios rest
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
