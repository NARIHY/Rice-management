import { Component, OnInit } from '@angular/core';
import { staticTextFR } from '../../text/staticText';
import { UserService } from '../../rest/api/user.service';
import { UserReadUser } from 'src/app/rest';

interface MenuItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  isMenuOpen = false;
  isDropdownOpen = false; // Ajouté pour gérer l'affichage du dropdown
  staticTextFR = staticTextFR;
  userIdentifier: string | null = null;
  menuItems: MenuItem[] = [
    { label: 'Accueil du site', path: '/' }
  ];
  dashboardTitle: string = '';
  user: UserReadUser | null = null;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.loadUserData();
    // si admin alors afficher Rice Management Client si admin alors on affiche Rice management Admin
    this.dashboardTitle = "Rice Management Client";
  }

  loadUserData() {
    this.userService.getUserConnected().subscribe(
      (response: Array<UserReadUser>) => {
        this.user = response[0];
        // Vérifiez que l'utilisateur est défini et extrait userIdentifier
        if (this.user) {
          this.userIdentifier = this.user.email ?? null; // Accéder à userIdentifier
        }
      }
    );
  }

  extractUsername(): string {
    if (!this.user || !this.user.email) {
      return ''; // Retourne une chaîne vide si user ou userIdentifier est null/undefined
    }

    const userIdentifier = this.user.email;
    const atIndex = userIdentifier.indexOf('@');
    if (atIndex !== -1) {
      return userIdentifier.substring(0, atIndex);
    }
    return userIdentifier; // Retourne l'email complet si le format est incorrect
  }



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    // Logique de déconnexion ici
    console.log('Déconnexion');
  }
}
