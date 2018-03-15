import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Casa } from '../model/casa';
import { InmobiliariaService } from '../providers/inmobiliaria.service';


@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
 
})
export class InmobiliariaComponent implements OnInit {

  aCasa : Array<Casa>; //array casteado con tipo casa
  casaSelec : Casa;
  venta:boolean;
  alquiler:boolean;

  //filtro
  precioMin:number;
  precioMax:number;

  //en el constructor inicializamos los atributos
  //inyectamos para poder usar este servicio en Inmobiliaria
  constructor(public inmobiliariaService: InmobiliariaService) {
    console.log('InmobiliariaComponent constructor');     
    this.aCasa =[];
    this.casaSelec = new Casa("");
    
   
   }

  //las llamadas a los servicios se hacen aquí
  ngOnInit() {
    console.log('InmobiliariaComponent ngOnInit');
    this.cargarCasas();

  }//final onInit


   
   cargarCasas(){
    console.log('CasaComponent cargarCasas');
    this.aCasa = [];
    this.inmobiliariaService.getCasas().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
        this.casaSelec = this.aCasa[0];
        this.venta= true;
        this.alquiler= true;  
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
    let casa: Casa;
    result.forEach(el =>{
      casa = new Casa(el.title);
      casa.nombre = el.nombre;
      casa.precio = el.precio;
      casa.alquiler = el.alquiler;
      casa.habitaciones = el.habitaciones;
      casa.foto = el.foto;
      casa.direccion = el.direccion;
      casa.servicios = el.servicios;

      this.aCasa.push(casa);
    });

    
  }

   //esta casa la recibe el hijo como input
   seleccionarCasa( casaDelInput : Casa ){
    console.log('casaComponent seleccionarCasa');
    this.casaSelec = casaDelInput;
  }

  


}
