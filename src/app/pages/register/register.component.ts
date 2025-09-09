import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
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
      // Form is invalid, handle the error or display a message
      return;
    }

    const formData = this.registerForm.value;
    console.log(formData);
    // const email = formData.email;
    const password = formData.password;
    const username = formData.username;

    this.dataService.register({ username, password }).subscribe((response) => {
      console.log(response);
    });
  }
}
