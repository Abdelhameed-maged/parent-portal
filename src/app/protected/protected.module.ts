import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedComponent } from './protected.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    ProtectedComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    SkeletonModule
  ]
})
export class ProtectedModule { }
