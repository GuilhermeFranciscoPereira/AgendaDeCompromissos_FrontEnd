import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableAgendasComponent } from './table-agendas/table-agendas.component';
import { ButtonEditComponent } from './button-edit/button-edit.component';
import { ButtonDeleteComponent } from './button-delete/button-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableAgendasComponent,
    ButtonEditComponent,
    ButtonDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
