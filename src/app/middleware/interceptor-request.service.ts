import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorRequestService implements  HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqClone = req.clone({headers: req.headers.set('Autorizacion', 'my-tokennnnn').set('name','Ronald')});
    console.info('Interceptor request: ', reqClone);
    return next.handle(reqClone);
  }
}
