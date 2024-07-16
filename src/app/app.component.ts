import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, Router, RouterModule} from '@angular/router';
import { dogsComponent } from './dogs/dogs.component';
import { MessagesComponent } from './messages/messages.component';
import { ToastComponent } from './toast.component';
import {AuthService} from "./auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, dogsComponent, MessagesComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This Awesome Angular Project';
  welcomeMessage = '... isn\'t this cool?';

  constructor(public authService: AuthService, private router: Router) {};

  logout = () => {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}