import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroformComponent } from './introform/introform.component';

const routes: Routes = [
  { path: 'introform', component: IntroformComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomformsRoutingModule { }
