import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { NgbAccordionDirective } from '@ng-bootstrap/ng-bootstrap';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface GroupMenu {
  name: string;
  icon?: string; // Classe d'icône Bootstrap
  menus: Menu[];
}
/**
 * The name of the menu should be the same of the name of the url
 */
export interface Menu {
  name: string;
  displayName: string;
  icon: string; // Classe d'icône Bootstrap
  isSelected: boolean;
  link: any[]; // Lien de navigation
}

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.css']
})
export class MenuClientComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('acc') accordion!: NgbAccordionDirective; // Référence à l'accordéon

  private subscription!: Subscription; // Subscription pour les événements de navigation

  // Initialisation des menus
  menus: GroupMenu[] = [
    {
      name: 'Dashboard',
      icon: 'bi bi-house',
      menus: [
        {
          name: 'dashboard',
          icon: 'bi bi-house',
          displayName: 'Dashboard',
          isSelected: false,
          link: ['', { outlets: { primary: 'client/dashboard' } }]
        },
        {
          name: 'overview',
          displayName: 'Overview',
          icon: 'bi bi-info-circle',
          isSelected: false,
          link: ['', { outlets: { primary: 'client/Overview' } }]
        },
        {
          name: 'statistics',
          displayName: 'Statistics',
          icon: 'bi bi-bar-chart',
          isSelected: false,
          link: ['', { outlets: { primary: 'client/Statistics' } }]
        }
      ]
    },
    {
      name: 'settings',
      icon: 'bi bi-gear',
      menus: [
        {
          name: 'profile',
          displayName: 'Profile',
          icon: 'bi bi-person',
          isSelected: false,
          link: ['', { outlets: { primary: 'client/Profile' } }]
        },
        {
          name: 'security',
          displayName: 'Security',
          icon: 'bi bi-shield-lock',
          isSelected: false,
          link: ['', { outlets: { primary: 'client/Security' } }]
        }
      ]
    }
  ];

  activeGroup: string | null = null; // Pour gérer le groupe actif

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkSelected(this.router.url);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.checkSelected(this.router.url);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private checkSelected(url: string) {
    let found = false;

    for (const g of this.menus) {
      for (const m of g.menus) {
        if (url.includes(m.name)) {
          m.isSelected = true;
          this.accordion.expand(g.name);
        } else {
          m.isSelected = false;
        }
      }
    }

    if (!found) {
      this.activeGroup = null;
    }
  }

  toggleGroup(groupName: string) {
    if (this.activeGroup === groupName) {
      this.activeGroup = null;
    } else {
      this.activeGroup = groupName;
    }
  }
}
