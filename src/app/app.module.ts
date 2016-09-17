import { AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RTSelectionModule, RTModule, RTFiltersModule } from 'right-angled';
import { HeaderComponent } from './layout/header.component';
import { UsersComponent } from './users/users.component';

import { AppComponent }  from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, HeaderComponent, UsersComponent],
    imports: [BrowserModule, HttpModule],
   // exports: [RTModule],
    providers: [
        AUTH_PROVIDERS,
        provideAuth({
            tokenName: 'jwt',
            globalHeaders: [{'Content-Type': 'application/json'}],
            noJwtError: true,
            noTokenScheme: true
        }),
        AuthService
    ]
})
export class AppModule { }
