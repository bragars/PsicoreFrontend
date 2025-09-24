import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { from, map, Observable } from 'rxjs';
import axios, { AxiosInstance } from 'axios';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private axiosInstance: AxiosInstance;
    private axiosNoAuth: AxiosInstance;
    private cookieService = inject(CookieService);

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:8080',
            timeout: 10000,
        });

        this.axiosInstance.interceptors.request.use(
            (config) => {
                const token = this.cookieService.get('token');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        this.axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => {
                console.error('API Error:', error);
                return Promise.reject(error);
            }
        );

        this.axiosNoAuth = axios.create({
            baseURL: 'http://localhost:8080',
            timeout: 10000,
        });
    }

    get<T>(url: string, config?: any): Observable<T> {
        return from(this.axiosInstance.get<T>(url, config)).pipe(map(res => res.data));
    }

    post<T>(url: string, data?: any, config?: any) {
        return this.axiosInstance.post<T>(url, data, config);
    }

    put<T>(url: string, data?: any, config?: any) {
        return this.axiosInstance.put<T>(url, data, config);
    }

    delete<T>(url: string, config?: any) {
        return this.axiosInstance.delete<T>(url, config);
    }

    // login and register
    postNoAuth<T>(data?: any, config?: any): Observable<T> {
        return from(this.axiosNoAuth.post<T>(data, config)).pipe(map(res => res.data));
    }
}
