import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { dog } from '../dog';
import { FormsModule } from '@angular/forms';
import { dogService } from '../dog.service';

@Component({
  selector: 'app-dog-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './dog-detail.component.html',
  styleUrl: './dog-detail.component.css'
})
export class dogDetailComponent {
  dog?: dog;

  constructor(
    private route: ActivatedRoute,
    private dogService: dogService
  ) {}

  getdog = (): void => {
    const dogId = this.route.snapshot.paramMap.get('id');

    if (dogId) {
      this.dogService.getdog(dogId)
        .subscribe((dog: dog) => {
          this.dog = dog;
        });
    }
  }

  updatedog = (): void => {
    const dogId = this.route.snapshot.paramMap.get('id');

    if (dogId && this.dog) {
      this.dogService.updatedog(dogId, this.dog)
        .subscribe((dog: dog) => {
          this.dog = dog;
        });
    }
    
  }

  ngOnInit(): void {
    this.getdog();
  }
}
