import {ActivatedRoute, RouterLink} from '@angular/router';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { dog } from '../dog';
import { FormsModule } from '@angular/forms';
import { dogService } from '../dog.service';
import {catchError, Observable, of} from "rxjs";

@Component({
  selector: 'app-dogs-update',
  standalone: true,
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './dogs-update.component.html',
  styleUrl: './dogs-update.component.css'
})
export class dogsUpdateComponent {
  dog?: dog;
  error?: string;

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

  updateDog = (): void => {
    const dogId = this.route.snapshot.paramMap.get('id');

    if (dogId && this.dog) {
      this.dogService.updateDog(dogId, this.dog)
          .pipe(catchError(this.handleError))
          .subscribe((dog: dog) => {
            this.dog = dog;
          });
    }

  }

  handleError = (err: any): Observable<any> => {
    console.error(err);
    const errorObject = err.error.error[0];
    this.error = `Property "${errorObject.instancePath.slice(1)}" is invalid.  It ${errorObject.message}.  ${errorObject?.params?.allowedValues ? errorObject?.params?.allowedValues.join(', ') : ''}`;
    return of({})
  }

  ngOnInit(): void {
    this.getDog();

  }
}
