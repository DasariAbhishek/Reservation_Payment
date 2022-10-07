import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ReservationDetail } from './shared/reservation-detail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'DemoApp';
  // name: string = "Angular Application";
  // isDisabled = false;
  // textId = "sampleId";

  constructor(private fb: FormBuilder){}

  // ReservationForm = new FormGroup({
  //   name : new FormControl(''),
  //   age : new FormControl(),
  //   phone : new FormControl(''),
  // })

  // isSubmitted = false
  // quotas = ['General','Ladies'];

  // get quotaName() {
  //   return this.ReservationForm.get('quotaName');
  // }

  // ReservationForm = this.fb.group({
  //   quotaName: ['', [Validators.required]],
  // });


  // changeQuota(e: any) {
  //   this.quotaName?.setValue(e.target.value, {
  //     onlySelf: true,
  //   });
  // }

  // onSubmit(): void {
  //   console.log(this.ReservationForm);
  //   this.isSubmitted = true;
  //   if (!this.ReservationForm.valid) {
  //     false;
  //   } else {
  //     console.log(JSON.stringify(this.ReservationForm.value));
  //   }
  // }
}
