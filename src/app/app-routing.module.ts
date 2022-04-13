import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { AddClassroomComponent } from './classroom/add-classroom/add-classroom.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { AddTopicComponent } from './topic/add-topic/add-topic.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'menu',component: MenuComponent},
  {path: 'add-teacher',component: AddTeacherComponent},
  {path: 'add-classroom',component: AddClassroomComponent},
  {path: 'add-topic',component: AddTopicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
