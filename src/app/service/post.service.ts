import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) { }

  // Observable: tipo cold: solo realiza la petición si hay una suscripcion 
  getPostales(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
                    .pipe(map((data:any) => data.filter((el:any) => el.userId === 1)));
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