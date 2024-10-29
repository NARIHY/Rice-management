import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


  ngOnInit(): void {
  }

  onSubmit() {
    alert('Formulaire soumis avec succès !');
  }

  //example of using loader
  isLoading: boolean = false;
  constructor(private router: Router) {
    this.loader();
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

}
