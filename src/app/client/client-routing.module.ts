import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';

const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch:'full' },
  { path:'dashboard', component: DashboardClientComponent },
  { path: 'profile-client', component: ClientProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
