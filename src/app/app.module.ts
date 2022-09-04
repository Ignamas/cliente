import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GroupsComponent } from './groups/groups.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PartidosHoyComponent } from './partidos-hoy/partidos-hoy.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SedesComponent } from './sedes/sedes.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GroupsComponent,
    AsideComponent,
    HomeComponent,
    PartidosHoyComponent,
    NoticiasComponent,
    SedesComponent,
    AdminComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
