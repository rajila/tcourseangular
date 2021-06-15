import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TmodeloneComponent } from './tmodelone/tmodelone.component';
import { TmodeltwoComponent } from './tmodeltwo/tmodeltwo.component';
import { TmodelthreeComponent } from './tmodelthree/tmodelthree.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { ModeldatahttpComponent } from './modeldatahttp/modeldatahttp.component';

const routes: Routes = [
  { path: 'modelone', component: TmodeloneComponent},
  { path: 'modelone/:id', component: TmodeltwoComponent, // Url con parametros
    children: [
      { path: 'imagen', component: TmodelthreeComponent },
      { path: '', redirectTo: 'imagen', pathMatch: 'full' },
      { path: '**', component: NotfoundComponent }
    ]
  },
  { path: 'modelhttp', component: ModeldatahttpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeldataRoutingModule { }
