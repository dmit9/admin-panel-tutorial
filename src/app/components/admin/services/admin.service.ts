import { Injectable } from '@angular/core';
import { User } from '../user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http: HttpClient)  { }

  getPersonalList() {
      return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users?_start=0&_limit=5');
  }

  getperson(id: number) {
      return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
