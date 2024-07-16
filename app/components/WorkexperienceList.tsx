import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FormEvent, MouseEvent, useState } from 'react'
import TextInput from './inputs/TextInput'
import DateInput from './inputs/DateInput'
import AreaInput from './inputs/AreaInput'
import ButtonInput from './inputs/ButtonInput'
import SubmitInput from './inputs/SubmitInput'
import WorkexperienceDialog from './WorkexperienceDialog'


interface WorkexperienceListProps {
    formInputs: any;
    setInputValue: (newInput: any) => void;
}

const WorkexperienceList:React.FC<WorkexperienceListProps> = ({formInputs, setInputValue}) => {
    const [dialogState, setDialogState] = useState<boolean>(false)

    const closePanel = () => {
        setDialogState(false)
    }

    return (
        <>
            <label htmlFor="web" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Munkatapasztalat</label>
            <div className="w-full flex flex-col bg-[#F3F4F6] border rounded-lg text-xs">
                {
                    formInputs?.experienceData?.workExperience.map((workElement: any, workIndex: any) => (
                        <div key={workIndex} className="bg-white rounded-lg p-2 m-2  text-black/80">
                            <div className="flex justify-between">

                                <span className="basis-1/4">{workElement[0]}</span>
                                <span>{workElement[1]}</span>
                                <span>{workElement[2]}</span>
                                <span className="space-x-2 text-black/80">
                                    <FontAwesomeIcon className="hover:text-yellow-600 cursor-pointer" icon={faEdit} />
                                    <FontAwesomeIcon className="hover:text-red-600 cursor-pointer" icon={faTrash} />
                                </span>
                            </div>
                            <div className="mt-2">
                                {workElement[3]["startDate"]} - {workElement[4]["endDate"]}
                            </div>
                            <p className="mt-2 w-full overflow-clip text-ellipsis">
                                {workElement[6]}
                            </p>
                        </div>
                    ))
                }
                <div onClick={() => setDialogState(true)} className="cursor-pointer hover:bg-primary/80 ml-auto mr-2 bg-primary rounded-lg p-2 my-2 px-4 space-x-2 text-white text-xs">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Hozzáadás</span>
                </div>
            </div>

            {dialogState && (
                <WorkexperienceDialog closeAction={closePanel} formInputs = {formInputs} setInputValue = {setInputValue} />
            )}
        </>
    )
}

export default WorkexperienceList
