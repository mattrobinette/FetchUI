import { Routes } from '@angular/router';
import { dogsComponent } from './dogs/dogs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dogsDetailComponent } from './dog-detail/dogs-detail.component';
import { dogsCreateComponent } from './dogs-create/dogs-create.component';
import { dogsUpdateComponent } from './dogs-update/dogs-update.component';
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: 'dogs', component: dogsComponent },
  { path: 'browse', component: DashboardComponent },
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  { path: 'dogs/view/:id', component: dogsDetailComponent },
  { path: 'dogs/create', component: dogsCreateComponent },
  { path: 'dogs/update/:id', component: dogsUpdateComponent },
  { path: 'login', component: LoginComponent },
];
