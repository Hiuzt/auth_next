import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FormEvent, MouseEvent, useState } from 'react'
import TextInput from './inputs/TextInput'
import DateInput from './inputs/DateInput'
import AreaInput from './inputs/AreaInput'
import ButtonInput from './inputs/ButtonInput'
import SubmitInput from './inputs/SubmitInput'
import WorkexperienceDialog from './WorkexperienceDialog'


const WorkexperienceList = () => {
    let workExperience = [
        ["Deutche Telekom", "2023 október", "2024 november"]
    ]

    const [dialogState, setDialogState] = useState<boolean>(true)

    const closePanel = () => {
        console.log("BEZÁR")
        setDialogState(false)
    }


    return (
        <>
            <label htmlFor="web" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Munkatapasztalat</label>
            <div className="w-full flex flex-col bg-[#F3F4F6] border rounded-lg text-xs">

                {
                    workExperience.map((workElement: any, workIndex: any) => (
                        <ul key={workIndex} className="bg-white rounded-lg p-2 m-2 flex justify-between text-black/80">
                            <li className="basis-1/4">{workElement[0]}</li>
                            <li>{workElement[1]}</li>
                            <li>{workElement[2]}</li>
                            <li className="space-x-2 text-black/80">
                                <FontAwesomeIcon className="hover:text-yellow-600 cursor-pointer" icon={faEdit} />
                                <FontAwesomeIcon className="hover:text-red-600 cursor-pointer" icon={faTrash} />
                            </li>
                        </ul>
                    ))
                }
                <div onClick={() => setDialogState(true)} className="cursor-pointer hover:bg-primary/80 ml-auto mr-2 bg-primary rounded-lg p-2 my-2 px-4 space-x-2 text-white text-xs">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Hozzáadás</span>
                </div>
            </div>

            {dialogState && (
                <WorkexperienceDialog closeAction={closePanel} />
            )}
        </>
    )
}

export default WorkexperienceList
