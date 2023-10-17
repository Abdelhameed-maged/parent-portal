import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-parent-breadcrumb',
  templateUrl: './parent-breadcrumb.component.html',
  styleUrls: ['./parent-breadcrumb.component.scss']
})
export class ParentBreadcrumbComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
  }

  getTitle(): string {
    return this.title.getTitle()
  }
}
