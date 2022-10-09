export class SearchResult {
  constructor(
  public TrainNo: number,
  public TrainName: string,
  public SourceStation: string,
  public DestinationStation: string,
  public SourceDepartureTime : Date,
  public DestinationArrivalTime : Date,
  public TotalSeat : number,
  public AvailableGeneralSeat : number,
  public AvailableLadiesSeat : number,
  public SeatFare : number,
  ){}
}
