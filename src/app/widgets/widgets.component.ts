import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { MessageService } from '../message.service';
import { dog } from '../dog';
import { dogDetailComponent } from '../dog-detail/dog-detail.component';
import { dogService } from '../dog.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, dogDetailComponent, RouterLink],  
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.css'
})
export class dogsComponent {
  dogs: dog[] = [];

  currentPagedogs: dog[] = [];
  currentPage = 0;
  pageSize = 5;
  pageCount = 0;

  constructor(private dogService: dogService, private messageService: MessageService) {}

  getdogs = (): void => {
    this.dogService.getdogs().subscribe((dogs) => {
      this.dogs = dogs;
      this.pageCount = Math.ceil(this.dogs.length / this.pageSize);
      this.currentPagedogs = this.dogs.slice(0, this.pageSize);
    });
  };

  previousPage = (): void => {
    if (this.currentPage - 1 < 0) {
      return;
    }
    this.currentPage -= 1;
    const startIndex = this.currentPage * this.pageSize;
    this.currentPagedogs = this.dogs.slice(startIndex, startIndex + this.pageSize);
  };

  nextPage = (): void => {
    if (this.currentPage + 1 >= this.pageCount) {
      return;
    }
    this.currentPage += 1;
    const startIndex = this.currentPage * this.pageSize;
    this.currentPagedogs = this.dogs.slice(startIndex, startIndex + this.pageSize);
    console.log('test');
  };

  deletedog = (id: string): void => {
    this.dogService.deletedog(id).subscribe((res) => {
      this.getdogs();
    });
  }

  ngOnInit(): void {
    console.log('Invoked ngOnInit');
    this.getdogs();
  };
}
