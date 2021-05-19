import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { EmisorComponent } from './emisor/emisor.component';
import { ReceptorComponent } from './receptor/receptor.component';

@NgModule({
  declarations: [
    EmisorComponent,
    ReceptorComponent
  ],
  exports:[],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class ComunicatonthreeModule { }
