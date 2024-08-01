import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SidebarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  isSideBarVisible: boolean = false;

  openSideBar() {
    this.isSideBarVisible = true;
    console.log(this.isSideBarVisible);
  }
}
