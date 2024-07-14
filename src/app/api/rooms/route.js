
import connectDb from "@/app/libs/mongoose";
import Room from "@/app/models/rooms.model";
import { NextResponse } from "next/server";



export async function POST(req) {
    const {roomType , price , quantity ,availability , image} = await req.json();
    await connectDb();
    await Room.create({roomType , price , quantity ,availability , image})
    return NextResponse.json({ message: "successfully created" }, { status: 201 } );
}

export async function GET()
{
    await connectDb();
    const rooms = await Room.find();
    return NextResponse.json(rooms, { status: 200 } );
}



