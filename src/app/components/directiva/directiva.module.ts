import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivaRoutingModule } from './directiva-routing.module';
import { DirngclassComponent } from './dirngclass/dirngclass.component';


@NgModule({
  declarations: [
    DirngclassComponent
  ],
  imports: [
    CommonModule,
    DirectivaRoutingModule
  ]
})
export class DirectivaModule { }
