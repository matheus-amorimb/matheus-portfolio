import { AboutComponent } from './../../components/about/about.component';
import { HomeComponent } from './../../components/home/home.component';
import { HeaderComponent } from './../../components/header/header.component';
import { Component } from '@angular/core';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, AboutComponent, ProjectsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
