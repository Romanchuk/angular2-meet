import { Component, OnInit } from '@angular/core';
import { AuthService } from './authService';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 1 App</h1>',
    providers: [AuthService]
})
export class AppComponent implements OnInit {

    constructor(private authService: AuthService){
    }

    ngOnInit(){
        this.authService.login('gonto', 'gonto');
    }

 }
