import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private cookieService = inject(CookieService);

    constructor(private api: ApiService) { }

    login(loginData: any) {
        return this.api.postNoAuth<{ token: string; user: any }>(
            `api/v1/auth/authenticate`,
            loginData
        ).pipe(
            tap(res => {
                if (res.token) {
                    this.cookieService.set('token', res.token);
                }
            })
        );
    }

    register(registerData: any) {
        return this.api.postNoAuth<{ token?: string; user?: any }>(
            `api/v1/auth/register`,
            registerData
        ).pipe(
            tap(res => {
                if (res.token) {
                    this.cookieService.set('token', res.token);
                }
            })
        );
    }
}
