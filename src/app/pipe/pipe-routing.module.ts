import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TpipeComponent } from './tpipe/tpipe.component';
import { PipeasyncComponent } from './pipeasync/pipeasync.component';
import { PipejsonComponent } from './pipejson/pipejson.component';

const routes: Routes = [
  { path: 'tpipe', component: TpipeComponent },
  { path: 'pipeasync', component: PipeasyncComponent },
  { path: 'pipejson', component: PipejsonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeRoutingModule { }
