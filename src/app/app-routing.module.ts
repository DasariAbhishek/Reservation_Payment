import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes : Routes = [
  {path:'home',component:HomeComponent},
  {path:'payment',component:PaymentDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
