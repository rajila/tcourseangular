import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Para renderizar la app en el navegador

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';
import { SisterComponent } from './components/sister/sister.component';

@NgModule({
  declarations: [ // define las vistas que contiene el modulo
    AppComponent, FatherComponent, SonComponent, SisterComponent
  ],
  exports: [], // declaraciones que son visibles para componentes de otros modulos
  imports: [ // clases que otros modulos exportan para utilizarlas en el modulo actual
    BrowserModule, AppRoutingModule
  ],
  providers: [], // servicios usados de forma global y accesibles desde cualquier parte de la app
  bootstrap: [AppComponent] // vista principal del app. Solo es definida por el modulo principal
})
export class AppModule { }
