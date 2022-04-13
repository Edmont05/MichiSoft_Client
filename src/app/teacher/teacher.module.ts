import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { SidebarModule } from '../sidebar/sidebar.module';



@NgModule({
  declarations: [
    AddTeacherComponent
  ],
  imports: [
    CommonModule,
    SidebarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TeacherModule { }
