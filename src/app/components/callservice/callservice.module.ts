import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallserviceoneComponent } from './callserviceone/callserviceone.component';
import { CallservicetwoComponent } from './callservicetwo/callservicetwo.component';
import { TestService } from '../../service/test.service';

@NgModule({
  declarations: [
    CallserviceoneComponent,
    CallservicetwoComponent
  ],
  imports: [
    CommonModule
  ], 
  providers: [TestService]
})
export class CallserviceModule { }
