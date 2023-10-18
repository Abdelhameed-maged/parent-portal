import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { UserStoreService } from '../../services/user-store.service';
import { User } from 'src/app/api';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-parent-sidebar',
  templateUrl: './parent-sidebar.component.html',
  styleUrls: ['./parent-sidebar.component.scss']
})
export class ParentSidebarComponent implements OnInit, OnDestroy {
  display: boolean
  userData: User;
  userDatasubscription: Subscription;
  @Output() deletUser = new EventEmitter<User>();
  @Output() editUser = new EventEmitter<User>();

  constructor(private userStoreService: UserStoreService) { }

  ngOnInit(): void {
    this.userDatasubscription = this.userStoreService.getUserData().subscribe({
      next: (user) => {
        this.userData = user;
        this.display = Boolean(user?.email);
      }
    })
  }

  delete() {
    this.deletUser.emit(this.userData);
    this.clear();
  }

  edit() {
    this.editUser.emit(this.userData);
  }

  clear() {
    this.userStoreService.clearUserData()
  }

  ngOnDestroy(): void {
    this.userDatasubscription?.unsubscribe?.();
  }
}
