import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GroupMenu , Menu } from 'src/app/commons/menu-client/menu-client.component';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

}
