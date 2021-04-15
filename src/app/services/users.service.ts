import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUserRespond } from  '../interfaces/user'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlBase: string = environment.URL_BASE;

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<IUserRespond[]> {
    const url = `${ this.urlBase }${ environment.URL_ENDPOINT }`;
    return this.http.get<IUserRespond[]>( url );
  }
}
