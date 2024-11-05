import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CapitalizeFirstLetterPipe } from '../pipe/capitalize-first-letter.pipe';


@NgModule({
  declarations: [
    DashboardClientComponent,
    ClientProfileComponent,
    CapitalizeFirstLetterPipe
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
