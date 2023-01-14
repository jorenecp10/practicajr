import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapapaisComponent } from './mapapais/mapapais.component';
import { CalenderComponent } from './calender/calender.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';

const routes: Routes = [
  {path:'pais',component:MapapaisComponent},
  {path:'calendario',component:CalenderComponent},
  {path:'ciudades',component:CiudadesComponent},
  {path:'departamentos',component:DepartamentosComponent},
  {path: '',redirectTo:'/pais',pathMatch:'full'},
  {path:'**',component:MapapaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
