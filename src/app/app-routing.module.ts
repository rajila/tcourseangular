import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './heroes/heroes.component';
import { FatherComponent } from './components/comunicationI/father/father.component';

const routes: Routes = [
  { path: 'father', component: FatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
