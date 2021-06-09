import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DirngclassComponent } from './dirngclass/dirngclass.component';
import { DirngifComponent } from './dirngif/dirngif.component';
import { DirngforComponent } from './dirngfor/dirngfor.component';
import { DirngswitchComponent } from './dirngswitch/dirngswitch.component';
import { DirngmodelComponent } from './dirngmodel/dirngmodel.component';
import { DirngstyleComponent } from './dirngstyle/dirngstyle.component';
import { AnydirngComponent } from './anydirng/anydirng.component';

const routes: Routes = [
  { path: 'ngclass', component: DirngclassComponent },
  { path: 'ngif', component: DirngifComponent },
  { path: 'ngfor', component: DirngforComponent },
  { path: 'ngswitch', component: DirngswitchComponent},
  { path: 'ngmodel', component: DirngmodelComponent},
  { path: 'ngstyle', component: DirngstyleComponent},
  { path: 'anyng', component: AnydirngComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivaRoutingModule { }
