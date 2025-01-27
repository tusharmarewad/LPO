import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:5000';


  getEvent(user_id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/events/fetch`, user_id);
  }
  insertEvent(eventData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/events/insert`, eventData);
  }
  
  editEvent(updatedEvent:any){
    return this.http.post(`${this.baseUrl}/events/insert`, updatedEvent);
  }
  deleteEvent(eventId: any): Observable<any> {
    const body = { event_id: eventId };
    return this.http.post(`${this.baseUrl}/events/delete`, body);
  }
}
