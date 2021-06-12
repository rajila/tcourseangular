import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TmodeloneComponent } from './tmodelone/tmodelone.component';
import { TmodeltwoComponent } from './tmodeltwo/tmodeltwo.component';

const routes: Routes = [
  {path: 'modelone', component: TmodeloneComponent},
  {path: 'modelone/:id', component: TmodeltwoComponent}, // Url con parametros
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeldataRoutingModule { }
