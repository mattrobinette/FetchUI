import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {ToastService} from "../toast.service";
import {ToastComponent} from "../toast.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  result: string = '';
  resultColor: string = 'green';

  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) {};

  showToast() {
    this.toastService.show('Your toast message here!', { classname: 'bg-success text-light', delay: 5000 });
  }

  doLogin = (): void => {
    this.authService.login(this.username, this.password).subscribe((token) => {
      if (token) {
        this.result = 'Success!';
        this.authService.storeToken(token.token);
        this.router.navigate(['/dogs']);

        this.showToast();
      }
    },
    () => {
      this.resultColor = 'red';
      this.result = 'Invalid username or password!';
    });
  };

}