import CustomUser  from "@/lib/user";
import NextAuth from "next-auth";
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import bcrypt from "bcrypt";

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/auth/login"
    },
    adapter: PrismaAdapter(prisma),

    providers: [
        CredentialsProvider({
            credentials: {},
            async authorize(credentials): Promise<any> {

                const {email, password} = credentials as {
                    email: string;
                    password: string;
                }

                console.log(email)

                if (!email || !password) {
                    return null;
                }
            
                const user = await prisma.users.findFirst({
                    where: {
                        email: email
                    }
                })
                

                const matchPassword = await bcrypt.compare(password, user!.password)
                
                if (matchPassword) {
                    console.log(user)
                    return user
                }
                return null
                
            },
           
        })
    ],
    callbacks: {
        async jwt({token}) {    
            const currentUser = await prisma.users.findFirst({
                where: {
                    id: Number(token.sub)
                }
            })

            if (!currentUser)
                return token
            
            token.firstname = currentUser.firstname
            token.lastname = currentUser.lastname

            return token
        },
        async session({token, session, user}) {    
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    firstname: token.firstname,
                    lastname: token.lastname
                }
            }
        },
    },
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt"
    },
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};