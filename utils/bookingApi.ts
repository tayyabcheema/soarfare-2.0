// import { BookingResponse } from "../types/booking";
// import axios from "axios";

// export async function fetchBookings(params: any): Promise<BookingResponse> {
//   let token = "";
//   if (typeof window !== "undefined") {
//     token = localStorage.getItem("token") || "";
//   }
//   const res = await axios.post("/api/user/bookings", params, {
//     headers: {
//       "Content-Type": "application/json",
//       ...(token ? { "x-access-token": token } : {}),
//     },
//   });
//   return res.data;
// }

import { Booking, BookingResponse } from "@/types/booking";
import { mapBookingResponseToBooking } from "./bookingMapper";

export async function fetchBookings(
  params: any
): Promise<{ data: Booking[]; recordsTotal: number }> {
  const res = await fetch("/api/bookings", {
    method: "POST",
    body: JSON.stringify(params),
    headers: { "Content-Type": "application/json" },
  });

  const json: { data: BookingResponse[]; recordsTotal: number } =
    await res.json();

  return {
    data: json.data.map(mapBookingResponseToBooking),
    recordsTotal: json.recordsTotal,
  };
}
