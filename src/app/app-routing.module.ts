import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FatherComponent } from './components/comunicationI/father/father.component';
import { MessageextComponent } from './components/comunicationII/messageext/messageext.component';
import { EmisorComponent } from './components/comunicationIII/emisor/emisor.component';
import { CmppropiedadComponent } from './components/cmppropiedad/cmppropiedad.component';
import { CmpOneComponent } from './components/usodecorator/cmp-one/cmp-one.component';

const routes: Routes = [
  { path: 'father', component: FatherComponent },
  { path: 'msnext', component: MessageextComponent },
  { path: 'emisor', component: EmisorComponent},
  { path: 'cpropiedades', component: CmppropiedadComponent},
  { path: 'usodecorator', component: CmpOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
