import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService.service';
import { staticTextFR } from 'src/app/text/staticText';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  registerForm: FormGroup;
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  staticTextFr = staticTextFR;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
      password_confirmation: ['', Validators.required]
    }, { validators: this.passwordsMatch }); // Set the validator for the FormGroup
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;

      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;

      this.authService.register(email, password).subscribe(
        (response) => {
          this.showModal = true;
          this.modalTitle = 'Success';
          this.modalMessage = 'Registration successful! You can now log in.';
          this.resetForm();
        },
        (error) => {
          console.error('Registration failed', error);
          this.showModal = true;
          this.modalTitle = 'Error';
          this.modalMessage = error.error?.error || 'Registration failed. Please try again.';
        },
        () => {
          this.isLoading = false; // Stop loading on completion
        }
      );
    }
  }

  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password) ? null : { complexity: true };
  }

  passwordsMatch(formGroup: AbstractControl): { [key: string]: boolean } | null {
    return formGroup.get('password')?.value === formGroup.get('password_confirmation')?.value
      ? null : { mismatch: true };
  }

  private resetForm() {
    this.registerForm.reset();
    this.registerForm.clearValidators(); // Clear validators on reset
    this.registerForm.setValidators(this.passwordsMatch); // Reapply group validators
    this.registerForm.updateValueAndValidity(); // Update the form validity
  }

}
