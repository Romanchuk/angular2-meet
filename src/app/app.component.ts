import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [HeaderComponent]
})
export class AppComponent implements OnInit {
    constructor() {
        console.log('App constructor');
     }

    ngOnInit() {
        console.log('App ngOnInit');
    }
};
