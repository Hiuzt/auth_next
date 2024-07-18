"use client"
import { faAddressBook, faCircle, faEnvelope, faMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import html2canvas from 'html2canvas';


const CurriculumVitae1: React.FC<any> = ({ }) => {
    const cvRef = useRef<any>();

    const handleCapture = async () => {
        const cvElement = cvRef.current;
        const canvas = await html2canvas(cvElement)
        const dataURL = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'capture.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const data = {
        personalData: {
            image: "",
            imageFile: "",
            firstName: "Kerner",
            lastName: "Dániel",
            email: "kerner.daniel1@gmail.com",
            position: "Szoftverfejlesztő",
            address: "Pécs",
            phoneNumber: "+36203184108",
            gender: 1,
            website: "",
            linkedIn: "",
            customFields: {}
        },
        experienceData: {
            desciption: "Kerner Dániel vagyok, 23 éves pályakezdő informatikus. A Pécsi Tudomány Egyetem Mérnöki karán végeztem mérnökinformatikusként 2023 nyarán, ez idő alatt duális képzésben vettem részt a Deutsche Telekomnál. Itt a főbb feladatom automatizálás volt Visual Basic Application-ben Excel reportokat dolgoztam fel. Már kisebb korom óta érdekelt a programozás, ezért 14 évesen kezdtem vele fogalkozni. A webfejlesztés komolyabban csak a szakdolgozatom alatt kezdett érdekelni, a szakdolgozat témám is erre alapult amiben legfőképpen ReactJS illetve ASP.NET-et használtam.",
            workExperience: [
                ["Deutsche Telekom IT Solutions kft", "Trainee", "Pécs", "2019", "2023", 0, "Dolgoztam itt isasdas dasid ohasuiod hasiduhasiduhasdiuhsiudhasiudhasiudh hasiduhasiduhasdiuhsiudhasiudhasiudh hasiduhasiduhasdiuhsiudhasiudhasiudh hasiduhasiduhasdiuhsiudhasiudhasiudh hasiduhasiduhasdiuhsiudhasiudhasiudh kicsit ja"],
                ["InfoCompass Core kft.", "Software developer", "Pécs", "2024", "2024", 0, "Dolgoztam itt isasdas dasid ohasuiod hasiduhasiduhasdiuhsiudhasiudhasiudh hasiduhasiduhasdiuhsiudhasiudhasiudh hasiduhasiduhasdiuhsiudhasiudhasiudh hasiduhasiduhasdiuhsiudhasiudhasiudh hasiduhasiduhasdiuhsiudhasiudhasiudh kicsit ja"],
                
            ],
            skills: [],
            languages: [],
            schools: [
                ["Pécsi Tudomány Egyetem", "Mérnökinformatikus", "BSC", "2019", "2023"],
                ["Pécsi Tudomány Egyetem", "Mérnökinformatikus", "BSC", "2019", "2023"],
            ]
        },
        selectedTheme: 1,
    }

    const currentColor = 0
    const colorList = [
        "primary",
        "red-600",
        "green-600"
    ]

    return (
        //Container
        <div onClick={handleCapture} ref={cvRef} className="m-0 p-0 grid-cols-2">
            {/* Header */}
            {/* ${colorList[currentColor]} */}
            <header className="bg-[#36383E]">
                <div className={`flex flex-col justify-left text-center text-white  items-center w-[300px] p-8 relative
                    after:bg-[#36383E] after:contents-[''] after:w-[300px] after:h-[300px]  after:absolute after:bottom-[-50px] after:z-0 after:rounded-full after:left-0 
                `}>
                    <p className='text-2xl  font-bold z-10'>
                        {data?.personalData?.firstName} {data?.personalData?.lastName}

                    </p>
                    <p className="text-normal z-10">
                        {data?.personalData?.position}
                    </p>
                    <p>
                    {/* <Image src={User} alt='' className=" rounded-full z-10  w-32 absolute" /> */}
                    </p>
                </div>
            </header>
            <div className="flex text-white">
                <div className="bg-primary min-w-[300px] pt-16 min-h-screen overflow-hidden list-none">
                    <div className="border-b border-[#36383E] pb-6 mx-4">
                        <li className="text-center font-semibold">Személyes információk</li>
                        <li className="mt-4 flex gap-2 items-center text-white">
                            <div className="bg-[#36383E] rounded-full w-8 h-8 flex items-center justify-center">
                                <FontAwesomeIcon className="w-4 text-white" icon={faEnvelope} />
                            </div>
                            <p className="text-sm">
                                {data?.personalData?.email}
                            </p>
                        </li>
                        <li className="mt-4 flex gap-2 items-center text-white">
                            <div className="bg-[#36383E] rounded-full w-8 h-8 flex items-center justify-center">
                                <FontAwesomeIcon className="w-4 text-white" icon={faPhone} />
                            </div>
                            <p className="text-sm">
                                {data?.personalData?.phoneNumber}
                            </p>
                        </li>
                        <li className="mt-4 flex gap-2 items-center text-white">
                            <div className="bg-[#36383E] rounded-full w-8 h-8 flex items-center justify-center">
                                <FontAwesomeIcon className="w-4 text-white" icon={faAddressBook} />
                            </div>
                            <p className="text-sm">
                                {data?.personalData?.address}
                            </p>
                        </li>
                    </div>

                    <div className="border-b border-[#36383E] py-6 mx-4">
                        <li className="text-center font-semibold">Tanulmányok</li>
                        {data?.experienceData?.schools.map((schoolValue, schoolIndex) => (
                            <li key={schoolIndex} className="mt-4 pl-4 flex justify-start flex-col relative
                        before:contents-[''] before:bg-white before:absolute before:left-0 before:w-2 before:h-2 before:top-2 before:rounded-full
                        after:contents-[''] after:bg-white after:absolute after:left-[4px] after:top-5 after:w-[1px] after:h-[60%]
                        ">
                                <h1 className="font-semibold text-md">
                                    {schoolValue[0]}
                                </h1>
                                <p className="text-xs">
                                    {schoolValue[1]} ({schoolValue[2]})
                                </p>
                                <p className="text-xs">
                                    {schoolValue[3]} - {schoolValue[4]}
                                </p>
                            </li>
                        ))}
                    </div>
                    <div className="border-b border-[#36383E] py-6 mx-4">
                        <li className="text-center font-semibold">Nyelvek</li>
                        <li className="mt-4 flex justify-between gap-2 items-center text-white">
                            Angol
                            <div className="flex gap-2">

                                <FontAwesomeIcon className="w-2 text-white" icon={faCircle} />
                                <FontAwesomeIcon className="w-2 text-white" icon={faCircle} />
                                <FontAwesomeIcon className="w-2 text-white" icon={faCircle} />
                                <FontAwesomeIcon className="w-2 text-white" icon={faCircle} />
                                <FontAwesomeIcon className="w-2 text-white/30" icon={faCircle} />
                                <FontAwesomeIcon className="w-2 text-white/30" icon={faCircle} />
                            </div>
                        </li>
                        <li className="mt-4 flex justify-between gap-2 items-center text-white">
                            Német
                            <div className="flex gap-2">

                                <FontAwesomeIcon className="w-2 text-white" icon={faCircle} />
                                <FontAwesomeIcon className="w-2 text-white" icon={faCircle} />
                                <FontAwesomeIcon className="w-2 text-white" icon={faCircle} />
                                <FontAwesomeIcon className="w-2 text-white/30" icon={faCircle} />
                                <FontAwesomeIcon className="w-2 text-white/30" icon={faCircle} />
                                <FontAwesomeIcon className="w-2 text-white/30" icon={faCircle} />
                            </div>
                        </li>
                    </div>
                    <div className="border-b border-[#36383E] py-6 mx-4">
                    <li className="text-center font-semibold">Egyéb</li>
                        <li className="mt-4 flex gap-2 items-center text-white justify-between">
                            <p className="text-sm">
                                Jogosítvány
                            </p>
                            <p className="text-sm">
                                B
                            </p>
                        </li>
                        <li className="mt-4 flex gap-2 items-center text-white justify-between">
                            <p className="text-sm">
                                Nem
                            </p>
                            <p className="text-sm">
                                Férfi
                            </p>
                        </li>
                        <li className="mt-4 flex gap-2 items-center text-white justify-between">
                            <p className="text-sm">
                                Állampolgárság
                            </p>
                            <p className="text-sm">
                                Magyar
                            </p>
                        </li>
                    </div>
                </div>
                <div className="w-full mx-8">
                    <h1 className="border-b text-primary font-bold mt-4 text-2xl">Összefoglaló</h1>
                    <p className="w-full text-justify mt-4 text-sm text-[#36383E]">
                        {data?.experienceData?.desciption}
                    </p>
                    <h1 className="border-b text-primary font-bold mt-4 text-2xl">Munkahelyi tapasztalat</h1>
                    <div className="flex flex-col">
                        {data?.experienceData?.workExperience.map((workValue, workIndex) => (
                            <div className="[&:not(:last-child)]:border-b py-4" key={workIndex}>
                                <h2 className="font-bold text-[#36383E]">{workValue[0]} ({workValue[3]} - {workValue[4]})</h2>
                                <h3 className="font-semibold text-lg text-black/50">{workValue[2]}</h3>
                                <h3 className="font-semibold text-sm text-black/50">{workValue[1]}</h3>
                                <p className="text-[#36383E] text-sm leading-6">{workValue[6]}</p>
                            </div>
                        ))}           
                    </div>
                    <h1 className="border-b text-primary font-bold mt-4 text-2xl">Készségek</h1>
                    <div className="grid grid-cols-2 mt-4 text-[#36383E]">
                        <div className="flex justify-between items-center">
                            <span>C#</span>
                            <span className="text-black text-lg flex gap-2">
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary/30 w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary/30 w-2 h-2" icon={faCircle} />
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Javascript</span>
                            <span className="text-black text-lg flex gap-2">
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary/30 w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary/30 w-2 h-2" icon={faCircle} />
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Umbraco</span>
                            <span className="text-black text-lg flex gap-2">
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary/30 w-2 h-2" icon={faCircle} />
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Typescript</span>
                            <span className="text-black text-lg flex gap-2">
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary/30 w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary/30 w-2 h-2" icon={faCircle} />
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>React</span>
                            <span className="text-black text-lg flex gap-2">
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary/30 w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary/30 w-2 h-2" icon={faCircle} />
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Vue</span>
                            <span className="text-black text-lg flex gap-2">
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary/30 w-2 h-2" icon={faCircle} />
                                <FontAwesomeIcon className="text-primary/30 w-2 h-2" icon={faCircle} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurriculumVitae1
