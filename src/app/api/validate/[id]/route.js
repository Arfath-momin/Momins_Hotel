import connectDb from "@/app/libs/mongoose";
import Booking from "@/app/models/bookings.model";
import { NextResponse } from 'next/server';

export async function GET(req,{ params }) {
    try {
        const { id } = params;
        await connectDb();
        if(!id){
            console.error("Room ID not provided");
        }
        const bookingCount = await Booking.countDocuments({ roomId: id });
        return NextResponse.json(bookingCount, { status: 200 });
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return NextResponse.json({ message: "Error fetching bookings", error: error.message }, { status: 500 });
    }
}
