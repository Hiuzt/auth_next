import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker';

interface DateInputProps {
    inputID: string;
    inputName: string;

}

const DateInput: React.FC<DateInputProps>  = ({inputID, inputName}) => {
    const [value, setValue] = useState<any>({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    const customClassNames = (p?: object | null): string | undefined => {
        return 'bg-white text-black'; // Example of custom class names
    };

    return (
        <>
        <label htmlFor={inputID} className="text-xs font-semibold text-gray-700 peer-focus:text-primary">{inputName}</label>
            <Datepicker
                value={value}
                asSingle={true}
                useRange={false}
                onChange={handleValueChange}
            />
        </>
    );
}

export default DateInput
