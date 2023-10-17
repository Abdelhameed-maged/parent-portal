import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedComponent } from './protected.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from '../public/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProtectedComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Users List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
