import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddReservationComponent } from './reservation/components/add-reservation/add-reservation.component';
const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'menu',component: MenuComponent},
  {path: 'add-reservation', component: AddReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
