import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FatherComponent } from './components/comunicationI/father/father.component';
import { MessageextComponent } from './components/comunicationII/messageext/messageext.component';

const routes: Routes = [
  { path: 'father', component: FatherComponent},
  { path: 'msnext', component: MessageextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
