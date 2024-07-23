"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, FormEventHandler, useContext, useEffect, useRef, useState } from "react"
import User from "@/public/nopicture.png"
import Image, { StaticImageData } from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera, faPhotoFilm, faPlus } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { useCreateContext } from "@/app/providers/CreateProvider"


type fieldName = "birthdate" | "license" | "birthplace" | "country"


export default function Page() {
    const { data: session, status } = useSession()
    const router = useRouter()

    const data = useCreateContext()
    const [formInputs, setInputValue] = useState<any>(data?.data);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/auth/login', { scroll: false })
        }
    }, [status, router, formInputs])

    const [addedFields, setAddedFields] = useState<any>({
        "birthdate": [false, "Születési idő"],
        "license": [false, "Jogosítvány"],
        "birthplace": [false, "Születési hely"],
        "country": [false, "Állampolgárság"],
    })

    const changeField = (fieldName: string, fieldValue: boolean) => {
        setAddedFields({
            ...addedFields,
            [fieldName]: [true, addedFields[fieldName][1]],
        });
    }


    const changeInput = async (inputName: (string), inputValue: any) => {
        setInputValue({
            ...formInputs,
            ["personalData"]: {
                ...formInputs["personalData"],
                [inputName]: inputValue
            }
        })
    }

    useEffect(() => {
        data?.changeData(formInputs)
    }, [formInputs, data])

    const handleNextStep = () => {
        router.push("experience")
    }

    const profileImageRef = useRef<HTMLImageElement>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const changeImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (inputFileRef.current?.files && inputFileRef.current?.files.length > 0) {
            const imageSrc = URL.createObjectURL(inputFileRef.current.files[0]);
            if (profileImageRef.current) {
                setInputValue({
                    ...formInputs,
                    ["personalData"]: {
                        ...formInputs["personalData"],
                        ["image"]: imageSrc,
                        ["imageFile"]: inputFileRef.current.files[0]
                    }
                })
            }

        }
    }


    return (
        <div className="flex flex-col w-1/2 mx-auto">
            <div className="mx-auto">
                <div className="text-xl font-semibold px-32 mt-6 text-gray-700 ">Személyes adatok</div>
                <div className="px-32 py-4 flex flex-col gap-8">
                    <div className="flex gap-4">
                        <div className="flex flex-col justify-between">
                            <label htmlFor="image" className="text-xs font-semibold">Fénykép</label>
                            <div className="bg-gray-100 aspect-square w-32 rounded-lg overflow-hidden relative">
                                <Image ref={profileImageRef} className="w-full cursor-pointer peer" src={formInputs["personalData"]?.image} width={128} height={128} alt="" />
                                <label htmlFor="image" className="bg-black/30 backdrop-blur-sm hidden hover:flex peer-hover:flex items-center cursor-pointer  absolute left-0 top-0 w-full h-full">
                                    <FontAwesomeIcon icon={faCamera} className="m-auto text-center text-white w-8 h-8" />
                                </label>
                                <input accept="image/*" ref={inputFileRef} onChange={(e) => changeImage(e)} id="image" type="file" className="hidden" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 place-content-between gap-4 w-full">
                            <div className="flex flex-col">
                                <label htmlFor="firstname" className="text-xs font-semibold text-gray-700 ">Vezetéknév</label>
                                <input id="firstname" type="text" className="bg-gray-100 rounded-lg p-2 cursor-not-allowed border" placeholder="Vezetéknév" value={session?.user?.firstname} disabled />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="firstname" className="text-xs font-semibold text-gray-700">Keresztnév</label>
                                <input id="firstname" type="text" className="bg-gray-100 rounded-lg p-2 cursor-not-allowed border" placeholder="Vezetéknév" value={session?.user?.lastname} disabled />
                            </div>
                            <div className="flex flex-col col-span-2">
                                <label htmlFor="email" className="text-xs font-semibold text-gray-700">E-mail</label>
                                <input id="email" type="text" className="bg-gray-100 rounded-lg p-2 cursor-not-allowed border" placeholder="E-Mail" value={session?.user?.email} disabled />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse">
                        <input onChange={(e) => changeInput("address", e.target.value)} value={formInputs?.personalData?.address} id="place" type="text" className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="Cím" />
                        <label htmlFor="place" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Cím</label>
                    </div>
                    <div className="flex flex-col-reverse">
                        <input onChange={(e) => changeInput("phoneNumber", e.target.value)} value={formInputs?.personalData?.phoneNumber} id="phone" type="number" className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="Telefonszám" />
                        <label htmlFor="phone" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Telefonszám</label>
                    </div>
                    <div className="flex flex-col-reverse">

                        <select onChange={(e) => changeInput("gender", e.target.value)} value={formInputs?.personalData?.gender} id="gender" className="bg-gray-100 rounded-lg p-2 peer outline-none border focus:border-primary transition focus:bg-primary/20">
                            <option value="1" id="male">Férfi</option>
                            <option value="2" id="male">Nő</option>
                        </select>
                        <label htmlFor="gender" className="text-xs font-semibold text-gray-700 peer-focus:text-primary transition">Nem</label>
                    </div>
                    <div className="flex flex-col-reverse">
                        <input onChange={(e) => changeInput("website", e.target.value)} value={formInputs?.personalData?.website} id="web" type="text" className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="Weboldal" />
                        <label htmlFor="web" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">Weboldal</label>
                    </div>
                    <div className="flex flex-col-reverse">
                        <input onChange={(e) => changeInput("linkedIn", e.target.value)} value={formInputs?.personalData?.linkedIn} id="linkedin" type="text" className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder="LinkedIn" />
                        <label htmlFor="linkedin" className="text-xs font-semibold text-gray-700 peer-focus:text-primary">LinkedIn</label>
                    </div>
                    {Object.keys(addedFields).map((fieldName: any) => (
                        <div key={fieldName} className={`flex flex-col-reverse ${addedFields[fieldName][0] === false && ("hidden")}`}>
                            <input id={fieldName} type="text" className="bg-gray-100 rounded-lg p-2 peer focus:bg-primary/20 focus:border-primary outline-none focus:border-[1px] border transition" placeholder={addedFields[fieldName][1]} />
                            <label htmlFor={fieldName} className="text-xs font-semibold text-gray-700 peer-focus:text-primary">{addedFields[fieldName][1]}</label>
                        </div>
                    ))}

                    <div className="flex flex-wrap gap-6">
                        <button className={`text-gray-800 bg-gray-100 border p-2 px-4 rounded-[20px]`}>Egyedi mező<FontAwesomeIcon className="ml-2" icon={faPlus} /></button>
                        <button onClick={(e) => changeField("license", true)} className={`text-gray-800 bg-gray-100 border p-2 px-4 rounded-[20px] ${addedFields["license"][0] === true && 'hidden'}`}>Jogosítvány<FontAwesomeIcon className="ml-2" icon={faPlus} /></button>
                        <button onClick={(e) => changeField("birthdate", true)} className={`text-gray-800 bg-gray-100 border p-2 px-4 rounded-[20px] ${addedFields["birthdate"][0] === true && 'hidden'}`}>Születési idő<FontAwesomeIcon className="ml-2" icon={faPlus} /></button>
                        <button onClick={(e) => changeField("birthplace", true)} className={`text-gray-800 bg-gray-100 border p-2 px-4 rounded-[20px] ${addedFields["birthplace"][0] === true && 'hidden'}`}>Születési hely<FontAwesomeIcon className="ml-2" icon={faPlus} /></button>
                        <button onClick={(e) => changeField("country", true)} className={`text-gray-800 bg-gray-100 border p-2 px-4 rounded-[20px] ${addedFields["country"][0] === true && 'hidden'}`}>Állampolgárság<FontAwesomeIcon className="ml-2" icon={faPlus} /></button>
                    </div>
                    <button onClick={handleNextStep} className="bg-primary rounded-lg w-fit p-2 px-12 ml-auto text-white hover:bg-primary/80">Tovább</button>
                </div>
            </div>
        </div>
    )
}