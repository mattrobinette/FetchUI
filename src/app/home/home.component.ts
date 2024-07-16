import { Component } from '@angular/core';
import { dog } from '../dog';
import { dogService } from '../dog.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dogService: dogService) {}
}