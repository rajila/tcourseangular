import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomformsRoutingModule } from './customforms-routing.module';
import { IntroformComponent } from './introform/introform.component';
import { FiltrarCaracteresDirective } from './validaciones/filtrar-caracteres.directive';
import { FormreactiveComponent } from './formreactive/formreactive.component';


@NgModule({
  declarations: [
    IntroformComponent,
    FiltrarCaracteresDirective,
    FormreactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomformsRoutingModule
  ]
})
export class CustomformsModule { }
