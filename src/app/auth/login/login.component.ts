import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { staticTextFR } from '../../text/staticText';
import { AuthService } from 'src/app/services/AuthService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  staticTextFr = staticTextFR;
  isLoading: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // Changer 'username' à 'email'
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.isLoading = true;
    if (!this.loginForm.valid) {
      console.log('Form not valid');
      this.isLoading = false;
      return;
    }

    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);

        const decodedToken: any = jwtDecode(response.token);
        const roles = Object.values(decodedToken.roles || {});

        // Redirection en fonction des rôles
        if (roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['admin']);
        } else if (roles.includes('ROLE_CLIENT')) {
          this.router.navigate(['client']);
        }
      },
      (error) => {
        console.error('Login failed', error);
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
