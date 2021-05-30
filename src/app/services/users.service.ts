import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/Models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url='https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {  }

  public getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url);
  }
}
