import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    private dogsUrl = '/api/v1/dogs';

    constructor(private http: HttpClient) {}

    uploadImage(file: File): Observable<any> {
        const formData = new FormData();
        formData.append('dogImage', file);
        return this.http.post(this.dogsUrl, formData).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Observable<never> {
        console.error('An error occurred', error);
        return throwError(error);
    }
}
