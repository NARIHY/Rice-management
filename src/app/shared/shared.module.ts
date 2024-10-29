import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuClientComponent } from '../commons/menu-client/menu-client.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    MenuClientComponent // Declare the component here
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NgbModule,
    RouterModule
  ],
  exports: [
    MenuClientComponent // Export the component so it can be used in other modules
  ]
})
export class SharedModule {}
