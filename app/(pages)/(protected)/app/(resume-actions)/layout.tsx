"use client"

import Image from 'next/image';
import React, { FormEvent, ReactNode, useEffect, useRef, useState } from 'react';
import LogoSVG from "@/public/logo.svg"
import User from "@/public/usrbg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import CreateProvider from '@/app/providers/CreateProvider';

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
    
    const handleCVsClick = (e: FormEvent<HTMLFormElement>) => {
    }

    return (
        <CreateProvider>
            <section  className="z-0">
                <header className="w-full sticky left-0 z-50 top-0 bg-white/40 backdrop-blur-sm border-b border-black/40 h-[8vh] p-4 grid grid-cols-12 items-center justify-between">
                    <Link href={"/app/dashboard"}  className="col-span-1 text-black/60 bg-inherit rounded-[20px] border border-black/30 p-2 px-4 font-bold hover:bg-black/10 transition"><FontAwesomeIcon icon={faChevronLeft} /> Önéletrajzok</Link>
                    <div className="flex justify-center col-span-10">
                        <input ref={inputRef} value={inputText} onChange={changeText} type="text" placeholder="Név" className="col-span-10 flex items-center justify-center w-8 bg-black/0 hover:border-b focus:border-b hover:border-black/30 focus:border-primary outline-none" />
                    </div> 
                    <button className="bg-primary rounded-[20px] p-2 px-4 font-bold text-white col-span-1">Mentés</button>
                </header>
                {children}
            </section>
        </CreateProvider>
    );
};

export default Layout;