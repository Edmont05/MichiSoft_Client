import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AddReservationComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,    
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ReservationModule { }
