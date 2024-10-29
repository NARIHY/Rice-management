import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rice-management';


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
