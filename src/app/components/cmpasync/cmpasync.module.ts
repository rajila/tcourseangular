import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmpasyncRoutingModule } from './cmpasync-routing.module';
import { TasynconeComponent } from './tasyncone/tasyncone.component';


@NgModule({
  declarations: [
    TasynconeComponent
  ],
  imports: [
    CommonModule,
    CmpasyncRoutingModule
  ]
})
export class CmpasyncModule { }
