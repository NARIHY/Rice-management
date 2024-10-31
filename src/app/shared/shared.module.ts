import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuClientComponent } from '../commons/menu-client/menu-client.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoutComponent } from '../commons/logout/logout.component';
import { HeaderAdminComponent } from '../commons/header-admin/header-admin.component';
import { LoaderComponent } from '../commons/loader/loader.component';
@NgModule({
  declarations: [
    MenuClientComponent,
    LogoutComponent,
    HeaderAdminComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NgbModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    MenuClientComponent,
    LogoutComponent,
    HeaderAdminComponent,
    LoaderComponent
  ]
})
export class SharedModule {}
