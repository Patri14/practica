import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ServicioService } from '../providers/servicio.service';

import { Observable }        from 'rxjs/Observable';

import { Dato } from '../model/dato';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})

export class Componente1Component implements OnInit {

  private searchTerms = new Dato();
  datos : Dato[];
  dato:Dato;
 
 id:number;
  //los servcios se inyectan
  constructor(public datosServices: ServicioService) {

    console.log('Componente1Component Constructor');
    this.dato = new Dato();
   }

    //aquí se llaman a los servicios
    ngOnInit(): void {
        console.log('Componente1Component ngOnInit');
        this.buscarDato() 
    }//final onInit


    buscarDato(){
      console.log('Componente1Component buscarDatos');
      
      this.datos = [];
      this.datosServices.buscar(this.id).subscribe(
        resultado => {
          console.debug('peticion correcta %o', resultado);
          this.mapeo(resultado);
        },
        error=>{
          console.warn('peticion incorrecta %o', error);
        }
      );//subscribe
    }
  
    /**
     * mapea los datos en formato json que proviene del servicio rest
     * @param result :any 
     */
    mapeo(result:any){
      
      result.forEach(el =>{
       
        this.dato.title = el.title;
        this.dato.id = el.id;
        this.dato.userId = el.userId;
        this.dato.completed = el.completed;
    
      });
    }
  
}

  
  




 




  



