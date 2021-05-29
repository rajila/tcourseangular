import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsejsextRoutingModule } from './usejsext-routing.module';
import { UsejsonComponent } from './usejson/usejson.component';


@NgModule({
  declarations: [
    UsejsonComponent
  ],
  imports: [
    CommonModule,
    UsejsextRoutingModule
  ]
})
export class UsejsextModule { }
