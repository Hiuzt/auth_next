"use client"

import { faEnvelope, faLock, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "@/styles/globals.css";
import { useFormState } from "react-dom";
import { signIn } from "next-auth/react";
import { FormEvent, useRef } from "react";

export default function Page() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(emailRef?.current?.value)


        const signInResult = signIn("credentials",
        {
            email:  emailRef?.current?.value,
            password: passwordRef?.current?.value,
        })
        
        console.log(signInResult)
        
    }

    return (
        <main className="bg-[#272A37] w-full h-screen flex items-center">
            <div className="w-1/3 px-2 pl-20 flex flex-col justify-center gap-4">
                <h2 className="text-xl text-gray-400 uppercase">Készítd el az önéletrajzod</h2>
                <h1 className="text-5xl text-white">Jelentkezz be<span className="text-primary">.</span></h1>
                <h3 className="text-base text-gray-400">Nincs felhasználód? <Link href={"/auth/register"} className="text-primary">Regisztráció</Link></h3>

                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mt-8">


                    <div className="col-span-2 w-full bg-[#323644] text-white/50 rounded-[20px] overflow-hidden pl-6 p-2 flex items-center border-2 border-[#323644] transition focus-within:border-primary">
                        <div className="flex flex-col-reverse w-full">
                            <input ref={emailRef} name="email" id="email" className="peer group bg-inherit w-full outline-none text-white placeholder:text-sm" placeholder="Írj valamit..." type="text" />
                            <label className="text-sm peer-focus:text-primary" htmlFor="email">E-Mail cím</label>
                        </div>

                        <FontAwesomeIcon className="ml-auto mr-4 w-4 h-4" icon={faEnvelope} />
                    </div>

                    <div className="col-span-2 bg-[#323644] text-white/50 rounded-[20px] overflow-hidden pl-6 p-2 flex items-center border-2 border-[#323644] transition focus-within:border-primary">
                        <div className="flex flex-col-reverse w-full">
                            <input ref={passwordRef} name="password" id="password" className="peer group bg-inherit w-full outline-none text-white placeholder:text-sm" placeholder="Írj valamit..." type="text" />
                            <label className="text-sm peer-focus:text-primary" htmlFor="password">Jelszó</label>
                        </div>

                        <FontAwesomeIcon className="ml-auto mr-4 w-4 h-4" icon={faLock} />
                    </div>


                    <div className="col-span-1 col-start-2 bg-primary text-white rounded-[20px] overflow-hidden pl-6 p-2 flex items-center border-2 border-[#323644] transition focus-within:border-primary">
                        <input  type="submit" value={"Regisztráció"} />
                        <FontAwesomeIcon className="ml-auto mr-4 w-4 h-4" icon={faRightToBracket} />
                    </div>
                </form>
            </div>
        </main>
    )
} 