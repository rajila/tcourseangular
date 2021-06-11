import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TpipeComponent } from './tpipe/tpipe.component';

const routes: Routes = [
  { path: 'tpipe', component: TpipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeRoutingModule { }
