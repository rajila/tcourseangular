import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsejsonComponent } from './usejson/usejson.component';

const routes: Routes = [
  { path: 'usejsone', component: UsejsonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsejsextRoutingModule { }
