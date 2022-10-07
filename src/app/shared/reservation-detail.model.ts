import { PassengerDto } from "./passenger-dto.model";
import { PaymentDetail } from "./payment-detail.model";

export class ReservationDetail {
  // ReservationId: number=0;
  // TrainId: number=0;
  // UserId: number=0;
  // PassengerId: number=0;
  // PnrNumber: number=0;
  // Status: string='';
  // TotalFare: number=0;
  // TransactionNumber: number=0;
  // BookingDate: string='';
  // QuotaName: string='';
  // seatNumber: number=0;
  TrainId : number;
  QuotaName : string;
  Passengers : PassengerDto[];
  Transaction : PaymentDetail;
}
