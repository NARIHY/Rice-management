import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../services/token-interceptor.service';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardClientComponent,
    ClientProfileComponent
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
