import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { Login } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './auth.guard';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { JournalComponent } from './pages/journal/journal.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'login', component: Login },
  { path: 'register', component: RegisterComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
