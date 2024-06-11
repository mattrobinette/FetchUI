import { Injectable } from '@angular/core';
import { dog } from './dog';
import { dogS } from './mock-dogs';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class dogService {
  private dogsUrl = '/api/v1/dogs';

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    ) { }

  getdogs = (): Observable<dog[]> => {
    this.messageService.add('About to fetch data from API');
    return this.http.get<dog[]>(this.dogsUrl);
  }

  getdog = (id: string): Observable<dog> => {
    this.messageService.add(`Fetched data for ID ${id} from API`);
    return this.http.get<dog>(`${this.dogsUrl}/${id}`);
  }

  deletedog = (id: string): Observable<Object> => {
    return this.http.delete(`${this.dogsUrl}/${id}`);
  }

  updatedog = (id: string, dog: dog): Observable<dog> => {
    return this.http.put<dog>(`${this.dogsUrl}/${id}`, dog);
  }

  createdog = (dog: dog): Observable<dog> => {
    return this.http.post<dog>(`${this.dogsUrl}`, dog)
  }
}
