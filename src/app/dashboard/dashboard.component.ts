import { Component } from '@angular/core';
import { dog } from '../dog';
import { dogService } from '../dog.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dogs: dog[] = [];

  constructor(private dogsService: dogService) {}

  getTop5dogsByWeight = (): void => {
    this.dogsService.getdogs().subscribe((dogs) => {
      // TODO: Only return top 5 from API
      this.dogs = dogs.slice(0, 5);
    });
  }

  // TODO: Research as arrow function
  ngOnInit(): void {
    this.getTop5dogsByWeight();
  }
}
