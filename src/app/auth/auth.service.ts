import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: Http) {}

  getUser() {
    return JSON.parse(localStorage.getItem('profile'));
  }

  isAuthenticated(): boolean {
    return tokenNotExpired();
  }

 login(username: string, password: string) {
    return this.http.post('http://localhost:3001/api/login', {
        username: username,
        password: password
      }
    ).subscribe(
          response => {
            let body = response.json();
            // We get a profile object for the user from Auth0
            localStorage.setItem('profile', JSON.stringify(body.profile));
            // We also get the user's JWT
            localStorage.setItem('id_token', body.id_token);
          },
          error => {
            if (error) {
              console.log(error);
            }
          }
        );
 }

 logout() {
   // To log out, we just need to remove
   // the user's profile and token
   localStorage.removeItem('profile');
   localStorage.removeItem('id_token');
 }
}
