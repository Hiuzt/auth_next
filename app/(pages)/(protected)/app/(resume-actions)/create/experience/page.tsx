"use client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import User from "@/public/user_big.jpg"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateContext } from '@/app/providers/CreateProvider';


export default function Page() {
    const { data: session, status } = useSession()
    const router = useRouter();

    const data = useCreateContext()
    const [formInputs, setInputValue] = useState<any>(data?.data);

    let workExperience = {}

    // (string | number)[]
    const [skillsList, setSkills] = useState<any>([])

    const [newSkill, setNewSkill] = useState<string>("")
    const [skillValue, setSkillValue] = useState<string>("1");

    const skillName = [
        "Kezdő",
        "Junior",
        "Medior",
        "Senior",
        "Expert"
    ]

    const languageList = [
        ["Angol", 4],
        ["Német", 2]
    ]

    const languageName = [
        "A1", "A2", "B1", "B2", "C1", "C2"
    ]

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/auth/login', { scroll: false })
        }

    }, [status, router])

    const handleNextStep = () => {
        router.push("theme")
    }

    const addNewSkill = () => {
        console.log(newSkill.length)
        if (newSkill.length > 1) {
            let newList = [...skillsList];
            newList.push([newSkill, skillValue])
            setSkills(newList)
            setNewSkill("")
            setSkillValue("1")
        }
    }

    const deleteSkill = (skillIndex: number) => {
        let newList = [...skillsList];
        newList.splice(skillIndex, 1);
        setSkills(newList)
    }

    return (
        <div className="flex flex-col w-1/2 mx-auto">
            <div className="mx-auto w-full">
                <div className="text-xl font-semibold px-32 mt-6 text-gray-700 ">Személyes adatok</div>
                <div className="px-32 py-4 flex flex-col gap-8">


                    <div className="flex flex-col-reverse">
                        <textarea id="web"  className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="Leírás..." />
                        <label htmlFor="web" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Leírás</label>
                    </div>
                    <div className="flex flex-col">

                        <label htmlFor="web" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Munkatapasztalat</label>
                        <div className="w-full flex flex-col bg-[#F3F4F6] border rounded-lg text-xs">
                            
                            {
                                formInputs?.experienceData?.workExperience?.map((workElement: any, workIndex: any) => (
                                    <ul key={workIndex} className="bg-white rounded-lg p-2 m-2 flex justify-between text-black/80">
                                        <li className="basis-1/4">{workElement[0]}</li>
                                        <li>{workElement[1]}</li>
                                        <li>{workElement[2]}</li>
                                        <li className="space-x-2 text-black/80">
                                             <FontAwesomeIcon className="hover:text-yellow-600 cursor-pointer" icon={faEdit} />
                                            <FontAwesomeIcon className="hover:text-red-600 cursor-pointer" icon={faTrash} />
                                        </li>
                                    </ul>
                                ))
                            }
                            <div className="cursor-pointer hover:bg-primary/80 ml-auto mr-2 bg-primary rounded-lg p-2 my-2 px-4 space-x-2 text-white text-xs">
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Hozzáadás</span>
                            </div>
                        </div>                        
                    </div>
                    <div className="flex flex-col">

                        <label htmlFor="web" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Készségek</label>
                        <div className="w-full flex flex-col bg-[#F3F4F6] border rounded-lg">
                            {
                                skillsList.map((skillsElement: any, skillsIndex: any) => (
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

                        
                    </div>
                    <div className="flex flex-col">

                        <label htmlFor="web" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Nyelvek</label>
                        <div className="w-full flex flex-col bg-[#F3F4F6] border rounded-lg">
                            {
                                languageList.map((languageElement, languageIndex) => (
                                    <div key={languageIndex} className="bg-white rounded-lg p-2 m-2 flex justify-between flex-initial text-black/80 text-xs">
                                        <span className="basis-1/3">{languageElement[0]}</span>
                                        <span>{languageName[Number(languageElement[1]) - 1]}</span>
                                        <span className="space-x-2 text-black/80">
                                            <FontAwesomeIcon className="hover:text-red-600 cursor-pointer" icon={faTrash} />
                                        </span>
                                    </div>
                                ))
                            }
                            <div className="mb-2 mr-2 ml-auto space-x-4 text-xs">
                            <input id="web" type="text" className=" rounded-lg p-2 peer bg-white focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="Pl.: Angol" />
                            <select id="skillsValue" className="bg-white rounded-lg p-2 peer outline-none border focus:border-primary transition focus:bg-primary/20">
                                <option value="male" id="male">A1</option>
                                <option value="male" id="male">A2</option>
                                <option value="male" id="male">B1</option>
                                <option value="male" id="male">B2</option>
                                <option value="male" id="male">C1</option>
                                <option value="male" id="male">C2</option>
                            </select>
                                <button className="cursor-pointer hover:bg-primary/80 ml-auto mr-2 bg-primary rounded-lg p-2 px-4 space-x-2 text-white text-xs">
                                    <FontAwesomeIcon icon={faPlus} />
                                    <span>Hozzáadás</span>
                                </button>
                            </div>
                        </div>

                        
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link href={"/app/create/personal"} className='ml-auto mr-2 text-sm text-black/80'>
                            <FontAwesomeIcon className="mr-2" icon={faChevronLeft} />
                            Vissza</Link>
                        <button onClick={handleNextStep} className="bg-primary rounded-lg w-fit p-2 px-12 text-white hover:bg-primary/80">Tovább</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
