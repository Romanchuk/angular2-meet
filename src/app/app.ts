import { Component, OnInit } from '@angular/core';
import { Header } from "./header"
@Component({
    moduleId: module.id,
    templateUrl: 'app.html',
    directives: [Header]
})
export class App implements OnInit {
    constructor() { }

    ngOnInit() { }

}