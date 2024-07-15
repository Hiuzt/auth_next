import React, { FormEvent, useState } from 'react'
import TextInput from './inputs/TextInput';
import DateInput from './inputs/DateInput';
import AreaInput from './inputs/AreaInput';
import SubmitInput from './inputs/SubmitInput';

interface IWorkPlaceInputs {
    workName: string;
    workPosition: string;
    workCity: string;
    startDate: Date | "";
    endDate: Date | "";
    currentWorking?: boolean;
    workDescription: string;
}


interface WorkexperienceDialogProps {
    closeAction: () => void;

}

const WorkexperienceDialog:React.FC<WorkexperienceDialogProps> = ({closeAction}) => {
    const [workplaceInputs, setWorkplaceInputs] = useState<IWorkPlaceInputs>({
        workName: "",
        workPosition: "",
        workCity: "",
        startDate: "",
        endDate: "",
        currentWorking: false,
        workDescription: ""
    })

    const changeWorkInput = (currentField: string, newValue: (string | Date | boolean | undefined)) => {
        console.log(newValue)
        setWorkplaceInputs({
            ...workplaceInputs,
            [currentField]: newValue
        })
    }


    const addNewWorkplace = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div onClick={closeAction} className="absolute left-0 top-0 w-screen h-screen bg-black/20 backdrop-blur-sm z-[100] p-4 flex justify-center items-center">
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg p-4 m-4">
                <div className='text-black/70 border-b border-black/70 mb-4'>
                    Munkahely hozzáadása
                </div>
                <form className="grid grid-cols-2 gap-4" onSubmit={(e) => addNewWorkplace(e)}>
                    <TextInput
                        inputName={"Munkahely neve"}
                        inputID={"workplace"}
                        placeHolder={"Munkahely neve..."}
                        inputValue={workplaceInputs["workName"]}
                        changeValue={(e: any) => changeWorkInput("workName", e.target.value)}
                    />

                    <div className="col-span-1">
                        <TextInput
                            inputName={"Munkakör"}
                            inputID={"position"}
                            placeHolder={"Munkakör..."}
                            inputValue={workplaceInputs["workPosition"]}
                            changeValue={(e: any) => changeWorkInput("workPosition", e.target.value)}
                        />
                    </div>
                    <div className="col-span-1">
                        <TextInput
                            inputName={"Város"}
                            inputID={"city"}
                            placeHolder={"Város..."}
                            inputValue={workplaceInputs["workCity"]}
                            changeValue={(e: any) => changeWorkInput("workCity", e.target.value)}
                        />
                    </div>
                    <div className="grid-cols-6">
                        <DateInput inputID="startdate" inputName="Kezdete" />
                    </div>
                    <div className="grid-cols-6">
                        <DateInput inputID="stopdate" inputName="Vége" />
                    </div>
                    <div className="col-span-2">
                        <AreaInput inputID="desc" inputName="Munkakör leírás" placeHolder="Munkakör leírása..." />
                    </div>
                    <div className="col-span-2">
                        <SubmitInput inputID="submitexp" buttonName="Új munka hozzáadása" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WorkexperienceDialog
