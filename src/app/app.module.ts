import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Para renderizar la app en el navegador
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FatherComponent } from './components/comunicationI/father/father.component';
import { SonComponent } from './components/comunicationI/son/son.component';
import { SisterComponent } from './components/comunicationI/sister/sister.component';
import { MessageextComponent } from './components/comunicationII/messageext/messageext.component';
import { MessageintComponent } from './components/comunicationII/messageint/messageint.component';

// Modules
import { ComunicatonthreeModule } from './components/comunicationIII/comunicatonthree.module';
import { CmppropiedadComponent } from './components/cmppropiedad/cmppropiedad.component';
import { CmpOneComponent } from './components/usodecorator/cmp-one/cmp-one.component';
import { CmpTwoComponent } from './components/usodecorator/cmp-two/cmp-two.component';

@NgModule({
  declarations: [ // define las vistas que contiene el modulo
    AppComponent, 
    FatherComponent, 
    SonComponent, 
    SisterComponent, 
    MessageextComponent,
    MessageintComponent,
    CmppropiedadComponent,
    CmpOneComponent,
    CmpTwoComponent
  ],
  exports: [], // declaraciones que son visibles para componentes de otros modulos
  imports: [ // clases que otros modulos exportan para utilizarlas en el modulo actual
    BrowserModule, AppRoutingModule, ComunicatonthreeModule, FormsModule
  ],
  providers: [], // servicios usados de forma global y accesibles desde cualquier parte de la app
  bootstrap: [AppComponent] // vista principal del app. Solo es definida por el modulo principal
})
export class AppModule { }
