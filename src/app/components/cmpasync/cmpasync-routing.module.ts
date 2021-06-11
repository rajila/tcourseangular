import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasynconeComponent } from './tasyncone/tasyncone.component';

const routes: Routes = [
  { path: 'tasyncone', component: TasynconeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmpasyncRoutingModule { }
