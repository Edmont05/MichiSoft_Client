import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
import { SidebarModule } from '../sidebar/sidebar.module';



@NgModule({
  declarations: [
    AddClassroomComponent
  ],
  imports: [
    CommonModule,
    SidebarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ClassroomModule { }
