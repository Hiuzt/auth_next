"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import User from "@/public/user_big.jpg"
import Image from "next/image"

export default function Page() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/auth/login', { scroll: false })
        }

    }, [status, router])

    return (
        <div className="flex flex-col w-1/2 mx-auto">
            <div className="mx-auto">
                <div className="px-32 items-center relative">
                    <div className="mx-auto w-3/4 h-2 bg-gray-100 relative mt-6">
                        <span className="absolute left-[-2px] bg-gray-100 rounded-full h-10 w-10 top-[50%] translate-y-[-50%] after:absolute after:bottom-[0px] after:content-[Személyes adatok] after:w-full after:h-full"></span>
                        <span className="absolute left-[50%] bg-gray-100 rounded-full h-10 w-10 top-[50%] translate-y-[-50%] translate-x-[-50%]"></span>
                        <span className="absolute right-0 bg-gray-100 rounded-full h-10 w-10 top-[50%] translate-y-[-50%]"></span>
                    </div>
                </div>
                {/* IDE VMI LENYITHATÓ GENYO */}
                <div className="text-xl font-semibold px-32 mt-6 text-gray-700 ">Személyes adatok</div>
                <div className="px-32 py-4 flex flex-col gap-8">
                    <div className="flex gap-4">
                        <div className="flex flex-col justify-between">
                            <label htmlFor="image" className="text-xs font-semibold">Fénykép</label>
                            <div className="bg-gray-100 aspect-square w-32 rounded-lg overflow-hidden">
                                <Image className="w-full" src={User} alt="" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 place-content-between gap-4 w-full">
                            <div className="flex flex-col">
                                <label htmlFor="firstname" className="text-xs font-semibold text-gray-700 ">Vezetéknév</label>
                                <input id="firstname" type="text" className="bg-gray-100 rounded-lg p-2 cursor-not-allowed border" placeholder="Vezetéknév" value={session?.user?.firstname} disabled />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="firstname" className="text-xs font-semibold text-gray-700">Keresztnév</label>
                                <input id="firstname" type="text" className="bg-gray-100 rounded-lg p-2 cursor-not-allowed border" placeholder="Vezetéknév" value={session?.user?.lastname} disabled />
                            </div>
                            <div className="flex flex-col col-span-2">
                                <label htmlFor="email" className="text-xs font-semibold text-gray-700">E-mail</label>
                                <input id="email" type="text" className="bg-gray-100 rounded-lg p-2 cursor-not-allowed border" placeholder="E-Mail" value={session?.user?.email} disabled />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse">
                        <input id="place" type="text" className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="Cím" />
                        <label htmlFor="place" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Cím</label>
                    </div>
                    <div className="flex flex-col-reverse">
                        <input id="phone" type="text" className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="Telefonszám" />
                        <label htmlFor="phone" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Telefonszám</label>
                    </div>
                    <div className="flex flex-col-reverse">

                        <select id="phonenumber" className="bg-gray-100 rounded-lg p-2 peer outline-none border focus:border-primary transition focus:bg-primary/20">
                            <option value="male" id="male">Férfi</option>
                            <option value="male" id="male">Nő</option>
                        </select>
                        <label htmlFor="phonenumber" className="text-xs font-semibold text-gray-700 peer-focus:text-primary transition">Nem</label>
                    </div>
                    <div className="flex flex-col-reverse">
                        <input id="web" type="text" className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="Weboldal" />
                        <label htmlFor="web" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Weboldal</label>
                    </div>
                    <div className="flex flex-col-reverse">
                        <input id="linkedin" type="text" className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="LinkedIn" />
                        <label htmlFor="linkedin" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">LinkedIn</label>
                    </div>
                    <div className="flex flex-wrap gap-6">
                        <button className="text-gray-800 bg-gray-200 p-2 px-4 rounded-[20px]">Egyedi mező</button>
                        <button className="text-gray-800 bg-gray-200 p-2 px-4 rounded-[20px]">Jogosítvány</button>
                        <button className="text-gray-800 bg-gray-200 p-2 px-4 rounded-[20px]">Születési idő</button>                       
                        <button className="text-gray-800 bg-gray-200 p-2 px-4 rounded-[20px]">Születési hely</button>    
                        <button className="text-gray-800 bg-gray-200 p-2 px-4 rounded-[20px]">Állampolgárság</button>    
                    </div>
                    {/* <button className="bg-primary rounded-lg w-fit p-2 px-12 ml-auto text-white">Tovább</button> */}
                </div>
   
            </div>

        </div>
    )
}