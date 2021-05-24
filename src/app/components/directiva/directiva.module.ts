import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivaRoutingModule } from './directiva-routing.module';
import { DirngclassComponent } from './dirngclass/dirngclass.component';
import { DirngifComponent } from './dirngif/dirngif.component';


@NgModule({
  declarations: [
    DirngclassComponent,
    DirngifComponent
  ],
  imports: [
    CommonModule,
    DirectivaRoutingModule
  ]
})
export class DirectivaModule { }
