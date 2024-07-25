import {ActivatedRoute, RouterLink} from '@angular/router';
import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { dog } from '../dog';
import { FormsModule } from '@angular/forms';
import { dogService } from '../dog.service';
import {imageUploadComponent} from "../image-upload/image-upload.component";

@Component({
  selector: 'app-dog-detail',
  standalone: true,
    imports: [NgIf, NgFor, FormsModule, RouterLink, imageUploadComponent],
  templateUrl: './dogs-detail.component.html',
  styleUrl: './dogs-detail.component.css'
})
export class dogsDetailComponent {
  dog?: dog;
  error?: string;
  baseUrl: string = 'http://localhost:3000/static/dogs/image-uploads/';

  constructor(
    private route: ActivatedRoute,
    private dogService: dogService
  ) {}

  getDog = (): void => {
    const dogId = this.route.snapshot.paramMap.get('id');

    if (dogId) {
      this.dogService.getDog(dogId)
        .subscribe((dog: dog) => {
          this.dog = dog;
        });
    }
  }

  ngOnInit(): void {
    this.getDog();

  }
}