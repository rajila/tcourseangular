import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { TpipeComponent } from './tpipe/tpipe.component';
import { PipediventeraPipe } from './pipe/pipediventera.pipe';
import { PipeuppercasePipe } from './pipe/pipeuppercase.pipe';
import { PipeimpuppercasePipe } from './pipe/pipeimpuppercase.pipe';


@NgModule({
  declarations: [
    TpipeComponent,
    PipediventeraPipe,
    PipeuppercasePipe,
    PipeimpuppercasePipe,
  ],
  imports: [
    CommonModule,
    PipeRoutingModule
  ]
})
export class PipeModule { }
