/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

interface LanguageListProps {
    languages: any[];
    formInputs: any;
    setInputValue: (newInput: any) => void;
}

const LanguageList: React.FC<LanguageListProps> = ({ languages, formInputs, setInputValue }) => {

    const languageName = [
        "A1", "A2", "B1", "B2", "C1", "C2"
    ]


    const [newLanguage, setNewLanguage] = useState<string>("")
    const [languageValue, setLanguageValue] = useState<string>("")

    const addNewLanguage = () => {
        let languagesList = languages
        if (newLanguage.length > 1) {
            let newList = [...languagesList];
            newList.push([newLanguage, languageValue])
            
            setInputValue({
                ...formInputs,
                ["experienceData"]: {
                    ...formInputs["experienceData"],
                    ["languages"]: newList
                }
            })  
            console.log(formInputs)
            setNewLanguage("")
            setLanguageValue("1")
        }
    }

    const deleteLanguage = (languageIndex: number) => {
        let languagesList = formInputs?.experienceData?.languages
        let newList = [...languagesList];
        newList.splice(languageIndex, 1);
        setInputValue({
            ...formInputs,
            ["experienceData"]: {
                ...formInputs["experienceData"],
                ["languages"]: newList
            }
        })  
    }

    return (
        <>
            <label htmlFor="web" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Nyelvek</label>
            <div className="w-full flex flex-col bg-[#F3F4F6] border rounded-lg pt-2">
                {
                    languages?.map((languageElement: any, languageIndex: number) => (
                        <div key={languageIndex} className="bg-white rounded-lg p-2 m-2 flex justify-between flex-initial text-black/80 text-xs">
                            <span className="basis-1/3">{languageElement[0]}</span>
                            <span>{languageName[Number(languageElement[1]) - 1]}</span>
                            <span onClick={(e) => deleteLanguage(languageIndex)} className="space-x-2 text-black/80">
                                <FontAwesomeIcon className="hover:text-red-600 cursor-pointer" icon={faTrash} />
                            </span>
                        </div>
                    ))
                }
                <div className="mb-2 mr-2 ml-auto space-x-4 text-xs">
                    <input value={newLanguage} id="languagenew" onChange={(e) => setNewLanguage(e.target.value)} type="text" className=" rounded-lg p-2 peer bg-white focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="Pl.: Angol" />
                    <select value={languageValue} onChange={(e) => setLanguageValue(e.target.value)} id="skillsValue" className="bg-white rounded-lg p-2 peer outline-none border focus:border-primary transition focus:bg-primary/20">
                        <option value="1" id="a1">A1</option>
                        <option value="2" id="a2">A2</option>
                        <option value="3" id="b1">B1</option>
                        <option value="4" id="b2">B2</option>
                        <option value="5" id="c1">C1</option>
                        <option value="6" id="c2">C2</option>
                    </select>
                    <button onClick={addNewLanguage} className="cursor-pointer hover:bg-primary/80 ml-auto mr-2 bg-primary rounded-lg p-2 px-4 space-x-2 text-white text-xs">
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Hozzáadás</span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default LanguageList
