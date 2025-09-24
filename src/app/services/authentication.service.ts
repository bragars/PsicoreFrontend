import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private cookieService = inject(CookieService);
    private readonly AUTH_TOKEN_KEY = 'token';

    constructor(private api: ApiService) { }

    storeToken(token: string): void {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);

        this.cookieService.set(this.AUTH_TOKEN_KEY, token, {
            expires: expirationDate,
            path: '/',
            secure: true,
            sameSite: 'Lax',
        });
    }

    logout(): void {
        this.cookieService.delete(this.AUTH_TOKEN_KEY, '/');
    }

    isAuthenticated(): boolean {
        const token = this.cookieService.get(this.AUTH_TOKEN_KEY);
        console.log(token)

        if (!token) {
            return false;
        }

        try {
            const decodedToken = jwtDecode(token);
            console.log(decodedToken);
            if (typeof decodedToken?.exp !== 'number') {
                return false;
            }
            const isExpired = decodedToken.exp * 1000 < Date.now();
            return !isExpired;
        } catch (error) {
            return false;
        }
    }

    getToken(): string | null {
        return this.cookieService.get(this.AUTH_TOKEN_KEY) || null;
    }

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
