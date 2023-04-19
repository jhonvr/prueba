import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from '../shared/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  group: FormGroup;
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.group = this.fb.group({
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit() {}

  send = () => {
    this.loginService.login().subscribe({
      next: (value) => {
          if(value.status === 200) {
            this.router.navigate(['/dashboard']);
          }
      },
      error: (err) =>{

      },
    })
  };

}
