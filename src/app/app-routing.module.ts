import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapapaisComponent } from './mapapais/mapapais.component';
import { CalenderComponent } from './calender/calender.component';
import { CiudadesComponent } from './ciudades/ciudades.component';

const routes: Routes = [
  {path:'pais',component:MapapaisComponent},
  {path:'calendario',component:CalenderComponent},
  {path:'ciudades',component:CiudadesComponent},
  {path: '',redirectTo:'/pais',pathMatch:'full'},
  {path:'**',component:MapapaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
