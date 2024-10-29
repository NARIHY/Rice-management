import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { LoginCheckPost200Response, LoginCheckService } from 'src/app/rest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  ngOnInit(): void {
  }
  isLoading: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, @Inject(LoginCheckService) private loginCheckService: LoginCheckService) {
    this.loader();
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  loader()
  {
    if(this.isLoading === false) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      console.log('Form not valid');
      return;
    }


    this.loginCheckService.loginCheckPost(this.loginForm.value).subscribe(
      (response: LoginCheckPost200Response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);

        const decodedToken: any = jwtDecode(response.token);
        //Mapping en d'tableau
        const roles = Object.values(decodedToken.roles || {});
        // Redirection en fonction des rôles
        if (Array.isArray(roles) && roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['admin']);
        } else if (Array.isArray(roles) && roles.includes('ROLE_CLIENT')) {
          this.router.navigate(['client']);
        }
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

}
