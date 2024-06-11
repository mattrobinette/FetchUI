import { of, catchError, map, tap, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { dogService } from '../dog.service';
import { dog } from '../dog';

@Component({
  selector: 'app-dogs-create',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './dogs-create.component.html',
  styleUrl: './dogs-create.component.css'
})
export class dogsCreateComponent {
  dog = {} as dog;
  error?: string;

  constructor(private dogService: dogService,
    private router: Router) {}

  createdog = (): void => {
    this.dogService.createdog(this.dog)
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
