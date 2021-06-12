import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeldataRoutingModule } from './modeldata-routing.module';
import { TmodeloneComponent } from './tmodelone/tmodelone.component';
import { TmodeltwoComponent } from './tmodeltwo/tmodeltwo.component';


@NgModule({
  declarations: [
    TmodeloneComponent,
    TmodeltwoComponent
  ],
  imports: [
    CommonModule,
    ModeldataRoutingModule
  ]
})
export class ModeldataModule { }
