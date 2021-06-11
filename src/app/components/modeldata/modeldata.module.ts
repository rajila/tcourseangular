import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeldataRoutingModule } from './modeldata-routing.module';
import { TmodeloneComponent } from './tmodelone/tmodelone.component';


@NgModule({
  declarations: [
    TmodeloneComponent
  ],
  imports: [
    CommonModule,
    ModeldataRoutingModule
  ]
})
export class ModeldataModule { }
