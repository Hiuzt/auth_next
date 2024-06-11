import React, { ForwardRefRenderFunction, HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    ref: string;
    value?: string;
    onChange: (e: any) => void;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ onChange, value, name, label, ...otherProps }, ref) => {
    return (
        <label className="">
            {label}
            <input
                className=""
                {...otherProps}
                name={name}
                ref={ref}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </label>
    );
};

const TextInput = React.forwardRef(Input);

export default TextInput;