import { Injectable } from '@angular/core';
import { Departamentos } from './Departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private departamentos:Departamentos[]=
  [
    {nombre:"Magdalena",
    capital:"Santa marta"
    },
    {nombre:"Cundinamarca",
    capital:"Bogota"
    },
    {
    nombre:"Antioquia",
    capital:"Medellin"
    },
    {
      nombre:"Valle del cauca",
      capital:"Cali"
      },
      {
        nombre:"Atlantico",
        capital:"Barranquilla"
        }
        ,
    {
      nombre:"Bolivar",
      capital:"Cartagena"
      }

  ];

  getDepartamentos(){
    return this.departamentos;
  }


  constructor() { }
}
