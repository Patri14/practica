import { Component, OnInit, Input} from '@angular/core';
import { Casa } from '../../model/casa'

@Component({
  selector: 'app-detallecasa',
  templateUrl: './detallecasa.component.html',
  styleUrls: ['./detallecasa.component.scss']
})
export class DetallecasaComponent implements OnInit {

  @Input ('casaDelInput') casa : Casa;
  constructor() {
      
    console.log('detalleComponent constructor');

   }

  ngOnInit() {

    console.log('detalleComponent OnInit');
  }

}
