import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ModeldataRoutingModule } from './modeldata-routing.module';
import { TmodeloneComponent } from './tmodelone/tmodelone.component';
import { TmodeltwoComponent } from './tmodeltwo/tmodeltwo.component';
import { TmodelthreeComponent } from './tmodelthree/tmodelthree.component';
import { BookService } from '../../service/book.service';
import { PostService } from '../../service/post.service';
import { ModeldatahttpComponent } from './modeldatahttp/modeldatahttp.component';
import { InterceptorRequestService } from 'src/app/middleware/interceptor-request.service';
import { InterceptorResponseService } from 'src/app/middleware/interceptor-response.service';
import { EventosenparaleloComponent } from './eventosenparalelo/eventosenparalelo.component';


@NgModule({
  declarations: [
    TmodeloneComponent,
    TmodeltwoComponent,
    TmodelthreeComponent,
    ModeldatahttpComponent,
    EventosenparaleloComponent
  ],
  imports: [
    CommonModule,
    ModeldataRoutingModule
  ],
  providers: [
    BookService, 
    PostService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorRequestService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorResponseService, multi: true },
  ]
})
export class ModeldataModule { }
