import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.logout()
  }

  logout(): void {
    if(this.verifyToken()) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      this.router.navigateByUrl('home')
    }
  }

  private verifyToken(): boolean {
    if (localStorage.getItem('token')){
      return true;
    }
    return false;
  }
}
