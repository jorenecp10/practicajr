import { Component } from '@angular/core';
import { Departamentos } from '../Departamento';
import { DepartamentosService } from '../departamentos.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  departamentoscol:Departamentos[]=[];

  constructor(private departamentosCol:DepartamentosService){

  }

  ngOnInit(): void {
    this.departamentoscol=this.departamentosCol.getDepartamentos();

  }

}
