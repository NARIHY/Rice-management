import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GroupMenu , Menu } from 'src/app/commons/menu-client/menu-client.component';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {

  isLoading: boolean = false;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loader()
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
