import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeldataRoutingModule } from './modeldata-routing.module';
import { TmodeloneComponent } from './tmodelone/tmodelone.component';
import { TmodeltwoComponent } from './tmodeltwo/tmodeltwo.component';
import { TmodelthreeComponent } from './tmodelthree/tmodelthree.component';


@NgModule({
  declarations: [
    TmodeloneComponent,
    TmodeltwoComponent,
    TmodelthreeComponent
  ],
  imports: [
    CommonModule,
    ModeldataRoutingModule
  ]
})
export class ModeldataModule { }
