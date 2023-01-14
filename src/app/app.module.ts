import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CalenderComponent } from './calender/calender.component';
import { MapapaisComponent } from './mapapais/mapapais.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalenderComponent,
    MapapaisComponent,
    CiudadesComponent,
    DepartamentosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
