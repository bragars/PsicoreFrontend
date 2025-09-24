import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { Login } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
];
