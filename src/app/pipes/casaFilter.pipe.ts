import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({
  name: 'filter'
})
export class CasaFilter implements PipeTransform {

  /**
   * Filtro para buscar en una coleccion de Casas. No es CaseSensitive.
   * @param aCasa : Casa[]
   * @param searchText : string con el nombre de la casa
   */
  transform(casas: Casa[], searchText: string): Casa[] {  

    //si no hay casas retornar vacio
    if (!casas) return [];

    let casasFilterArray: Casa[] = [];

    //Filtramos si estan en alquiler o en venta
    // if (isAlquiler) {
    //   casas.forEach(it => {
    //     if (it.alquiler) {
    //       casasFilterArray.push(it);
    //     }
    //   });
    // } else {
    //   casasFilterArray = casas;
    // }

    //De los que quedan filtramos por nombre si hay
    if (!searchText) {
      return casas;
    } else {
      searchText = searchText.toLowerCase();
      let casa = '';
      return casas.filter(it => {
        casa = it.nombre + it.direccion;
        casa = casa.toLowerCase();
        return casa.includes(searchText);
      });
    }
  }

}