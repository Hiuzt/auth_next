"use client"
import CurriculumVitae1 from '@/app/components/templates/CurriculumVitae1'
import Image from 'next/image'
import React, { useState } from 'react'
import cvImage from "@/public/cv.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Page = () => {


    const [currentSelection, setSelection] = useState<Number>(0)
    const cvThemeList = [
        ["Első"],
        ["Második"],
        ["Harmadik"],
        ["Negyedik"],
        ["Ötödik"],
        ["Hatodik"]
    ]

    return (
        <div className="flex flex-col w-1/2 mx-auto">
            
            <div className="mx-auto w-full">
                <div className="text-xl font-semibold px-32 mt-6 text-gray-700 ">Sablonok</div>
                <div className='grid grid-cols-3 gap-6 mt-12 mx-auto px-32'>
                    {cvThemeList.map((cvValue, cvIndex) => (
                        <div onClick={() => setSelection(cvIndex)} key={cvIndex} className="h-full w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 relative">
                            {/* <Image src={cvImage} alt='' /> */}
                            
                            {currentSelection === cvIndex && (
                                <div className="absolute right-2 bottom-2 bg-primary rounded-full h-6 w-6 z-10 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCheck} className="text-white" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page
