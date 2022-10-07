import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ReservationDetail } from '../shared/reservation-detail.model';
import { ReservationService } from '../shared/reservation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private fb:FormBuilder,public service:ReservationService) { }


//   public AddPassenger = `<div class="input;form-group">&nbsp;&nbsp;&nbsp;
//   <input type="text" id="name" class="txt;form-control" placeholder="Name" required formControlName="name">&nbsp;&nbsp;
//   <input type="text" id="age" formControlName="age" class="txt;form-control" placeholder="Age" required>&nbsp;&nbsp;
//   <select name="Gender" id="gender" class="txt;form-control" formControlName="gender">
//     <option value="" >Choose Gender</option>
//     <option value="male">Male</option>
//     <option value="female">Female</option>
//   </select>&nbsp;&nbsp;
//   <input type="tel" id="phone" formControlName="phone" class="txt;form-control" pattern="^\d{10}$" required placeholder="Phone Number">
// </div>`

  isSubmitted = false
  quotas = ['General','Ladies'];

  get quotaName() {
    return this.ReservationForm.get('quotaName');
  }

  ReservationForm = this.fb.group({
    quotaName: ['', [Validators.required]],
  });


  onSubmit(): void {
    console.log(this.ReservationForm);
    this.isSubmitted = true;
    if (!this.ReservationForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.ReservationForm.value));
    }
  }

  Add(){

  }
}
