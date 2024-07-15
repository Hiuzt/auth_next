import React, { FormEvent } from 'react'

interface ButtonInputProps {
    inputID: string;
    buttonName: string;
    buttonIcon?: string;
    buttonAction: (e: FormEvent<HTMLFormElement>) => void;
}

const ButtonInput:React.FC<ButtonInputProps> = ({inputID, buttonName, buttonIcon, buttonAction}) => {
  return (
    <button id={inputID} onClick={(e) => buttonAction} className="bg-primary rounded-lg w-full p-2 px-12 ml-auto text-white hover:bg-primary/80 transition">
        {buttonName}
        {buttonIcon !== undefined && (
            <span>With icon</span>
        )}
    </button>
  )
}

export default ButtonInput
