export interface BookingResponse {
  success: boolean;
  data: {
    bookingId: string;
    status: string;
    points: {
      used: number;
      remaining: number;
    };
    flight: {
      from: string;
      to: string;
      date: string;
      flightNumber: string;
      departureTime: string;
      arrivalTime: string;
    };
  };
}

export interface BookingSegment {
  FlightNum: string;
  CarrierId: string;
  AircraftType: string;
  Origin: string;
  Destination: string;
  DepartureDateTime: string;
  ArrivalDateTime: string;
  ClassCode: string;
  CabinClassText: string;
  EquipmentType: string;
  OperatingCarrierId: string;
  Meal: string;
  SeatsRemaining: string;
  MajorClassCode: string;
  Distance: string;
  Duration: string;
  MarriageGroup: string;
}

export interface BookingFlight {
  origin: string;
  destination: string;
  departure_date: string;
  segments: BookingSegment[];
}

export interface Booking {
  id: number;
  trip_id: string;
  points: number;
  is_multi_city: number;
  ticket_issued: boolean;
  created_at: string;
  updated_at: string;
  flights: BookingFlight[];
}

export interface PointsPurchaseResponse {
  success: boolean;
  data: {
    transactionId: string;
    points: {
      purchased: number;
      newTotal: number;
    };
    payment: {
      amount: number;
      currency: string;
      status: string;
    };
  };
}

export interface FareSourceCodeResponse {
  fareSourceCode: string;
}

export interface UserPointsResponse {
  points: number;
}
