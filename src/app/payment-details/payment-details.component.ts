import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from '../shared/payment-detail.service';
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService) { }
  years = [22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
  months = [1,2,3,4,5,6,7,8,9,10,11,12]
  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

  }
}
