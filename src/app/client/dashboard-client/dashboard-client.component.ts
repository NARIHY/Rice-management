import { Component, OnInit } from '@angular/core';
import { GroupMenu , Menu } from 'src/app/commons/menu-client/menu-client.component';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {

  menus: GroupMenu[] = [
    {
      name: 'Group 1',
      icon: 'bi bi-house', // Example Bootstrap icon
      menus: [
        { name: 'item1', displayName: 'Item 1', icon: 'bi bi-star', isSelected: false, link: ['/item1'] },
        { name: 'item2', displayName: 'Item 2', icon: 'bi bi-star', isSelected: false, link: ['/item2'] },
      ]
    },
    {
      name: 'Group 2',
      icon: 'bi bi-gear',
      menus: [
        { name: 'item3', displayName: 'Item 3', icon: 'bi bi-star', isSelected: false, link: ['/item3'] },
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
