import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { ContactControllerService } from 'src/app/back-end/api/contact.controller.service';
import { Contact } from 'src/app/back-end/models/contact';
import { ContactPost } from 'src/app/back-end/models/post/contactPost';
import { staticTextFR } from 'src/app/text/staticText';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  // bug contact form
  contact: ContactPost | null = null;
  contactForm: FormGroup;
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';

  // staticText
  staticText = staticTextFR;

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.contactForm.valid) {
      console.log(this.contactForm.value)
      this.isLoading = false;
      this.contactControllerService.postContact(this.getValue(this.contactForm)).subscribe(
        (success) => {
          this.removevalue(this.contactForm);
          this.showModal = true;
          this.modalTitle = 'Success';
          this.modalMessage = 'Contact sent!!!';
        },
        (error) => {
          this.showModal = true;
          this.modalTitle = 'Error';
          this.modalMessage = 'Somethings wrong';
        },
        () => {
          this.loader();
        }
      );
    }
  }

  //example of using loader
  isLoading: boolean = false;
  constructor(private router: Router, private fb: FormBuilder, private contactControllerService: ContactControllerService) {
    this.loader();
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      message: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]]
    }); // Set the validator for the FormGroup
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

  private getValue(fg: FormGroup): ContactPost {
    return this.contact = {
      name: fg?.get('name')?.value,
      lastName: fg?.get('lastName')?.value,
      email: fg?.get('email')?.value,
      subject: fg?.get('subject')?.value,
      message: fg?.get('message')?.value,
      phoneNumber:fg?.get('phoneNumber')?.value
    };
  }

  private removevalue(fg: FormGroup): void {
    fg?.get('name')?.setValue(''),
    fg?.get('lastName')?.setValue(''),
    fg?.get('email')?.setValue(''),
    fg?.get('subject')?.setValue(''),
    fg?.get('message')?.setValue(''),
    fg?.get('phoneNumber')?.setValue('')
  }

}
