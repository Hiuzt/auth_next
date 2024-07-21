import React from 'react'
import cvImage from "@/public/cv.png"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'

const CVElement = () => {
    return (
        <div>
            <div className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 relative group peer">
                <Image src={cvImage} alt='' />     
                <div className="group-hover:flex hidden absolute w-full h-full items-center left-0 top-0 justify-center gap-4 bg-black/30 backdrop-blur-md">
                    <FontAwesomeIcon icon={faEdit} className="text-white text-3xl hover:text-primary transition cursor-pointer" />
                    <FontAwesomeIcon icon={faTrash} className="text-white text-3xl hover:text-red-600 transition cursor-pointer" />
                    <FontAwesomeIcon icon={faDownload} className="text-white text-3xl hover:text-green-500 transition cursor-pointer" />
                    <FontAwesomeIcon icon={faEye} className="text-white text-3xl hover:text-primary transition cursor-pointer" />
                </div>
            </div>
            <h3 className="mt-4 text-gray-700 font-semibold peer-hover:text-primary transition">Önéletrajznév</h3>
            <p className="text-xs text-black/60">2024.07.21</p>
        </div>
    )
}

export default CVElement
