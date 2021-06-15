import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeldataRoutingModule } from './modeldata-routing.module';
import { TmodeloneComponent } from './tmodelone/tmodelone.component';
import { TmodeltwoComponent } from './tmodeltwo/tmodeltwo.component';
import { TmodelthreeComponent } from './tmodelthree/tmodelthree.component';
import { BookService } from '../../service/book.service';
import { PostService } from '../../service/post.service';
import { ModeldatahttpComponent } from './modeldatahttp/modeldatahttp.component';


@NgModule({
  declarations: [
    TmodeloneComponent,
    TmodeltwoComponent,
    TmodelthreeComponent,
    ModeldatahttpComponent
  ],
  imports: [
    CommonModule,
    ModeldataRoutingModule
  ],
  providers: [BookService, PostService]
})
export class ModeldataModule { }
