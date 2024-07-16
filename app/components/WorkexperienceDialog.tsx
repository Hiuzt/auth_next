import React, { ChangeEvent, FormEvent, useState } from 'react'
import TextInput from './inputs/TextInput';
import DateInput from './inputs/DateInput';
import AreaInput from './inputs/AreaInput';
import SubmitInput from './inputs/SubmitInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { DateRangeType } from 'react-tailwindcss-datepicker';

interface IWorkPlaceInputs {
    workName: string;
    workPosition: string;
    workCity: string;
    startDate: DateType;
    endDate: DateType;
    currentWorking?: boolean;
    workDescription: string;
}

type DateType = DateRangeType | null;

interface WorkexperienceDialogProps {
    closeAction: () => void;
    formInputs: any;
    setInputValue: (newInput: any) => void;

}

const WorkexperienceDialog: React.FC<WorkexperienceDialogProps> = ({ closeAction, formInputs, setInputValue }) => {
    const [workplaceInputs, setWorkplaceInputs] = useState<IWorkPlaceInputs>({
        workName: "",
        workPosition: "",
        workCity: "",
        startDate: null,
        endDate: null,
        currentWorking: false,
        workDescription: ""
    })

    const changeWorkInput = (currentField: string, newValue: (string | Date | boolean | undefined)) => {
        setWorkplaceInputs({
            ...workplaceInputs,
            [currentField]: newValue
        })

    }


    const addNewWorkplace = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        closeAction()

        let currentWorkPlaces = formInputs?.experienceData?.workExperience;

        // Validáció
        let newList = [...currentWorkPlaces]
        newList.push([
            workplaceInputs["workName"],
            workplaceInputs["workPosition"],
            workplaceInputs["workCity"],
            workplaceInputs["startDate"],
            workplaceInputs["endDate"],
            workplaceInputs["currentWorking"],
            workplaceInputs["workDescription"]
        ])

        console.log(workplaceInputs)

        setInputValue({
            ...formInputs,
            ["experienceData"]: {
                ...formInputs["experienceData"],
                ["workExperience"]: newList
            }
        })
    }

    return (
        <div onClick={closeAction} className="absolute left-0 top-0 w-screen">
            <div className="bg-black/20 backdrop-blur-sm z-[100] p-4 flex justify-center items-center h-screen sticky">

                <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg p-4 m-4">
                    <div className="flex w-full justify-between border-b border-black/70 py-1 mb-4 items-center">

                        <div className='text-black/70 font-bold'>
                            Munkahely hozzáadása
                        </div>
                        <span onClick={closeAction} className="hover:bg-black/10 p-1 rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon className="h-6 w-6 text-black/70" icon={faXmark} />
                        </span>
                    </div>
                    <form className="grid grid-cols-2 gap-4" onSubmit={(e) => addNewWorkplace(e)}>
                        <TextInput
                            inputName={"Munkahely neve"}
                            inputID={"workplace"}
                            placeHolder={"Munkahely neve..."}
                            inputValue={workplaceInputs["workName"]}
                            changeValue={(e: ChangeEvent<HTMLInputElement>) => changeWorkInput("workName", e.target.value)}
                        />

                        <div className="col-span-1">
                            <TextInput
                                inputName={"Munkakör"}
                                inputID={"position"}
                                placeHolder={"Munkakör..."}
                                inputValue={workplaceInputs["workPosition"]}
                                changeValue={(e: ChangeEvent<HTMLInputElement>) => changeWorkInput("workPosition", e.target.value)}
                            />
                        </div>
                        <div className="col-span-1">
                            <TextInput
                                inputName={"Város"}
                                inputID={"city"}
                                placeHolder={"Város..."}
                                inputValue={workplaceInputs["workCity"]}
                                changeValue={(e: ChangeEvent<HTMLInputElement>) => changeWorkInput("workCity", e.target.value)}
                            />
                        </div>
                        <div className="grid-cols-6">
                            <DateInput
                                value={workplaceInputs["startDate"]}
                                changeValue={(newValue: any) => changeWorkInput("startDate", newValue)}
                                inputID="startdate"
                                inputName="Kezdete"
                            />
                        </div>
                        <div className="grid-cols-6">
                            <DateInput
                                value={workplaceInputs["endDate"]}
                                changeValue={(newValue: any) => changeWorkInput("endDate", newValue)}
                                inputID="stopdate"
                                inputName="Vége"
                            />
                        </div>
                        <div className="col-span-2">
                            <AreaInput
                                inputID="desc"
                                inputName="Munkakör leírás"
                                placeHolder="Munkakör leírása..."
                                changeValue={(e: ChangeEvent<HTMLTextAreaElement>) => changeWorkInput("workDescription", e.target.value)}
                            />
                        </div>
                        <div className="col-span-2">
                            <SubmitInput inputID="submitexp" buttonName="Új munka hozzáadása" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WorkexperienceDialog
