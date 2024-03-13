"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated" ) {
            router.push('/auth/login', { scroll: false })
        }
            
    }, [status, router])

    return (
        <>
            <div>
                {session?.user?.email}
            </div>
        </>
    )
}