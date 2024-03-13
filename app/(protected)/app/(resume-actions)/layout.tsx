"use client"

import Image from 'next/image';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import LogoSVG from "@/public/logo.svg"
import User from "@/public/usrbg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useSession } from 'next-auth/react';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { data: session, status } = useSession()
    const [inputText, setInputText] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)


    const changeText = () => {
        if (inputRef.current) {
            inputRef.current.style.width = '30px'
            const textWidth = inputRef.current.scrollWidth;
            inputRef.current.style.width = `${textWidth}px`;
            setInputText(inputRef.current.value)
        }
            
    }
    

    return (
        <section  className="">
            <header className="w-full bg-white border-b border-black/40 h-[8vh] p-4 flex items-center">
                <div className="text-gray-600 mr-auto">
                    <button className="bg-inherit rounded-[20px] border border-black/30 p-2 px-4 font-bold hover:bg-black/10 transition"><FontAwesomeIcon icon={faChevronLeft} /> Önéletrajzok</button>
                </div>
                <div className="flex w-fit font-bold ml-auto mr-auto">
                    <input ref={inputRef} value={inputText} onChange={changeText} type="text" placeholder="Név" className="mx-auto w-8 hover:border-b focus:border-b hover:border-black/30 focus:border-primary outline-none" />
                </div>
                <div className="ml-auto">
                    <button className="bg-primary rounded-[20px] p-2 px-4 font-bold text-white">Mentés</button>
                </div>
            </header>
            {children}
        </section>
    );
};

export default Layout;