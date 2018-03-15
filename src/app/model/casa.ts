/*clase para encapsular los atributos de una receta */

export class Casa{

    //atributos
   
    nombre:string;
    precio:number;
    alquiler:boolean;
    habitaciones:number;
    foto:string;
    direccion:string;
    servicios:string[];
    

   
   

    //constructor, sólo es posible un constructor
    /*el segundo parámetro sirve para que por defecto salga anónimo */
    constructor(nombre:string, precio?:number, alquiler?:boolean, habitaciones?:number, foto?:string, direccion?:string, servicios?:string[], descripcion?:string ){
        console.log('Casa constructor');
        
        //inicializamos las variables
        this.nombre = nombre;
        this.alquiler = alquiler;
        this.habitaciones = habitaciones;
        if ( foto ){
            this.foto = foto;
        }else{
            this.foto = 'https://www.hola.com/imagenes/actualidad/20180216120517/familia-franco-pone-venta-pazo-meiras/0-539-996/pazo-meiras-t.jpg';
        }  
        
        this.direccion = direccion;
        //si ingredientes tiene contenido lo inicializamos con el contenido, si no con un array vacío
        this.servicios=(servicios)?servicios:[];
    }

    //métodos
    addServicios(servicios:string){
        this.servicios.push(servicios);
    }
}