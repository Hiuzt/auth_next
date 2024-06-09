import { NextRequest, NextResponse } from "next/server";

// GET ALL
export async function GET(req: NextRequest, res: NextResponse) {
    return new NextResponse("Teszt", {status: 200})
}

// SAVE
export async function POST(req: NextRequest, res: NextResponse) {
    const {a} = await req.json()

    return new NextResponse("Teszt", {status: 200})
}

