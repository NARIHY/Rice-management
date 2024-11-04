import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiMeGetCollection200Response, ClientClientCollectionPostClientCollectionPut, UserService } from 'src/app/rest';
import { AuthService } from 'src/app/services/AuthService.service';
import { ClientService } from '../../rest/api/client.service';
import { GenderManagementService } from '../../rest/api/genderManagement.service';
import { GenderManagementClientCollectionGetClientCollectionPostClientCollectionPutGenderCollectionGet } from '../../rest/model/genderManagementClientCollectionGetClientCollectionPostClientCollectionPutGenderCollectionGet';
import { ApiGendersGetCollection200Response } from '../../rest/model/apiGendersGetCollection200Response';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  user: ApiMeGetCollection200Response | null = null;
  isLoading: boolean = false;
  genders:  ApiGendersGetCollection200Response[] = [];
  clientForm: FormGroup;

  constructor(private userService: UserService,private fb: FormBuilder, private clientService:  ClientService, private genderManagements :GenderManagementService) {

    this.clientForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      cin: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      address: ['', [Validators.required]],
      gender: [null] // Peut être null si non requis
    });
  }

  ngOnInit(): void {
    this.getUserData();
    this.getGenders();
  }

  loader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  getUserData() {
    this.loader(); // Démarrer le loader avant de faire l'appel
    this.userService.apiMeGetCollection().subscribe(
      (response: ApiMeGetCollection200Response) => {
        this.user = response; // Assurez-vous que response a la bonne structure
        this.isLoading = false; // Arrêter le loader après avoir reçu la réponse

        // Vérifiez que l'utilisateur est défini et traitez les membres
        if (this.user) {
          // Vous pouvez également accéder à userIdentifier ici si nécessaire
          console.log('User Identifier:', this.user.userIdentifier);
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des données:', error);
        this.isLoading = false; // Arrêter le loader en cas d'erreur
      }
    );
  }

  isNewClient(): boolean {
    return !this.user?.member || this.user.member.length === 0;
  }

  submitNewClient() {
    if (this.clientForm.valid) {
      const newClient: ClientClientCollectionPostClientCollectionPut = this.clientForm.value;
      this.clientService.apiClientsPost(newClient).subscribe(
        response => {
          console.log('Client créé avec succès:', response);
          this.resetForm();
        },
        error => {
          console.error('Erreur lors de la création du client:', error);
        }
      );
    } else {
      console.log('Formulaire invalide', this.clientForm.errors);
    }
  }

  resetForm() {
    this.clientForm.reset();
  }

  getGenders() {
    this.genderManagements.apiGendersGetCollection().subscribe(
      (response: ApiGendersGetCollection200Response) => {
        this.genders.push(response);
        console.log(this.genders)
      }
    );
  }
}
