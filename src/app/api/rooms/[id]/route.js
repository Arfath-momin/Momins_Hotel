import connectDb from "@/app/libs/mongoose";
import Room from "@/app/models/rooms.model";
import { NextResponse } from "next/server";

export async function GET({ params }) {
    await connectDb();
    const { id } = params;

    if (!id) {
        return NextResponse.json({ message: "Invalid room ID" }, { status: 400 });
    }
    const room = await Room.findById(id);
    if (!room) {
        return NextResponse.json({ message: "Room not found" }, { status: 404 });
    }
    return NextResponse.json(room, { status: 200 });
}
