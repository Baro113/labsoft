import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';




const routes: Routes = [
  {path:"" , redirectTo: 'login', pathMatch: "full"},
  {path:"login" , component: LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"dashboard" , component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
