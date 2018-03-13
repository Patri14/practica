import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-basico',
  templateUrl: './formulario-basico.component.html',
  styleUrls: ['./formulario-basico.component.scss']
})
export class FormularioBasicoComponent implements OnInit {

  //atributo FormGroup necesario para usar en el HTML
  formulario : FormGroup;

  //banana in  a box 
  fruta:string;

  constructor(private fb:FormBuilder) {
      //inicializar la variable para banana in  a box
      this.fruta="banana";
      
      //creamos el formulario
      this.formulario = this.fb.group({
          
        //nombre es un control, parecido a un input, 1 es el valor, lo 2 las validaciones
          nombre: ['',[Validators.required, Validators.minLength(3)] ]
         
      });
  }

  ngOnInit() {
  }

  //en el HTML en la etiqueta form [formGroup]="formulario" (ngSubmit)="enviar($event)"
  enviar(){
    console.log('Enviar formulario');
  }

}
