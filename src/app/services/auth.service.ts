import { Token } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggetIn() {
    return this.getToken() !== null;
  }

  login(userInfo: {email: string, password: string}): Observable<string | boolean> {
    if (userInfo.email === 'a@a' && userInfo.password === 'aaaaaaa1' ) {
      this.setToken('aaa')
      return of(true)
    }
    return throwError( () => new Error('Failed Login'))
  }

  logout() {
    this.router.navigate(['login'])
  }
}
