import { Component, OnInit } from '@angular/core';
import { AuthService } from './authService';
import { HeaderComponent } from './header.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [AuthService],
    directives: [HeaderComponent]
})
export class AppComponent implements OnInit {

    constructor(private authService: AuthService) {
        console.log('App constructor');
    }

    ngOnInit() {
        console.log('App ngOnInit');
        this.authService.login('gonto', 'gonto');
    }
 }
