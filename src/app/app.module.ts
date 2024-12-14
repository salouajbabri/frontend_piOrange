import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Importer AppRoutingModule
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, // Déclarez vos composants ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Gestion du routage
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LoginService], // Ajoutez les services nécessaires ici
  bootstrap: [AppComponent], // Composant principal
})
export class AppModule { }
