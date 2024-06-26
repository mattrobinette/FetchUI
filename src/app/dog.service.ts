import { Injectable } from '@angular/core';
import { dog } from './dog';
import { dogS } from './mock-dogs';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class dogService {
  private dogsUrl = '/api/v1/dogs';

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private authService: AuthService,
    ) { }

  getDogs = (): Observable<dog[]> => {
    this.messageService.add('Fetched all data from API using Token');
    return this.http.get<dog[]>(this.dogsUrl);
  }

  getDog = (id: string): Observable<dog> => {
    this.messageService.add(`Fetched data for ID ${id} from API using Token`);
    return this.http.get<dog>(`${this.dogsUrl}/${id}`);
  }

  deleteDog = (id: string): Observable<Object> => {
    this.messageService.add(`Deleted data for ID ${id} from API using Token`);
    return this.http.delete(`${this.dogsUrl}/${id}`,{
      headers: {
        Authorization: this.authService.getToken(),
      }
    });
  }

  updateDog = (id: string, dog: dog): Observable<dog> => {
    this.messageService.add(`Updated data for ID ${id} from API using Token`);
    return this.http.put<dog>(`${this.dogsUrl}/${id}`, dog,{
      headers: {
        Authorization: this.authService.getToken(),
      }
    });
  }

  createDog = (dog: dog): Observable<dog> => {
    this.messageService.add(`Created data from API`);
    return this.http.post<dog>(`${this.dogsUrl}`, dog,{
      headers: {
        Authorization: this.authService.getToken(),
      }
    })
  }

  uploadImage(id: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('dogImage', file);
    formData.append('dogId', id); // Include the dogId in the form data
    this.messageService.add(`Uploaded image from API`);
    return this.http.post(`${this.dogsUrl}/${id}/images`, formData);
  }
}
