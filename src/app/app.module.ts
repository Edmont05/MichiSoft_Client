
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationModule } from './reservation/reservation.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbdDatepickerPopupComponent } from './components/ngbd-datepicker-popup/ngbd-datepicker-popup.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    NgbdDatepickerPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ReservationModule,
    AuthenticationModule,
    BrowserModule,
    FormsModule,
    NgbModule
  ],  
  exports: [NgbdDatepickerPopupComponent],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }