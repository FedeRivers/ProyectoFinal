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
import { SobreComponent } from './Components/Sobre/sobre.component';
import { IngresarHumedadComponent } from './Components/IngresarHumedad/ingresarHumedad.component';
import { IngresarGerminacionComponent } from './Components/IngresarGerminacion/ingresarGerminacion.component';
import { BuscarDuplicadosComponent } from './Components/BuscarDuplicados/buscarDuplicados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertaComponent } from './Components/Alerta/alerta.component';
import { EstadisticaComponent } from './Components/Estadistica/estadistica.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DatosPersonalesComponent } from './Components/DatosPersonales/datosPersonales.component';
import { SecadoComponent } from './Components/secado/secado.component';
import { DevolucionComponent } from './Components/Devolucion/devolucion.component';
import { ModalqrComponent } from './Components/Modal/modalqr/modalqr.component';


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
    SobreComponent,
    IngresarHumedadComponent,
    IngresarGerminacionComponent,
    BuscarDuplicadosComponent,
    AlertaComponent,
    EstadisticaComponent,
    DatosPersonalesComponent,
    SecadoComponent,
    DevolucionComponent,
    ModalqrComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
