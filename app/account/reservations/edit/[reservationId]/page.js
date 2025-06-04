import EditReservationForm from "@/app/_components/EditReservationForm";
import { getBooking, getCabin } from "@/app/_lib/data-service";

// export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { id } = await getBooking(params.reservationId);
  return { title: `Reservation ${id}` };
}

export default async function Page({ params }) {
  const booking = await getBooking(params.reservationId);
  const { maxCapacity } = await getCabin(booking.cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{booking.id}
      </h2>
      <EditReservationForm maxCapacity={maxCapacity} booking={booking} />
    </div>
  );
}
