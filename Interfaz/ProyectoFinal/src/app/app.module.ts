import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MejoradorComponent } from './Components/Mejorador/mejorador.component';
import { UsuarioComponent } from './Components/Usuario/usuario.component';
import { ModalComponent } from './Components/Modal/modal.component';
import { TipoDeUsuarioComponent } from './Components/TipoDeUsuario/tipoDeUsuario.component';
import { TaxonomiaComponent } from './Components/Taxonomia/taxonomia.component';
import { LoteComponent } from './Components/Lote/lote.component';
import { SemillaComponent } from './Components/Semilla/semilla.component';









@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    MejoradorComponent,
    ModalComponent,
    TipoDeUsuarioComponent,
    TaxonomiaComponent,
    LoteComponent,
    SemillaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
