import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private api: ApiService) { }

    createUser(userData: any) {
        return this.api.post(`/api/v1/users`, userData);
    }

    getUser(userId: string) {
        return this.api.get(`/api/v1/users/${userId}`);
    }

    getUserDocs(userId: string) {
        return this.api.get(`/api/v1/users/${userId}`);
    }

    getAllUser() {
        return this.api.get(`/api/v1/users`);
    }

    updateUser(userId: string, userData: any) {
        return this.api.put(`/api/v1/users/${userId}`, userData);
    }

    deleteUser(userId: string) {
        return this.api.delete(`/api/v1/patients/${userId}`);
    }

    // Patient
    createPatient(userData: any) {
        return this.api.post(`/api/v1/patients`, userData);
    }

    getPatient(userId: string) {
        return this.api.get(`/api/v1/patients/${userId}`);
    }

    getAllsPatient() {
        return this.api.get(`/api/v1/patients`);
    }

    updatePatient(userId: string, userData: any) {
        return this.api.put(`/api/v1/patients/${userId}`, userData);
    }

    deletePatient(userId: string) {
        return this.api.delete(`/api/v1/patients/${userId}`);
    }

    // Therapist
    createTherapist(userData: any) {
        return this.api.post(`/api/v1/therapists`, userData);
    }

    getPatTherapist(userId: string) {
        return this.api.get(`/api/v1/therapists/${userId}`);
    }

    getAllTherapist() {
        return this.api.get(`/api/v1/therapists`);
    }

    updateTherapist(userId: string, userData: any) {
        return this.api.put(`/api/v1/therapists/${userId}`, userData);
    }

    deleteTherapist(userId: string) {
        return this.api.delete(`/api/v1/therapists/${userId}`);
    }
}
