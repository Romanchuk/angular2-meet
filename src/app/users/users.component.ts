import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: 'users.component.html',
    providers: [UsersService]
})
export class UsersComponent implements OnInit {
    constructor (private userService: UsersService) {}
    public loadData = (): any => {
        return this.userService.getUsers();
    };

    ngOnInit() {
        return this.userService.getUsers();
    };
 }


