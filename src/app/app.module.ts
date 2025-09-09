import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Login } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentCardComponent } from './components/document-card/document-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginForm } from './components/login-form/login-form.component';
import { MaterialModule } from './material.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    HeaderComponent,
    RegisterComponent,
    DocumentsComponent,
    DocumentCardComponent,
    LoginForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent, LoginForm, Login]
})

export class AppModule { }
