import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(module => module.PublicModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./protected/protected.module').then(module => module.ProtectedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
