import { Component } from '@angular/core';
import { dog } from '../dog';
import { dogService } from '../dog.service';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  dogs: dog[] = [];
  filteredDogs: dog[] = [];
  filters = {
    breed: '',
    gender: '',
    size: '',
    color: '',
    location: ''
  };
  sortCriteria = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  currentPageDogs: dog[] = [];
  currentPage = 0;
  pageSize = 10;
  pageCount = 0;

  baseUrl: string = 'http://localhost:3000/static/dogs/image-uploads/';

  constructor(private dogService: dogService) {}

  getDogs = (): void => {
    this.dogService.getDogs().subscribe((dogs) => {
      this.dogs = dogs;
      this.pageCount = Math.ceil(this.dogs.length / this.pageSize);
      this.currentPageDogs = this.dogs.slice(0, this.pageSize);
      this.applyFilters();
    });
  };

  applyFilters(): void {
    this.filteredDogs = this.dogs.filter(dog => {
      return (
          (!this.filters.breed || dog.breed.toLowerCase().includes(this.filters.breed.toLowerCase())) &&
          (!this.filters.gender || dog.gender === this.filters.gender) &&
          (!this.filters.size || dog.size === this.filters.size) &&
          (!this.filters.color || dog.color === this.filters.color) &&
          (!this.filters.location || dog.location === this.filters.location)
      );
    });

    this.applySorting();
    this.currentPage = 0;
    this.updateCurrentPageDogs();
  }

  applySorting(): void {
    if (this.sortCriteria) {
      this.filteredDogs.sort((a, b) => {
        const key = this.sortCriteria as keyof dog;
        let comparison = 0;

        if (a[key] > b[key]) {
          comparison = 1;
        } else if (a[key] < b[key]) {
          comparison = -1;
        }
        return this.sortOrder === 'asc' ? comparison : -comparison;
      });
    }
    this.updateCurrentPageDogs();
  }

  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.applySorting();
  }

  updateCurrentPageDogs(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.currentPageDogs = this.filteredDogs.slice(startIndex, startIndex + this.pageSize);
  }

  previousPage = (): void => {
    if (this.currentPage - 1 < 0) {
      return;
    }
    this.currentPage -= 1;
    const startIndex = this.currentPage * this.pageSize;
    this.currentPageDogs = this.dogs.slice(startIndex, startIndex + this.pageSize);
    this.updateCurrentPageDogs();
  };

  nextPage = (): void => {
    if (this.currentPage + 1 >= this.pageCount) {
      return;
    }
    this.currentPage += 1;
    const startIndex = this.currentPage * this.pageSize;
    this.currentPageDogs = this.dogs.slice(startIndex, startIndex + this.pageSize);
    this.updateCurrentPageDogs();
  };

  ngOnInit(): void {
    console.log('Invoked ngOnInit');
    this.getDogs();
  };
}