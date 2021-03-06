import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { User } from './users.model';


@Injectable()
export class UsersService {
    constructor (private http: Http) {}
    private usersUrl = 'https://api.github.com/users';  // URL to web API
    getUsers (): Observable<User[]> {
        return this.http.get(this.usersUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
 }


