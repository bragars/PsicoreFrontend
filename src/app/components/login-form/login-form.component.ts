import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginForm implements OnInit {
  data: any;
  loginForm!: FormGroup;

  constructor(private dataService: AuthenticationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.dataService.login({ username, password }).subscribe((response) => {
        console.log(response);
        this.data = response;
      });
    }
  }
}
