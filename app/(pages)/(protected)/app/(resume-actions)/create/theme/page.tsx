"use client"
import CurriculumVitae1 from '@/app/components/templates/CurriculumVitae1'
import Image from 'next/image'
import React from 'react'
import cvImage from "@/public/cv.png"

const page = () => {

    return (
        <div className="flex flex-col w-1/2 mx-auto">
            <div className="mx-auto w-full">
                <div className="text-xl font-semibold px-32 mt-6 text-gray-700 ">Sablonok</div>
                <div className='grid grid-cols-3 gap-6 mt-12 mx-auto px-32'>

                    <div className="h-full w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">
                        <Image src={cvImage} alt='' />
                    </div>
                    <div className="h-full w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">
                        <Image src={cvImage} alt='' />
                    </div>
                    <div className="h-full w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">
                        <Image src={cvImage} alt='' />
                    </div>
                    <div className="h-full w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">
                        <Image src={cvImage} alt='' />
                    </div>
                    <div className="h-full w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">
                        <Image src={cvImage} alt='' />
                    </div>
                    <div className="h-full w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">
                        <Image src={cvImage} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
