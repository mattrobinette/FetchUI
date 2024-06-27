import { of, catchError, map, tap, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import { dogService } from '../dog.service';
import { dog } from '../dog';

@Component({
  selector: 'app-dogs-create',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './dogs-create.component.html',
  styleUrl: './dogs-create.component.css'
})
export class dogsCreateComponent {
  dog = {color: '', gender: '', size: ''} as dog;
  error?: string;
  result: string = '';
  resultColor: string = 'green';

  constructor(private dogService: dogService,
    private router: Router) {}

  createDog = (): void => {
    this.error = ''; // Reset the error before attempting to create the dog
    this.result = 'Success!';
    this.dogService.createDog(this.dog)
      .pipe(catchError(this.handleError))
      .subscribe((res) => {
        if (!this.error) {
          this.router.navigate(['/dogs']);
        }
      });
  }

  handleError = (err: any): Observable<any> => {
    console.error(err);
    const errorObject = err.error.error[0];
    this.error = `Property "${errorObject.instancePath.slice(1)}" is invalid.  It ${errorObject.message}.  ${errorObject?.params?.allowedValues ? errorObject?.params?.allowedValues.join(', ') : ''}`;
    return of({})
  }
}
