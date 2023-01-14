import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../ciudad';
import { CIUDADES } from '../mocks';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
   
  ciudades:Ciudad[]=[];
  
  ngOnInit(): void {
     this.ciudades=CIUDADES;
  }

}
