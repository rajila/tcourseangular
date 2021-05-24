import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CallserviceModule } from '../components/callservice/callservice.module';

@Injectable()
export class TestService {

  public url: string;

  constructor(public _http: HttpClient) { 
    this.url = "http://localhost:3800/api/";
  }

  getHome(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'home', {headers:headers});
	}
}