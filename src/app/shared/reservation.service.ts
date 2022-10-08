import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservationDetail } from './reservation-detail.model';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }

  formData: ReservationDetail = new ReservationDetail();
  readonly baseUrl = 'https://localhost:44367/Book/Pay';

  postReservation(){
    return this.http.post(this.baseUrl,this.formData);
  }
}
