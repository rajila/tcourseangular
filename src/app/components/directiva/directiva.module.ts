import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivaRoutingModule } from './directiva-routing.module';
import { DirngclassComponent } from './dirngclass/dirngclass.component';
import { DirngifComponent } from './dirngif/dirngif.component';
import { DirngforComponent } from './dirngfor/dirngfor.component';


@NgModule({
  declarations: [
    DirngclassComponent,
    DirngifComponent,
    DirngforComponent
  ],
  imports: [
    CommonModule,
    DirectivaRoutingModule
  ]
})
export class DirectivaModule { }
