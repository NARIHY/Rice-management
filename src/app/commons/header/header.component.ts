import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;

  //ALL of my menu
  menuItems = [
    { path: '/home', label: 'Accueil' },
    { path: '/information', label: 'Information' },
    { path: '/contact', label: 'Nous contacter' },
    { path: '/register', label: "S'inscrire" },
    { path: '/login', label: 'Connexion' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Attendre la durée de l'animation CSS avant de changer l'état du menu
    if (this.isMenuOpen) {
      setTimeout(() => {
        this.isMenuOpen = true;
      }, 300); // Délai correspondant à la durée de l'animation
    } else {
      this.isMenuOpen = false;
    }
  }

  ngOnInit(): void {

  }

}
