import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservationService } from './shared/reservation.service';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { AppRoutingModule } from './app-routing.module';
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'PaymentDetails',component: PaymentDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaymentDetailsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  exports: [RouterModule],
  providers: [ReservationService],
  bootstrap: [AppComponent,HomeComponent,PaymentDetailsComponent]
})
export class AppModule { }
