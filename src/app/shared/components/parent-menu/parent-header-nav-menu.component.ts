import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-parent-header-nav-menu',
  templateUrl: './parent-header-nav-menu.component.html',
  styleUrls: ['./parent-header-nav-menu.component.scss']
})
export class ParentHeaderNavMenuComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn()
  }
}
