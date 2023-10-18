import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentHeaderNavMenuComponent } from './components/parent-menu/parent-header-nav-menu.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AuthService } from './services/auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ParentBreadcrumbComponent } from './components/parent-breadcrumb/parent-breadcrumb.component';
import { ParentSidebarComponent } from './components/parent-sidebar/parent-sidebar.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { UserStoreService } from './services/user-store.service';

@NgModule({
  declarations: [
    ParentHeaderNavMenuComponent,
    ParentBreadcrumbComponent,
    ParentSidebarComponent,
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    ToastModule,
    RouterModule,
    BreadcrumbModule,
    SidebarModule
  ],
  providers: [
    AuthService,
    MessageService,
    UserStoreService
  ],
  exports: [
    ParentHeaderNavMenuComponent,
    ParentBreadcrumbComponent,
    ParentSidebarComponent,
    ToastModule,
    SidebarModule,
    ButtonModule
  ]
})
export class SharedModule { }
