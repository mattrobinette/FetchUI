import { Routes } from '@angular/router';
import { dogsComponent } from './dogs/dogs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dogDetailComponent } from './dog-detail/dog-detail.component';
import { dogsCreateComponent } from './dogs-create/dogs-create.component';

export const routes: Routes = [
  { path: 'dogs', component: dogsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dogs/:id', component: dogDetailComponent },
  { path: 'dogs-create', component: dogsCreateComponent },
];
