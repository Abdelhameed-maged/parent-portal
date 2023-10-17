import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class PublicModule { }
