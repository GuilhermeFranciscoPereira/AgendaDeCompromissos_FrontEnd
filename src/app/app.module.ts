import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableAgendasComponent } from './components/table-agendas/table-agendas.component';
import { ButtonEditComponent } from './components/Buttons/button-edit/button-edit.component';
import { ButtonDeleteComponent } from './components/Buttons/button-delete/button-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { formToAgendaComponent } from './components/form-to-agenda/form-to-agenda.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableAgendasComponent,
    ButtonEditComponent,
    ButtonDeleteComponent,
    formToAgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
