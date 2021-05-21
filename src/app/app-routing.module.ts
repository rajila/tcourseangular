import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FatherComponent } from './components/comunicationI/father/father.component';
import { MessageextComponent } from './components/comunicationII/messageext/messageext.component';
import { EmisorComponent } from './components/comunicationIII/emisor/emisor.component';
import { CmppropiedadComponent } from './components/cmppropiedad/cmppropiedad.component';

const routes: Routes = [
  { path: 'father', component: FatherComponent },
  { path: 'msnext', component: MessageextComponent },
  { path: 'emisor', component: EmisorComponent},
  { path: 'cpropiedades', component: CmppropiedadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
