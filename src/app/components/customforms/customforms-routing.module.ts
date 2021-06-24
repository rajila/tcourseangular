import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroformComponent } from './introform/introform.component';
import { FormreactiveComponent } from './formreactive/formreactive.component';

const routes: Routes = [
  { path: 'introform', component: IntroformComponent },
  { path: 'formreactive', component: FormreactiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomformsRoutingModule { }
