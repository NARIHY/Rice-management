import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HeaderComponent } from './commons/header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from './commons/footer/footer.component';
import { LoaderComponent } from './commons/loader/loader.component';
import { ContactFormComponent } from './commons/contact-form/contact-form.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanneComponent } from './commons/panne/panne.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './public/home/home.component';
import { InformationComponent } from './public/information/information.component';
import { ImageCarrousselComponent } from './commons/image-carroussel/image-carroussel.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ContactFormComponent,
    PanneComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    InformationComponent,
    ImageCarrousselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
