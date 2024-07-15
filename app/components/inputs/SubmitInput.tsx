import React, { FormEvent } from 'react'

interface SubmitInputProps {
    inputID: string;
    buttonName: string;
    buttonIcon?: string;
}

const SubmitInput:React.FC<SubmitInputProps> = ({inputID, buttonName, buttonIcon}) => {
    return (
        <input type="submit" id={inputID} value={buttonName} className="cursor-pointer bg-primary rounded-lg w-full p-2 px-12 ml-auto text-white hover:bg-primary/80 transition" />
      )
}

export default SubmitInput
