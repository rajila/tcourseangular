import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivaRoutingModule } from './directiva-routing.module';
import { DirngclassComponent } from './dirngclass/dirngclass.component';
import { DirngifComponent } from './dirngif/dirngif.component';
import { DirngforComponent } from './dirngfor/dirngfor.component';
import { DirngswitchComponent } from './dirngswitch/dirngswitch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirngmodelComponent } from './dirngmodel/dirngmodel.component';


@NgModule({
  declarations: [
    DirngclassComponent,
    DirngifComponent,
    DirngforComponent,
    DirngswitchComponent,
    DirngmodelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivaRoutingModule,
    BrowserAnimationsModule
  ]
})
export class DirectivaModule { }
