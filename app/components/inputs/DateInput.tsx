import React, { ChangeEvent, useState } from 'react'
import Datepicker, { DateRangeType } from 'react-tailwindcss-datepicker';

interface DateInputProps {
    inputID: string;
    inputName: string;
    changeValue: (newValue: any) => void;
    value: DateRangeType | null;

}

const DateInput: React.FC<DateInputProps>  = ({inputID, inputName, changeValue, value}) => {

    return (
        <div className="flex flex-col-reverse">
        
            <Datepicker
                value={value}
                asSingle={true}
                useRange={false}
                onChange={changeValue}
                displayFormat={"YYYY/MM/DD"} 
                placeholder='ÉÉÉÉ/HH/NN'
                inputClassName="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary peer outline-none focus:border-[1px] border transition"
            />
            <label htmlFor={inputID} className="text-xs font-semibold text-gray-700 peer-focus:text-primary">{inputName}</label>
        </div>
    );
}


export default DateInput
