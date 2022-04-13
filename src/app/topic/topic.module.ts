import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { SidebarModule } from '../sidebar/sidebar.module';



@NgModule({
  declarations: [
    AddTopicComponent
  ],
  imports: [
    CommonModule,
    SidebarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TopicModule { }
