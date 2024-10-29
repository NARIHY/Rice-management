import { Component, OnInit, Input, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { NgbAccordionDirective } from '@ng-bootstrap/ng-bootstrap';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface GroupMenu {
  name: string;
  icon?: string; // This will be the Bootstrap icon class
  menus: Menu[];
}

export interface Menu {
  name: string;
  displayName: string;
  icon: string; // This will also be a Bootstrap icon class
  isSelected: boolean;
  link: any[];
}

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.css']
})
export class MenuClientComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() menus!: GroupMenu[];
  @ViewChild('acc') accordion!: NgbAccordionDirective;

  subscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkSelected(this.router.url);
    });
  }

  ngAfterViewInit(): void {
    this.checkSelected(this.router.url);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private checkSelected(url: string) {
    for (const g of this.menus) {
      for (const m of g.menus) {
        m.isSelected = url.includes(m.name);
        if (m.isSelected) {
          this.accordion.expand(g.name);
        }
      }
    }
  }

  trackByFn(index: number, item: Menu): string {
    return item.name; // Return a unique identifier for the item
  }
}
