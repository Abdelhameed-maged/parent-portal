import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/api';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { UserStoreService } from 'src/app/shared/services/user-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  usersList: Array<User> = [];
  pageNumber: number = 1;
  pageLimit: number = 10;
  infiniteScrollDisabled: boolean = true;
  noMoreData: boolean;
  active: number = -1;
  constructor(
    private title: Title,
    private userService: UsersService,
    private messageService: MessageService,
    private userDataStoreService: UserStoreService
      ) { }

  ngOnInit(): void {
    this.title.setTitle('Users List');
    this.listUsers(this.pageNumber, this.pageLimit);
    this.userDataStoreService.getUserData().subscribe({
      next: (user: User) => this.active = user?.id || -1
    })
  }

  listUsers(page: number, pageLimit: number) {
   const getUser = this.userService.listUsers(page, pageLimit).subscribe({
      next: (res) =>  {
        if (!res.data?.length) {
          this.noMoreData = true;
          this.infiniteScrollDisabled = true;
        }
        this.usersList.push(...res.data as Array<User>);
        this.infiniteScrollDisabled = false;
        getUser?.unsubscribe?.();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Invalid', detail: error.error.error })
        getUser?.unsubscribe?.();
      } 
    });
  }

  onScroll() {
    if (this.noMoreData) return;
    this.infiniteScrollDisabled = true;
    ++this.pageNumber;
    this.listUsers(this.pageNumber, this.pageLimit);
  }

  openUserDetails(user: User) {
    this.userDataStoreService.setUserData(user);
  }

  editUser(user: User) {
    
  }

  deleteUser(user: User) {
    
  }

  ngOnDestroy() {
    this.title.setTitle('')
  }
}
