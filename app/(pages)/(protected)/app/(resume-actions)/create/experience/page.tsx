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
import LanguageList from '@/app/components/LanguageList';
import SkillsList from '@/app/components/SkillsList';
import WorkexperienceList from '@/app/components/WorkexperienceList';


export default function Page() {
    const { data: session, status } = useSession()
    const router = useRouter();
    const createData = useCreateContext()
    const [formInputs, setInputValue] = useState<any>(createData?.data);
    const [workExperience, setWorkExperience] = useState<any>([])





    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/auth/login', { scroll: false })
        }

    }, [status, router])

    useEffect(() => {
        createData?.changeData(formInputs)
    }, [formInputs, createData])

    const handleNextStep = () => {
        router.push("theme")
    }


    return (
        <div className="flex flex-col w-1/2 mx-auto">
            <div className="mx-auto w-full">
                <div className="text-xl font-semibold px-32 mt-6 text-gray-700 ">Tapasztalatok</div>
                <div className="px-32 py-4 flex flex-col gap-8">


                    <div className="flex flex-col-reverse">
                        <textarea id="web" className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="Leírás..." />
                        <label htmlFor="web" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Leírás</label>
                    </div>
                    <div className="flex flex-col">

                        <WorkexperienceList formInputs={formInputs} setInputValue={setInputValue} />
                    </div>
                    <div className="flex flex-col">
                        <SkillsList skills={formInputs?.experienceData?.skills} formInputs={formInputs} setInputValue={setInputValue} />
                    </div>
                    <div className="flex flex-col">
                        <LanguageList languages={formInputs?.experienceData?.languages} formInputs={formInputs} setInputValue={setInputValue} />
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
