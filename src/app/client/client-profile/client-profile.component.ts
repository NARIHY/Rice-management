import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../rest/api/client.service';
import { GenderManagementService } from '../../rest/api/genderManagement.service';
import { ClientModificationComponent } from './client-modification/client-modification.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientClientCollectionGetClientCollectionPostClientCollectionPutGenderCollectionGet, GenderManagementGenderCollectionGet, UserReadUser, UserService } from 'src/app/rest';



@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  user: UserReadUser | null = null;
  isLoading: boolean = false;
  genders: GenderManagementGenderCollectionGet[] = []; // Tableau pour stocker les genres
  clientForm: FormGroup;
  cinFields: number[] = new Array(12).fill(0); // Tableau pour les 12 chiffres du CIN
  cinFieldsInvalid: boolean = false;


  // Variables pour afficher l'alerte
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  alertType: string = ''; // 'success' ou 'danger'

  // Id of client
  cllId: string = "";
  // Client
  client?: ClientClientCollectionGetClientCollectionPostClientCollectionPutGenderCollectionGet;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private clientService: ClientService,
    private genderManagementService: GenderManagementService,
    private modalService: NgbModal
  ) {
    // Utilisation de FormControl pour chaque champ de CIN
    const controls: { [key: string]: AbstractControl } = this.cinFields.reduce((acc: { [key: string]: AbstractControl }, _, i) => {
      acc['cin' + i] = new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1),
        Validators.pattern('[0-9]') // Validation pour autoriser uniquement un chiffre
      ]);
      return acc;
    }, {} as { [key: string]: AbstractControl });

    this.clientForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      // Crée 12 contrôles pour chaque chiffre du CIN
      ...controls,
      gender: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getUserData();
    this.loadGenders();
    // this.getClientSaved();
  }

  // Fonction pour gérer le changement d'entrée et déplacer le focus
  onInputChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.value && index < 11) {
      document.getElementById('cin' + (index + 1))?.focus();
    }
    this.checkCinValidity();
  }

  // Vérifie si tous les champs CIN sont remplis correctement
  checkCinValidity() {
    const cinValues = this.cinFields.map((_, i) => this.clientForm.get('cin' + i)?.value);
    const isCinValid = cinValues.every(value => value !== null && value !== '');
    this.cinFieldsInvalid = !isCinValid; // Si un champ est vide, on considère que le CIN est invalide
  }

  // Affichage du loader
  loader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  // Récupération des données de l'utilisateur
  getUserData() {
    this.loader(); // Démarre le loader avant de faire l'appel
    this.userService.apiMeGetCollection().subscribe(
      (response: Array<UserReadUser>) => {
        this.user = response[0];
        // this.getClientSaved();
        this.isLoading = false; // Arrête le loader après réception des données
      }
    );


  }
  // Bug here

  // Vérifie si l'utilisateur est un nouveau client
  isNewClient(): boolean {
    if(this.user) {
      return false;
    }
    return true;
  }

  // Soumission du formulaire pour un nouveau client
  submitNewClient() {
    if (this.clientForm.valid) {
      const cinValues = this.cinFields.map((_, i) => this.clientForm.get('cin' + i)?.value);
      const cinString = cinValues.join('');
      const { cin0, cin1, cin2, cin3, cin4, cin5, cin6, cin7, cin8, cin9, cin10, cin11, ...newClientWithoutCin } = this.clientForm.value;

      const clientData = {
        ...newClientWithoutCin,
        cin: this.formatCin(cinString),
        gender: `api/genders/${this.clientForm.value.gender}`
      };

      this.clientService.apiClientsPost(clientData).subscribe(
        response => {
          this.showAlert('Succès', 'Le client a été créé avec succès !', 'success');
          this.resetForm();
        }
      );
    } else {
      console.log('Formulaire invalide', this.clientForm.errors);
      Object.keys(this.clientForm.controls).forEach(controlName => {
        const control = this.clientForm.get(controlName);
      });
      this.showAlert('Erreur', 'Veuillez remplir correctement tous les champs du formulaire.', 'danger');
    }
  }

  // Fonction pour afficher l'alerte
  showAlert(title: string, message: string, type: string) {
    this.modalTitle = title;
    this.modalMessage = message;
    this.alertType = type;
    this.showModal = true;
  }


  // Réinitialisation du formulaire
  resetForm() {
    this.clientForm.reset();
  }

  // Chargement des genres à partir du service
  loadGenders(): void {
    this.isLoading = true;
    this.genderManagementService.apiGendersGetCollection().subscribe(
      (response: Array<GenderManagementGenderCollectionGet>) => {
        this.genders = response;
        this.isLoading = false;
      }
    );
  }

  rolesArray(): string[] {
    return this.user?.roles ? Object.values(this.user.roles) : [];
  }

  // Bug here
  // getClientSaved() {

  //   if (typeof this.user?.client === 'string') {
  //     const clientId = this.getClientId(this.user?.client);
  //     // Vérifier si clientId est valide avant de faire l'appel
  //     if (clientId) {
  //       this.clientService.apiClientsIdGet(clientId).subscribe(
  //         (response) => {
  //           console.log(response.name)
  //           this.client = response;
  //           this.cllId = clientId;
  //         }
  //       );
  //       console.log(this.client);
  //     }
  //   }
  // }

   // Ouvrir le modal pour la modification du client
   openClientModificationModal() {
    const modalRef = this.modalService.open(ClientModificationComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.client = this.client; // Injection des données du client
    modalRef.componentInstance.clientId = this.cllId;
  }

  // Récupération des membres associés aux genres
  // private getAllMembers(): void {
  //   this.allMembers = []; // Réinitialise la liste des membres
  //   this.genders.forEach(gender => {
  //     if (gender.member && Array.isArray(gender.member)) {
  //       this.allMembers = [...this.allMembers, ...gender.member];
  //     }
  //   });
  // }

  // Fonction pour assembler les chiffres du CIN en une chaîne formatée "xxx xxx xxx xxx"
  private formatCin(cinValues: string): string {
    // Vérifier si la chaîne contient uniquement des chiffres
    if (!cinValues || !/^\d+$/.test(cinValues)) {
      return cinValues; // Si ce n'est pas une chaîne de chiffres, retournez la valeur originale
    }

    // Ajouter un espace tous les 3 chiffres
    const formattedCin = cinValues.replace(/(\d{3})(?=\d)/g, '$1 ');

    return formattedCin;
  }

  private getClientId(url: string): string | null {

    // Utiliser l'expression régulière pour extraire l'ID
    const match = url.match(/\/clients\/(\d+)/);

    if (match) {
      const clientId = match[1]; // Affiche l'ID du client
      return clientId;
    } else {
      return null; // Retourne null si aucune correspondance n'est trouvée
    }
  }

}
