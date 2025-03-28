import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
const routes: Routes = [  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Reindirizza alla login page
  { path: 'login', component: LoginComponent }, // Rotta per il login
  { path: 'dashboard', component: DashboardComponent } // Rotta per la dashboard
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
