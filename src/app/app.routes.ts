import { MainPageComponent } from './views/main-page/main-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
