import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomformsRoutingModule } from './customforms-routing.module';
import { IntroformComponent } from './introform/introform.component';
import { FiltrarCaracteresDirective } from './validaciones/filtrar-caracteres.directive';


@NgModule({
  declarations: [
    IntroformComponent,
    FiltrarCaracteresDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomformsRoutingModule
  ]
})
export class CustomformsModule { }
