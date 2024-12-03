import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  ClientClientCollectionGetClientCollectionPostClientCollectionPutGenderCollectionGetCinCollectionPostCinCollectionGet, ClientClientCollectionPut, ClientService } from 'src/app/rest';


@Component({
  selector: 'app-client-modification',
  templateUrl: './client-modification.component.html',
  styleUrls: ['./client-modification.component.css']
})
export class ClientModificationComponent {
  @Input() client: ClientClientCollectionGetClientCollectionPostClientCollectionPutGenderCollectionGetCinCollectionPostCinCollectionGet | null; // Injection des données du client
  @Input() clientId: string = "";
  clientForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    public modalService: NgbModal
  ) {
    this.clientForm = this.fb.group({
      address: ['', [Validators.required]],
    });
    this.client = this.loadClientData();
  }

  ngOnInit(): void {
    if (this.client) {
      this.clientForm.patchValue({
        address: this.client.address,
        // Mettez ici les valeurs par défaut à partir du client
      });

    }
  }



  submitForm() {
    if (this.clientForm.valid) {
      if(this.client) {
        console.log(this.client)
        console.log(this.clientId)
        // Créer un objet de mise à jour à partir des données du formulaire
        const updatedClient: ClientClientCollectionPut = {
          address: this.clientForm.value.address,
        };

        this.clientService.updateClient(this.clientId, updatedClient).subscribe(
          response => {
            this.modalService.dismissAll()
          }
        );
      }
    }
  }

  private loadClientData(): ClientClientCollectionGetClientCollectionPostClientCollectionPutGenderCollectionGetCinCollectionPostCinCollectionGet | null {
    return null;
  }

}
