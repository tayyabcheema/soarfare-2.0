import { Booking, BookingResponse } from "@/types/booking";

export function mapBookingResponseToBooking(res: BookingResponse): Booking {
  return {
    id: parseInt(res.data.bookingId, 10),
    trip_id: res.data.bookingId,
    points: res.data.points.used,
    is_multi_city: 0, // or map properly if backend provides
    ticket_issued: res.data.status === "Ticket Issued",
    created_at: res.data.flight.date,
    updated_at: res.data.flight.date,
    flights: [
      {
        origin: res.data.flight.from,
        destination: res.data.flight.to,
        departure_date: res.data.flight.date,
        segments: [
          {
            FlightNum: res.data.flight.flightNumber,
            CarrierId: "",
            AircraftType: "",
            Origin: res.data.flight.from,
            Destination: res.data.flight.to,
            DepartureDateTime: res.data.flight.departureTime,
            ArrivalDateTime: res.data.flight.arrivalTime,
            ClassCode: "",
            CabinClassText: "",
            EquipmentType: "",
            OperatingCarrierId: "",
            Meal: "",
            SeatsRemaining: "",
            MajorClassCode: "",
            Distance: "",
            Duration: "",
            MarriageGroup: "",
          },
        ],
      },
    ],
  };
}
