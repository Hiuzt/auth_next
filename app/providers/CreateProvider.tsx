"use client"

import {createContext, useContext, useState} from "react";

const CreateContext = createContext<DataContextType |undefined>(undefined);

interface FormInputs {
    personalData: {
        [key: string]: any;
    },
    experienceData: {
        [key: string]: any;
    }
}

interface DataContextType {
    data: FormInputs;
    changeData: (data: FormInputs) => void;
}


export function useCreateContext() {
    return useContext(CreateContext);
}

export default function CreateProvider ({children}: {children: React.ReactNode}) {
    const [data, setData] = useState<any>({
        personalData: {
            image: "",
            imageFile: "",
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            phoneNumber: "",
            gender: 1,
            website: "",
            linkedIn: "",
            customFields: {}
        },
        experienceData: {
            desciption: "",
            workExperience: {},
            skills: {},
            languages: {},
        },
        selectedTheme: 1,
    })

    return (
        <CreateContext.Provider value={{data: data, changeData: setData}}>
            {children}
        </CreateContext.Provider>
    )
}
