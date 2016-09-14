import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    constructor(private auth: AuthService) {
        console.log('Header constructor');
     }

    isAuthenticated():boolean{
        return this.auth.isAuthenticated()
    }

    logout(){
        this.auth.logout();
        this.isAuthenticated();
    }

    ngOnInit() {
        console.log('Header ngOnInit');
     }
}
