import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Dato } from '../model/dato';
import { Response } from '@angular/http';
import { GLOBAL } from '../globales';

//donde está nuestro servicio, su punto de entrada
// const END_POINT = 'http://192.168.0.42:3000';

@Injectable()
export class ServicioService {

 

  constructor(public http : HttpClient) { }


  buscar(id: number): Observable<Dato> {
    let url = GLOBAL.endpoint + `/todos?id=${id}`;
  
    console.log(`ServiciosService buscar ${url}`);
    return this.http.get<Dato>(url);                         
  }

}
