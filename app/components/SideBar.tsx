import Image from 'next/image';
import React, { useState } from 'react'
import LogoSVG from "@/public/logo.svg"
import User from "@/public/usrbg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHouse, faPaperclip, faMessage, faEnvelope, faGear, faDoorClosed, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SideBar = () => {
    const menuNames: any = [
        ["Főoldal", faHouse],
        ["Önéletrajz", faPaperclip],
        ["Kísérő levél", faEnvelope]
    ]

    const modalMenu: any = [
        ["Új önéletrajz", faPaperclip, "/create"],
        ["Új kísérő levél", faEnvelope]
    ]

    const router = useRouter();

    const { data: session, status } = useSession()
    const [showModal, setModal] = useState<Boolean>(false)

    const [showProfileModal, setProfileModal] = useState<Boolean>(false)

    const handleModalClick = () => {
        router.push("create/personal")
    }

    return (

        <aside onClick={() => {
            setModal(false)
            
        }} className="sticky left-0 top-0 bg-gradient-to-br from-slate-50/10 to-primary/20 h-screen flex flex-col max-w-[250px] w-full bg-[#fafafa] border-r border-black/10 divide-y divide-gray-300">
            <div className='p-4'>
                <Image src={LogoSVG} alt='' className="w-16 mx-auto" />
            </div>
            <div className='p-4'>
                <div onClick={(e) => e.stopPropagation()} className='relative'>
                    <button onClick={() => setModal(!showModal)} className="bg-inherit border transition hover:bg-black/10 border-gray-500 rounded-[20px] flex items-center justify-center py-2 mx-auto w-full text-base gap-4 font-bold text-gray-500 relative">
                        <span><FontAwesomeIcon className=" w-4" icon={faPlus} /></span>
                        <span>Létrehozás</span>
                    </button>
                    {showModal && (
                        <ul className={"absolute left-0 bottom--[100%] bg-white text-gray-700 border rounded-[20px] w-full mt-2 divide-y divide-y-gray-500"}>
                            {modalMenu.map((modalValue: any, modalIndex: number) => (
                                <li onClick={handleModalClick} className="cursor-pointer hover:bg-black/10 first:hover:rounded-t-[20px] last:hover:rounded-b-[20px] h-full p-4 text-sm" key={modalIndex}>
                                    <FontAwesomeIcon className='w-5 h-5 mr-4' icon={modalValue[1]} />
                                    {modalValue[0]}
                                </li>
                            ))}
                        </ul>
                    )}

                </div>

                <ul className="mt-4 space-y-3">
                    {menuNames.map((menuValue: any, menuIndex: number) => (
                        <li className="cursor-pointer hover:bg-black/10 rounded-lg transition p-2 flex text-gray-700" key={menuIndex}>
                            <FontAwesomeIcon className='w-5 h-5 mr-4' icon={menuValue[1]} />
                            <span className='text-sm'>{menuValue[0]}</span>
                        </li>
                    ))}
                </ul>

            </div>
            <div onClick={() => setProfileModal(true)} className="mt-auto p-4 flex text-sm relative">
                        <Image src={User} alt='' className=" rounded-full" />
                        <span className="ml-2 flex flex-col justify-center">
                            <p className="font-bold">{session?.user?.firstname} {session?.user.lastname}</p>
                            <p className='text-xs text-gray-500'>{session?.user?.email}</p>
                        </span>
                {showProfileModal && (
                        <div className="absolute left-0 w-full h-full top-0 bg-white after:contents-[''] after:bg-white after:w-4 after:h-4 after:absolute after:bottom-0 after:left-[50%] after:-translate-x-full after:translate-y-2 after:rotate-45  translate-y-[-117%]  flex-col items-center">
                            <span className="flex items-center text-gray-700 p-2 gap-2">
                                <FontAwesomeIcon icon={faGear} />
                                <p>Profil szerkesztése</p>
                            </span>
                            <span className="flex items-center text-red-700 p-2 gap-2">
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                <p>Kijelentkezés</p>
                            </span>
                        </div>
                    )}
            </div>
        </aside>
    );
}

export default SideBar
