import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'


interface LanguageListProps {
    skills: any[];
    formInputs: any;
    setInputValue: (newInput: any) => void;
}

const SkillsList: React.FC<LanguageListProps> = ({ skills, formInputs, setInputValue }) => {
    const [newSkill, setNewSkill] = useState<string>("")
    const [skillValue, setSkillValue] = useState<string>("1");


    const skillName = [
        "Kezdő",
        "Junior",
        "Medior",
        "Senior",
        "Expert"
    ]



    const addNewSkill = () => {
        let skillsList = formInputs?.experienceData?.skills
        if (newSkill.length > 1) {
            let newList = [...skillsList];
            newList.push([newSkill, skillValue])

            setInputValue({
                ...formInputs,
                ["experienceData"]: {
                    ...formInputs["experienceData"],
                    ["skills"]: newList
                }
            })
            console.log(formInputs)
            setNewSkill("")
            setSkillValue("1")
        }
    }

    const deleteSkill = (skillIndex: number) => {
        let skillsList = formInputs?.experienceData?.skills
        let newList = [...skillsList];
        newList.splice(skillIndex, 1);
        setInputValue({
            ...formInputs,
            ["experienceData"]: {
                ...formInputs["experienceData"],
                ["skills"]: newList
            }
        })
    }



    return (
        <>
            <label htmlFor="web" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Készségek</label>
            <div className="w-full flex flex-col bg-[#F3F4F6] border rounded-lg">
                {
                    formInputs?.experienceData?.skills?.map((skillsElement: any, skillsIndex: number) => (
                        <div key={skillsIndex} className="bg-white rounded-lg p-2 m-2 flex justify-between text-black/80 text-xs">
                            <span className="basis-1/3">{skillsElement[0]}</span>
                            <span>{skillName[Number(skillsElement[1]) - 1]}</span>
                            <span onClick={() => deleteSkill(skillsIndex)} className="space-x-2 text-black/80">
                                <FontAwesomeIcon className="hover:text-red-600 cursor-pointer" icon={faTrash} />
                            </span>
                        </div>
                    ))
                }
                <div className="mx-2 ml-auto space-x-4 text-xs">
                    <input onChange={(e) => setNewSkill(e.target.value)} value={newSkill} id="web" type="text" className=" rounded-lg p-2 peer bg-white focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="Skill név" />
                    <select onChange={(e) => setSkillValue(e.target.value)} value={skillValue} id="skillsValue" className="bg-white rounded-lg p-2 peer outline-none border focus:border-primary transition focus:bg-primary/20">
                        <option value="1" id="1">Kezdő</option>
                        <option value="2" id="2">Junior</option>
                        <option value="3" id="3">Medior</option>
                        <option value="4" id="4">Senior</option>
                        <option value="5" id="5">Expert</option>
                    </select>
                    <button onClick={addNewSkill} className="cursor-pointer hover:bg-primary/80 ml-auto mr-2 bg-primary rounded-lg p-2 my-2 px-4 space-x-2 text-white text-xs">
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Hozzáadás</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SkillsList
