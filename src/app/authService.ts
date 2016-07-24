import { Http, Response } from '@angular/http';
// services/auth.service.ts
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

constructor(private http: Http) {
}

  // authenticated() {
    // Check if there's an unexpired JWT
   // return tokenNotExpired();
  //}

 login(username: string, password: string) {   
    this.http.post('http://localhost:3001/api/login', {
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