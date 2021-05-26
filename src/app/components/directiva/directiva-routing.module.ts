import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DirngclassComponent } from './dirngclass/dirngclass.component';
import { DirngifComponent } from './dirngif/dirngif.component';
import { DirngforComponent } from './dirngfor/dirngfor.component';
import { DirngswitchComponent } from './dirngswitch/dirngswitch.component';

const routes: Routes = [
  { path: 'ngclass', component: DirngclassComponent },
  { path: 'ngif', component: DirngifComponent },
  { path: 'ngfor', component: DirngforComponent },
  { path: 'ngswitch', component: DirngswitchComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivaRoutingModule { }
