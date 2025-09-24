import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private dataService: AuthenticationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const formData = this.registerForm.value;
    console.log(formData);
    const email = formData.email;
    const password = formData.password;
    const username = formData.username;

    this.dataService.register({ email, username, password }).subscribe((response) => {
      console.log(response);
    });
  }
}
