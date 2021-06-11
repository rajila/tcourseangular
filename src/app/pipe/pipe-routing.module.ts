import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TpipeComponent } from './tpipe/tpipe.component';
import { PipeasyncComponent } from './pipeasync/pipeasync.component';

const routes: Routes = [
  { path: 'tpipe', component: TpipeComponent },
  { path: 'pipeasync', component: PipeasyncComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeRoutingModule { }
