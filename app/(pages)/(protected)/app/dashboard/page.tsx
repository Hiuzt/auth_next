"use client"

import CVElement from "@/app/components/CVElement"
import { useSession } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/auth/login', { scroll: false })
        }

    }, [status, router])


    return (
        <>
            <div className="border-b px-16 p-[19px]">
                <h1 className="text-4xl  font-semibold text-gray-700">
                    Önéletrajzaim
                </h1>
            </div>
            <div className="grid grid-cols-4 p-16  gap-12">
                <CVElement />
                <CVElement />
                <CVElement />
                <CVElement />
                <CVElement />
                <CVElement />
                <CVElement />
                <CVElement />               
            </div>
        </>
    )
}