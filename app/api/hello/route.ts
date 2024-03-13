import { NextRequest, NextResponse } from "next/server";

export default function GET(req: NextRequest) {
    return new NextResponse("Teszt", {status: 200})
  }