import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { LoginComponent } from './components/login/login.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { MisProyectosComponent } from './components/mis-proyectos/mis-proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    BannerComponent,
    HomeComponent,
    EducacionComponent,
    ExperienciaComponent,
    AcercaDeComponent,
    LoginComponent,
    HabilidadesComponent,
    MisProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
