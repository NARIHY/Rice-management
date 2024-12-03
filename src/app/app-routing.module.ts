import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ContactFormComponent } from './commons/contact-form/contact-form.component';
import { HomeComponent } from './public/home/home.component';
import { AuthGuard } from './security/auth.guard';
import { LogoutComponent } from './commons/logout/logout.component';
import { InformationComponent } from './public/information/information.component';
import { MenuClientComponent } from './commons/menu-client/menu-client.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'information', component: InformationComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // A tester
  {path: 'client-menu', component: MenuClientComponent, outlet: 'menu'},
  { path: 'logout', canActivate: [AuthGuard] ,component: LogoutComponent },
  { path: 'client', canActivate: [AuthGuard], title: 'Rice Management: Client',
    loadChildren: () => import('./client/client.module').then((m) => m.ClientModule)
  },
  { path: 'admin', canActivate: [AuthGuard], title: 'Rice Management : Administration',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
