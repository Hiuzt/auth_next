import CurriculumVitae1 from '@/app/components/templates/CurriculumVitae1'
import React from 'react'

const page = () => {
    return (
        <div className="grid grid-cols-3 w-1/2 mx-auto">

            <div className="scale-[25%]">
                <CurriculumVitae1 />
            </div>

            <div className="scale-[25%]">
                <CurriculumVitae1 />
            </div>
            
            <div className="scale-[100%]">
                <CurriculumVitae1 />
            </div>            
        </div>
    )
}

export default page
