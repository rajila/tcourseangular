import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DirngclassComponent } from './dirngclass/dirngclass.component';
import { DirngifComponent } from './dirngif/dirngif.component';
import { DirngforComponent } from './dirngfor/dirngfor.component';

const routes: Routes = [
  { path: 'ngclass', component: DirngclassComponent },
  { path: 'ngif', component: DirngifComponent },
  { path: 'ngfor', component: DirngforComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivaRoutingModule { }
