import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {


  isLoading: boolean = false;
  registerForm: FormGroup;
  flashMessage : any = "";
  user: [] = [];
   // Propriétés pour le modal
   showModal: boolean = false;
   modalTitle: string = '';
   modalMessage: string = '';


  constructor(private fb: FormBuilder, private router: Router) {
    this.loader();
    this.registerForm = this.fb.group({
      name: ['',  Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),this.passwordValidator]],
      password_confirmation: ['', Validators.required]
    });
  }

  ngOnInit(): void {

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

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.loader();

      const name = this.registerForm.get('name')?.value;
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      const password_confirmation = this.registerForm.get('password_confirmation')?.value;
      const gender = this.registerForm.get('gender')?.value;


    }
  }


  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password) ? null : { complexity: true };
  }

  passwordsMatch(formGroup: FormGroup): { [key: string]: boolean } | null {
    return formGroup.get('password')?.value === formGroup.get('password_confirmation')?.value
      ? null : { mismatch: true };
  }


  private resetForm() {
    this.registerForm.reset(); // Réinitialiser le formulaire
  }

}
