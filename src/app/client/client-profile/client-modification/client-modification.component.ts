import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientJsonldClientCollectionPut, ClientService } from 'src/app/rest';
import { Client } from 'src/app/rest/model/client';

@Component({
  selector: 'app-client-modification',
  templateUrl: './client-modification.component.html',
  styleUrls: ['./client-modification.component.css']
})
export class ClientModificationComponent {
  @Input() client: Client | null; // Injection des données du client
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
        const updatedClient: ClientJsonldClientCollectionPut = {
          address: this.clientForm.value.address,
        };

        this.clientService.apiClientsIdPut(this.clientId, updatedClient).subscribe(
          response => {
            this.modalService.dismissAll()
          }
        );
      }
    }
  }

  private loadClientData(): Client | null {
    return null;
  }

}
