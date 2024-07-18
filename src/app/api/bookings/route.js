// pages/api/bookings.js

import connectDb from "@/app/libs/mongoose";
import Booking from "@/app/models/bookings.model";

import { NextResponse } from "next/server";
import total from "@/app/utils/total"; // Import the total utility function

export async function POST(req) {
    try {
        const { firstName, lastName, countryOfOrigin, townCity, pincode, state, phoneNumber, emailAddress, roomId, single_room, startDate, endDate } = await req.json();

        await connectDb();
    

        const price = single_room.price;
       



     
    
            const { totalPrice, totalNights } = total({ startDate, endDate, price });

            await Booking.create({
                firstName,
                lastName,
                countryOfOrigin,
                townCity,
                pincode,
                state,
                phoneNumber,
                emailAddress,
                roomId,
                startDate,
                endDate,
                totalNights,
                totalPrice
            });

            return NextResponse.json({ message: "Booking successfully created" }, { status: 201 });
        
    } catch (error) {
        console.error("Error creating booking:", error);
        return NextResponse.json({ message: "Error creating booking", error: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDb();
        const result = await Booking.find();
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return NextResponse.json({ message: "Error fetching bookings", error: error.message }, { status: 500 });
    }
}

export async function DELETE() {
    try {
        const presentDate = new Date();
        await connectDb();
        const result = await Booking.deleteMany({ endDate: { $lt: presentDate } });

        if (result.deletedCount > 0) {
            return NextResponse.json({ message: "Expired bookings deleted", count: result.deletedCount });
        } else {
            console.log("No expired bookings to delete");
            return NextResponse.json({ message: "No expired bookings to delete" });
        }
    } catch (error) {
        console.error("Error deleting expired bookings:", error);
        return NextResponse.json({ message: "Error deleting expired bookings", error: error.message }, { status: 500 });
    }
}


// export async function GETSingle({ params }) {
//     try {
//         await connectDb();
//         const result = await Booking.findById({ params });
//         console.log("result from be", result)
//         return NextResponse.json(result, { status: 200 });
//     } catch (error) {
//         console.error("Error fetching bookings:", error);
//         return NextResponse.json({ message: "Error fetching bookings", error: error.message }, { status: 500 });
//     }
// }

