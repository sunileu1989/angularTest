import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistartionComponent } from './registartion/registartion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Registration',
    pathMatch: 'full',
  },
  {path : 'Registration', component : RegistartionComponent},
  {path : 'Home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
