import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from 'src/app/interfaces/post';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) { }

  // Observable: tipo cold: solo realiza la petición si hay una suscripcion 
  getPostales(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
                    .pipe(map((data:any) => data.filter((el:any) => el.userId === 1)));
  }

  // Get request with params & headers
  getPostalesWithParams(): Observable<any> {
    const params = new HttpParams().set('userId', '9'); // HttpParams is INMUTABLE
    const headers = new HttpHeaders().set('Autorizacion', 'myToken'); // HttpHeaders is INMUTABLE
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {params, headers});
  }

  // Observable: return data, definiendo el tipo de retorno en GET
  getPostalesTypePost(): Observable<Array<Post>> {
    const params = new HttpParams().set('userId', '9'); // HttpParams is INMUTABLE
    const headers = new HttpHeaders().set('Autorizacion', 'myToken'); // HttpHeaders is INMUTABLE
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params, headers});
  }

  // Observable: return all response data http
  getPostalesAllResponseHttp(): Observable<any> {
    const params = new HttpParams().set('userId', '9'); // HttpParams is INMUTABLE
    const headers = new HttpHeaders().set('Autorizacion', 'myToken'); // HttpHeaders is INMUTABLE
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {params, headers, observe: 'response'});
  }

  // Observable: return ERROR
  getERROR(): Observable<any> {
    const params = new HttpParams().set('userId', '9'); // HttpParams is INMUTABLE
    const headers = new HttpHeaders().set('Autorizacion', 'myToken'); // HttpHeaders is INMUTABLE
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1000', {params, headers, observe: 'response'});
  }

  addPostales(title: string = 'Title default', body: string = 'Body default'): Observable<Object> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', 
              { 
                'id': 1,
                'title': title, 
                'body': body,
                'userId': 1
              });
  }

  updatePostal(title: string = 'Title Change', body: string = 'Body Change'): Observable<any> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', 
              { 
                'id': 1,
                'title': title, 
                'body': body,
                'userId': 1
              });
  }

  updatePostalBody(body: string = 'Body Change Change'): Observable<any> {
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/1', 
              { 
                'body': body,
              });
  }

  deletePostal(): Observable<any> {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }
}