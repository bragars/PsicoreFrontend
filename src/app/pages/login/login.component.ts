import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  styleUrls: ['./login.component.scss']
})

export class Login implements OnInit {
  data: any;
  loginForm!: FormGroup;

  constructor(private service: AuthenticationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }

  onSubmit() {
    if (!this.loginForm.valid) return;

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.service.login({ username, password }).subscribe((response: any) => {
      console.log(response);
    })
  }
}
