import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/lib/db'
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const {firstname, lastname, email, password} = await req.json()
        
        const user = await prisma.users.findFirst({
            where: {
                email: email,
            }
        })
        
        if (user) {
            return new NextResponse("Ez az E-mail cím már létezik", {status: 400})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await prisma.users.create({
            data: {
                firstname,
                lastname,
                email,
                password: hashedPassword
            }
        })
        // MEGERŐSÍTŐ EMAIL STB.

        return new NextResponse(JSON.stringify({message: "Sikeresen regisztráltál egy felhasználót!", data: newUser}), {status: 200})
    } catch (err) {
        return new NextResponse("Ez az E-mail cím már létezik", {status: 400})
    }
} 