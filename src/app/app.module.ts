import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Para renderizar la app en el navegador
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { LifecycleoneComponent } from './components/lifecycle/lifecycleone/lifecycleone.component';
import { LifecycletwoComponent } from './components/lifecycle/lifecycletwo/lifecycletwo.component';
import { CallserviceModule } from './components/callservice/callservice.module';
import { DirectivaModule } from './components/directiva/directiva.module';
import { UsejsextModule } from './components/usejsext/usejsext.module';
import { PipeModule } from './pipe/pipe.module';
import { CmpasyncModule } from './components/cmpasync/cmpasync.module';
import { ModeldataModule } from './components/modeldata/modeldata.module';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

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
    CmpTwoComponent,
    LifecycleoneComponent,
    LifecycletwoComponent,
    DatabindingComponent,
    NotfoundComponent,
  ],
  exports: [], // declaraciones que son visibles para componentes de otros modulos
  imports: [ // clases que otros modulos exportan para utilizarlas en el modulo actual
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    ComunicatonthreeModule, 
    FormsModule, 
    CallserviceModule, 
    DirectivaModule, UsejsextModule, PipeModule, CmpasyncModule, ModeldataModule
  ],
  providers: [], // servicios usados de forma global y accesibles desde cualquier parte de la app
  bootstrap: [AppComponent] // vista principal del app. Solo es definida por el modulo principal
})
export class AppModule { }
