import { Injectable } from '@angular/core';
import { Casa } from '../model/casa';
//import { MOCKS_INMOBILIARIA } from '../providers/mocks.inmobiliaria';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import { element } from 'protractor';


const END_POINT = 'http://localhost:3000/casas'
@Injectable()
export class InmobiliariaService {
  
  //declaro una variable, de tipo array de casas, y la inicializo vacía
  aCasa:Casa[] = [];
  casa;
  servicios;

  constructor(public http: HttpClient) {
    console.log('InmobiliariaService constructor');
   }

   getCasas():Observable<any>{

    //let url = END_POINT + '/todos?userId=2';
    let url = END_POINT;
    console.log(`CasaService getCasas ${url}`);
    return this.http.get(url);

  }

  post(casa:Casa){
    let url = END_POINT;
    console.log(`CasaService put ${url}`);

    let body = {
                  
                  "nombre": casa.nombre,
                  "precio": casa.precio,
                  "alquiler": casa.alquiler,
                  "habitaciones": casa.habitaciones,
                  "foto": casa.foto, 
                  "direccion": casa.direccion,
                  "servicios": casa.servicios     
                } 
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( url, body , httpOptions );
  }

   /***Retorna todos las casas que tenemos***/
// getAll() : Casa[]{
    
//  let jsonData = JSON.parse(END_POINT);

//     jsonData.forEach( element => {

//         this.casa = new Casa( 
                        
//                           element.nombre, 
//                           element.precio, 
//                           element.alquiler,
//                           element.habitaciones,
//                           element.foto,
//                           element.direccion,
//                           element.servicios
                        
                          
//                           );
//                         this.aCasa.push(this.casa);

//                         });
                    
//       return this.aCasa;

//   }

   
  /**
   * Crear Nueva Casa
   * @param casa : Casa nueva
   */
  crear( casa: Casa ):void{
    console.log('ImobiliariaService crear %o', casa );
    this.aCasa.unshift(casa);
  }
}



