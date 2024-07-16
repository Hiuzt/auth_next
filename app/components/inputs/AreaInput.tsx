import React, { ChangeEvent } from 'react'

interface AreaInputProps {
    inputID: string;
    inputName: string;
    placeHolder: string;
    changeValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}


const AreaInput:React.FC<AreaInputProps> = ({inputID, inputName, placeHolder, changeValue}) => {
  return (
    <div className="flex flex-col-reverse col-span-2">
        <textarea onChange={changeValue} id={inputID} className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder={placeHolder} />
        <label htmlFor={inputID} className="text-xs font-semibold text-gray-700 peer-focus:text-primary">{inputName}</label>
    </div>
  )
}

export default AreaInput
