import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TmodeloneComponent } from './tmodelone/tmodelone.component';

const routes: Routes = [
  {path: 'modelone', component: TmodeloneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeldataRoutingModule { }
