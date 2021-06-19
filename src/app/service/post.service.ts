import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, interval, of, from } from 'rxjs';
import { map, delay, take, tap, reduce } from 'rxjs/operators';

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

  // Eventos en PARALELO
    getDataParaleloUsingForkjoin(): Observable<Array<Post>> {
      return forkJoin(
        [
          this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/4').pipe(delay(3000)),
          this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/5')
        ]
      );
    }

    // Solo toma el ULTIMO VALOR que emite el Observable
    // Los observables ejecutan en PARALELO
    // El resultado de los observables se muestra en la posición respectiva del array de Observables 
    // Emite un solo valor de tipo ARRAY
    getDataParaleloUsingForkjoinII(): Observable<Array<number>> {
      const observableOne = interval(500).pipe(map(data => data + 1), take(5)); // La funcion emitir se ejecuta 5 veces
      const observableTwo = interval(500).pipe(map(data => data + 1), take(3)); // La funcion emitir se ejecuta 3 veces
      const observableThree = of(20, 30).pipe(delay(25000)); // La funcion emitir se ejecuta 2 veces
      const observableFour = from([50, 100, 300, 400, 500, 600]).pipe(delay(5000)); // La funsion emitir se ejecuta 6 veces
      const observableFive = new Observable<any>(observer => {
        setTimeout(() => { observer.next(41); }, 100); // 1º element emitido
        setTimeout(() => { observer.next(42); }, 200); // 2º element emitido
        setTimeout(() => { observer.next(43); }, 300); // 3º element emitido
        setTimeout(() => { observer.complete(); }, 400); // Es necesario colocar el complete
      }).pipe(tap(data => console.error(data)));
      return forkJoin([observableOne, observableTwo, observableThree, observableFour, observableFive])
              .pipe(tap(data => console.info(data)));
    }

    getDataParaleloUsingForkjoinIII(): Observable<number> {
      const observableRangoI = of([...Array(1000).keys()].map(data => data + 1).reduce((x:number, y:number) => x + y, 0)).pipe(delay(1000*10));
      const observableRangoII = of([...Array(1000).keys()].map(data => data + 1001).reduce((x:number, y:number) => x + y, 0)).pipe(delay(1000*10));
      const observableRangoIII = of([...Array(1000).keys()].map(data => data + 2001).reduce((x:number, y:number) => x + y, 0)).pipe(delay(1000*10));
      const observableRangoIV = of([...Array(1000).keys()].map(data => data + 3001).reduce((x:number, y:number) => x + y, 0)).pipe(delay(1000*10));
      const observableRangoV = of([...Array(1000).keys()].map(data => data + 4001).reduce((x:number, y:number) => x + y, 0)).pipe(delay(1000*10));
      return forkJoin([observableRangoI, observableRangoII, observableRangoIII, observableRangoIV, observableRangoV])
                    .pipe(
                      tap(data => console.info('suma: ', data)),
                      map((data:any) => data.reduce((x:number, y:number) => x + y, 0)),
                    );
    }

    getDataParaleloWithoutForkjoin(): Observable<number> {
      return from([...Array(5000).keys()].map(data => data + 1))
                    .pipe(
                      delay(5000*10),
                      reduce((x:number, y:number) => x + y, 0)
                    );
    }
}