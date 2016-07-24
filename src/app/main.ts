import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(AuthHttp, {
      useFactory: (http: any) => {
        return new AuthHttp(new AuthConfig({
          tokenName: 'jwt',
          globalHeaders: [{'Content-Type':'application/json'}],
          noJwtError: true
        }), http);
      },
      deps: [Http]
    })
]);
