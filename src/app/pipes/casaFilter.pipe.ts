import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({
  name: 'filter'
})
export class CasaFilter implements PipeTransform {

  /**
   * Filtro para buscar en una coleccion de Casas. No es CaseSensitive.
   * @param casasFilterArray : Casa[]
   * @param searchText : string con el nombre de la casa
   */
  transform(casas: Casa[], searchText: string, venta:boolean, alquiler:boolean, precioMin:number=0, precioMax:number=0): Casa[] {  

    //si no hay casas retornar vacio
    if (!casas) return [];

    
    let casasFilterArray: Casa[] = [];

    //FILTRO POR ALQUILER O VENTA

    //si es true es alquiler
    if (alquiler) {
      casas.forEach(it => {
        if (it.alquiler) {
          casasFilterArray.push(it);
        }
      });
    }
    
    //si es false es venta
    if (venta) {
      casas.forEach(it => {
        if (!it.alquiler) {
          casasFilterArray.push(it);
        }
      });
    } 

    if(!searchText){
      return casasFilterArray;
    }

    //FILTRO POR PRECIO MIN Y MAX

    //si precioMin 
    if(!precioMin == null) precioMin = 0;
    if(precioMax == null) precioMax = 0;

    //De los que quedan FILTRAMOS POR NOMBRE si hay
    if (!searchText) {
      return casasFilterArray;
    } else {
      searchText = searchText.toLowerCase();
      let casa = '';
      return casasFilterArray.filter(it => {
        casa = it.nombre +''+it.direccion;
        console.log(casa);
        casa = casa.toLowerCase();
        return casa.includes(searchText);
      });
    }


  }

}