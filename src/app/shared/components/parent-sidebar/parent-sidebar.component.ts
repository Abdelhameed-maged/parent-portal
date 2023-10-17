import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserStoreService } from '../../services/user-store.service';
import { User } from 'src/app/api';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-parent-sidebar',
  templateUrl: './parent-sidebar.component.html',
  styleUrls: ['./parent-sidebar.component.scss']
})
export class ParentSidebarComponent implements OnInit, OnDestroy {
  display: boolean
  userData: User;
  userDatasubscription: Subscription;
  constructor(private userStoreService: UserStoreService) { }

  ngOnInit(): void {
   this.userDatasubscription = this.userStoreService.getUserData().subscribe({
      next: (user) => {
        this.userData = user;
        this.display = Boolean(user?.email);
      }
    })
  }

  clear() {
    this.userStoreService.clearUserData()
  }

  ngOnDestroy(): void {
    this.userDatasubscription?.unsubscribe?.();
  }
}
