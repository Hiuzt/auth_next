import React from 'react'
import User from "@/public/user_big.jpg"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faCar, faEnvelope, faLanguage, faMale, faPhone } from '@fortawesome/free-solid-svg-icons'

const CurriculumVitae2 = () => {

    const skillNames = ["Kezdő", "Közepes", "Gyakorlott", "Tapasztalt", "Szakértő"]
    const languageNames = ["A1", "A2", "B1", "B2", "C1", "C2"]

    const data = {
        personalData: {
            image: "",
            imageFile: "",
            firstName: "Kerner",
            lastName: "Dániel",
            email: "kerner.daniel1@gmail.com",
            position: "Szoftverfejlesztő",
            address: "Pécs",
            phoneNumber: "06203184108",
            gender: 1,
            website: "",
            linkedIn: "",
            customFields: {}
        },
        experienceData: {
            desciption: "Kerner Dániel vagyok, 23 éves pályakezdő informatikus. A Pécsi Tudomány Egyetem Mérnöki karán végeztem mérnökinformatikusként 2023 nyarán, ez idő alatt duális képzésben vettem részt a Deutsche Telekomnál. Itt a főbb feladatom automatizálás volt Visual Basic Application-ben Excel reportokat dolgoztam fel. Már kisebb korom óta érdekelt a programozás, ezért 14 évesen kezdtem vele fogalkozni. A webfejlesztés komolyabban csak a szakdolgozatom alatt kezdett érdekelni, a szakdolgozat témám is erre alapult amiben legfőképpen ReactJS illetve ASP.NET-et használtam.",
            workExperience: [
                ["Deutsche Telekom IT Solutions kft", "Trainee", "Pécs", "2019", "2023", 0, "Kerner Dániel vagyok, 23 éves pályakezdő informatikus. A Pécsi Tudomány Egyetem Mérnöki karán végeztem mérnökinformatikusként 2023 nyarán, ez idő alatt duális képzésben vettem részt a Deutsche Telekomnál. Itt a főbb feladatom automatizálás volt Visual Basic Application-ben Excel reportokat dolgoztam fel. Már kisebb korom óta érdekelt a programozás, ezért 14 évesen kezdtem vele fogalkozni. A webfejlesztés komolyabban csak a szakdolgozatom alatt kezdett érdekelni, a szakdolgozat témám is erre alapult amiben legfőképpen ReactJS illetve ASP.NET-et használtam."],
                ["InfoCompass Core kft.", "Software developer", "Pécs", "2024", "2024", 0, "K alatt duális képzésben vettem részt a Deutsche Telekomnál. Itt a főbb feladatom automatizálás volt Visual Basic Application-ben Excel reportokat dolgoztam fel. Már kisebb korom óta érdekelt a programozás, ezért 14 évesen kezdtem vele fogalkozni. A webfejlesztés komolyabban csak a szakdolgozatom alatt kezdett érdekelni, a szakdolgozat témám is erre alapult amiben legfőképpen ReactJS illetve ASP.NET-et használtam."],
                ["Sonrisa Kft.", "UI/UX Designer", "Pécs", "2024", "2024", 0, "asiudh hasiduhasiduhasdiu hsiudhasiudhasiudh hasiduhasiduhasdiu hsiudhasiudhasiudh hasiduhasidu hasdiuhsiudh asiudhasiudh hasiduhasi duhasd iuhsiud hasiud hasiudh kicsit ja"],

            ],
            skills: [
                ["C#", 3],
                ["Javascript", 3],
                ["Umbraco", 3],
                ["Typescript", 3],
                ["React", 3],
                ["Vue", 5],
            ],
            languages: [
                ["Magyar", 6],
                ["Angol", 4],
                ["Német", 2]
            ],
            schools: [
                ["Pécsi Tudomány Egyetem", "Mérnökinformatikus", "BSC", "2019 szept.", "2023 jun."],
                ["Pécsi Tudomány Egyetem", "Mérnökinformatikus", "BSC", "2023 szept.", "2027 jun."],

            ]
        },
        selectedTheme: 1,
    }

    return (
        <div className="bg-[#263345] flex">
            <div className="flex flex-col min-h-screen p-12">
                <div className=" overflow-hidden p-1 bg-white rounded-full ">
                    <Image src={User} alt='' className="w-[192px] rounded-full" />
                </div>
                <div className="flex flex-col justify-center text-normal text-white mt-8">
                    <p className="border-b border-white font-bold uppercase">
                        Elérhetőség
                    </p>
                    <span className="flex mt-4 gap-4">
                        <FontAwesomeIcon className="w-6" icon={faPhone} />
                        <span className="flex flex-col justify-center">
                            <p className="text-xs font-semibold">Telefonszám</p>
                            <p className="text-xs text-white/70">{data?.personalData?.phoneNumber}</p>
                        </span>
                    </span>
                    <span className="flex mt-4 gap-4">
                        <FontAwesomeIcon className="w-6" icon={faAddressBook} />
                        <span className="flex flex-col justify-center">
                            <p className="text-xs font-semibold">Lakhely</p>
                            <p className="text-xs text-white/70">{data?.personalData?.address}</p>
                        </span>
                    </span>
                    <span className="flex mt-4 gap-4">
                        <FontAwesomeIcon className="w-6" icon={faEnvelope} />
                        <span className="flex flex-col justify-center">
                            <p className="text-xs font-semibold">E-Mail cím</p>
                            <p className="text-xs text-white/70">{data?.personalData?.email}</p>
                        </span>
                    </span>
                    <p className="border-b border-white font-bold uppercase my-4">
                        Skillek
                    </p>

                    {data?.experienceData?.skills.map((skillValue, skillIndex) => (
                        <span key={skillIndex} className="flex mt-2 text-sm justify-between">
                            <p>
                                {skillValue[0]}
                            </p>
                            <p className="text-white/70 lowercase">
                                {skillNames[Number(skillValue[1]) - 1]}
                            </p>
                        </span>
                    ))}

                    <p className="border-b border-white font-bold uppercase my-4">
                        Nyelvek
                    </p>

                    {data?.experienceData?.languages.map((languageValue, languageIndex) => (
                        <span key={languageIndex} className="flex mt-2 text-sm justify-between">
                            <p>
                                {languageValue[0]}
                            </p>
                            <p className="text-white/70 uppercase">
                                {languageNames[Number(languageValue[1]) - 1]}
                            </p>
                        </span>
                    ))}

                    <p className={`border-b border-white font-bold uppercase my-4`}>
                        Egyéb
                    </p>
                    <span className="flex mt-4 gap-4">
                        <FontAwesomeIcon className="w-6" icon={faCar} />
                        <span className="flex flex-col justify-center">
                            <p className="text-xs font-semibold">Jogosítvány</p>
                            <p className="text-xs text-white/70">A, B, C</p>
                        </span>
                    </span>
                    <span className="flex mt-4 gap-4">
                        <FontAwesomeIcon className="w-6" icon={faMale} />
                        <span className="flex flex-col justify-center">
                            <p className="text-xs font-semibold">Nem</p>
                            <p className="text-xs text-white/70">Férfi</p>
                        </span>
                    </span>
                    <span className="flex mt-4 gap-4">
                        <FontAwesomeIcon className="w-6" icon={faLanguage} />
                        <span className="flex flex-col justify-center">
                            <p className="text-xs font-semibold">Állampolgárság</p>
                            <p className="text-xs text-white/70">Magyar</p>
                        </span>
                    </span>
                </div>
            </div>
            <div className="bg-[#F5F5F5] w-full flex flex-col">
                <div className="px-12 py-12">
                    <p className="text-5xl text-[#263345]">
                        <span className="font-normal mr-4">{data?.personalData?.firstName}</span>
                        <span className="font-extrabold ">{data?.personalData?.lastName}</span>
                    </p>
                    <p className="text-[#263345]/70 text-xl">Software Developer</p>
                    <p className="text-xl mt-4 font-bold text-[#263345]">
                        Üdvözlöm,
                    </p>
                    <p className="text-sm mt-2 text-justify text-[#263345]/70">{data?.experienceData?.desciption}</p>

                    <p className="border-b text-[#263345] border-[#263345] font-bold uppercase my-4">
                        Tanulmányok
                    </p>
                    <div className="flex flex-col gap-4 relative after:absolute after:w-[1px] after:left-1 after:top-2 after:translate-x-[-50%] after:h-full after:bg-black after:contents-['']">

                        {data?.experienceData?.schools.map((schoolValue, schoolIndex) => (
                            <div key={schoolIndex} className="flex flex-col">

                                <div className="flex flex-col ml-4 relative">
                                    <p className="relative text-sm  text-[#263345] font-bold before:ml-[-16px] before:z-10 before:absolute before:contents-[''] before:border before:border-[#263345]  before:w-2 before:h-2 before:bg-white before:left-0 before:top-[50%] before:translate-y-[-50%] before:rounded-full">
                                        {schoolValue[0]}
                                    </p>
                                    <p className="text-xs text-[#263345]/70 font-bold">
                                        {schoolValue[1]}
                                    </p>
                                    <p className="text-xs text-[#263345]/60">{schoolValue[3]} - {schoolValue[4]}</p>

                                    <span className="text-xs">{schoolValue[2]}</span>
                                </div>

                            </div>
                        ))}
                    </div>

                    <p className="text-[#263345] border-b border-[#263345] font-bold uppercase my-4">
                        Tapasztalat
                    </p>
                    <div className="flex flex-col gap-4 relative after:absolute after:w-[1px] after:left-1 after:top-2 after:translate-x-[-50%] after:h-full after:bg-black after:contents-['']">

                        {data?.experienceData?.workExperience.map((workValue, workIndex) => (
                            <div key={workIndex} className="grid grid-cols-12">

                                <div className="flex flex-col ml-4 col-span-4 relative text-[#263345] ">
                                    <p className="relative text-sm  font-bold before:ml-[-16px] before:z-10 before:absolute before:contents-[''] before:border before:border-black before:w-2 before:h-2 before:bg-white before:left-0 before:top-[50%] before:translate-y-[-50%] before:rounded-full">
                                        {workValue[1]}
                                    </p>
                                    <p className="text-xs text-[#263345]/60">
                                        {workValue[2]}
                                    </p>
                                    <p className="text-xs font-bold">{workValue[3]} - {workValue[4]}</p>
                                </div>
                                <div className="text-sm col-span-8 w-full text-justify text-[#263345]">
                                    <span className="font-bold">{workValue[0]}</span>
                                    <p className="text-xs text-[#263345]/80 mt-2">{workValue[6]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CurriculumVitae2
