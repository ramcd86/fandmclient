import { Routes } from '@angular/router';
import { StyleComponent } from './pages/style/style.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'style', component: StyleComponent },
  {
    path: '',
    component: HomeComponent,
  },
];
