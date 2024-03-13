"use client"

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faEnvelope, faLock, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useRef } from "react";
import axios from "axios";
import { ZodError, z } from "zod";
import bcrypt from 'bcrypt';



export default function Page() {
    const emailRef = useRef<HTMLInputElement>(null)
    const firstnameRef = useRef<HTMLInputElement>(null)
    const lastnameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const password2Ref = useRef<HTMLInputElement>(null)

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validateData() // Jelszó megerősítés

        let userData = {
            email: emailRef.current!.value,
            firstname: firstnameRef.current!.value,
            lastname: lastnameRef.current!.value,
            password: passwordRef.current!.value,
        }
        
        if (userData.password !== password2Ref.current?.value) {
            return console.log(" A két jelszó nem eggyezik")
        }

        

        axios.post("/api/auth/register/", userData)
    }

    const validateData = () => {
        const emailSchema = z.string().email({ message: "Nem jó E-mail címet adtál meg!" })
        const firstnameSchema = z.string().min(1)
        const lastnameSchema = z.string().min(1)
        const passwordSchema = z.string().min(8, "Jelszónak minimum 8 karakterből kell állnia!").max(50, "A jelszó nem lehet több mint 50 karakter").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'A jelszónak minimum tartalmaznia kell egy kis-, nagy betűt, számot illetve egy speciális karaktert.');



        try {
            emailSchema.parse(emailRef.current?.value);
            firstnameSchema.parse(firstnameRef.current?.value)
            lastnameSchema.parse(lastnameRef.current?.value);
            passwordSchema.parse(passwordRef.current?.value)

        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessage = error.errors[0].message; // Get the message from the first error
                console.error('Email is not valid:', errorMessage);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    }

    return (
        <main className="bg-[#272A37] w-full h-screen flex items-center">
            <div className="w-2/5 px-2 pl-20 flex flex-col justify-center gap-4">
                <h2 className="text-xl text-gray-400 uppercase">Készítsd el az önéletrajzod</h2>
                <h1 className="text-5xl text-white">Új felhasználó létrehozása<span className="text-primary">.</span></h1>
                <h3 className="text-base text-gray-400">Már regisztrált? <Link href={"/auth/login"} className="text-primary">Bejelentkezés</Link></h3>

                <form onSubmit={handleRegister} className="grid grid-cols-2 gap-6 mt-8">
                    <div className="col-span-1 bg-[#323644] text-white/50 rounded-[20px] overflow-hidden pl-6 p-2 flex items-center border-2 border-[#323644] transition focus-within:border-primary">
                        <div className="flex flex-col-reverse w-full">
                            <input ref={firstnameRef} id="firstname" className="peer group bg-inherit w-full outline-none text-white placeholder:text-sm" placeholder="Írj valamit..." type="text" />
                            <label className="text-sm peer-focus:text-primary" htmlFor="firstname">Vezetéknév</label>
                        </div>

                        <FontAwesomeIcon className="ml-auto mr-4 w-6 h-6" icon={faAddressCard} />
                    </div>

                    <div className="col-span-1 bg-[#323644] text-white/50 rounded-[20px] overflow-hidden pl-6 p-2 flex items-center border-2 border-[#323644] transition focus-within:border-primary">
                        <div className="flex flex-col-reverse w-full">
                            <input ref={lastnameRef} id="surname" className="peer group bg-inherit w-full outline-none text-white placeholder:text-sm" placeholder="Írj valamit..." type="text" />
                            <label className="text-sm peer-focus:text-primary" htmlFor="surname">Keresztnév</label>
                        </div>

                        <FontAwesomeIcon className="ml-auto mr-4 w-6 h-6" icon={faAddressCard} />
                    </div>

                    <div className="col-span-2 w-full bg-[#323644] text-white/50 rounded-[20px] overflow-hidden pl-6 p-2 flex items-center border-2 border-[#323644] transition focus-within:border-primary">
                        <div className="flex flex-col-reverse w-full">
                            <input ref={emailRef} id="email" className="peer group bg-inherit w-full outline-none text-white placeholder:text-sm" placeholder="Írj valamit..." type="text" />
                            <label className="text-sm peer-focus:text-primary" htmlFor="email">E-Mail cím</label>
                        </div>

                        <FontAwesomeIcon className="ml-auto mr-4 w-4 h-4" icon={faEnvelope} />
                    </div>

                    <div className="col-span-1 bg-[#323644] text-white/50 rounded-[20px] overflow-hidden pl-6 p-2 flex items-center border-2 border-[#323644] transition focus-within:border-primary">
                        <div className="flex flex-col-reverse w-full">
                            <input ref={passwordRef} id="password" className="peer group bg-inherit w-full outline-none text-white placeholder:text-sm" placeholder="Írj valamit..." type="text" />
                            <label className="text-sm peer-focus:text-primary" htmlFor="password">Jelszó</label>
                        </div>

                        <FontAwesomeIcon className="ml-auto mr-4 w-4 h-4" icon={faLock} />
                    </div>

                    <div className="col-span-1 bg-[#323644] text-white/50 rounded-[20px] overflow-hidden pl-6 p-2 flex items-center border-2 border-[#323644] transition focus-within:border-primary">
                        <div className="flex flex-col-reverse w-full">
                            <input ref={password2Ref} id="password2" className="peer group bg-inherit w-full outline-none text-white placeholder:text-sm" placeholder="Írj valamit..." type="text" />
                            <label className="text-sm peer-focus:text-primary" htmlFor="password2">Jelszó megerősítése</label>
                        </div>

                        <FontAwesomeIcon className="ml-auto mr-4 w-4 h-4" icon={faLock} />
                    </div>

                    <div className="col-span-1 col-start-2 bg-primary text-white rounded-[20px] overflow-hidden pl-6 p-2 flex items-center border-2 border-[#323644] transition focus-within:border-primary">
                        <input type="submit" value={"Bejelentkezés"} />
                        <FontAwesomeIcon className="ml-auto mr-4 w-4 h-4" icon={faRightToBracket} />
                    </div>
                </form>
            </div>
        </main>
    )
} 