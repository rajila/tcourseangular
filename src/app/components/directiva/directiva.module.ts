import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Module para animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DirectivaRoutingModule } from './directiva-routing.module';
import { DirngclassComponent } from './dirngclass/dirngclass.component';
import { DirngifComponent } from './dirngif/dirngif.component';
import { DirngforComponent } from './dirngfor/dirngfor.component';
import { DirngswitchComponent } from './dirngswitch/dirngswitch.component';
import { DirngmodelComponent } from './dirngmodel/dirngmodel.component';
import { DirngstyleComponent } from './dirngstyle/dirngstyle.component';
import { AnydirngComponent } from './anydirng/anydirng.component';
import { TanimationComponent } from './tanimation/tanimation.component';


@NgModule({
  declarations: [
    DirngclassComponent,
    DirngifComponent,
    DirngforComponent,
    DirngswitchComponent,
    DirngmodelComponent,
    DirngstyleComponent,
    AnydirngComponent,
    TanimationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivaRoutingModule,
    BrowserAnimationsModule
  ]
})
export class DirectivaModule { }
