import React from 'react'

interface TextInputProps {
    inputName: string;
    inputID: string;
    placeHolder: string;
    inputValue: string;
    changeValue: (e: any) => void;
}

const TextInput: React.FC<TextInputProps> = ({inputName, inputID, placeHolder, inputValue, changeValue}) => {
  return (
    <div className="flex flex-col-reverse col-span-2">
        <input onChange={changeValue} id={inputID} type="text" className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder={placeHolder} value={inputValue} />
        <label htmlFor={inputID} className="text-xs font-semibold text-gray-700 peer-focus:text-primary">{inputName}</label>
    </div>
  )
}

export default TextInput
