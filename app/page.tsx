"use client";

import Image from "next/image";
import backgroundImage from "../public/bg_image1.jpg";
import avatar1 from "../public/user-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles, faPalette, faLayerGroup, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { useSession } from "next-auth/react";

export default function Home() {
    const informationTable: any = [
        ["Gyors és egyszerű", "Készítse el az önéletrajzát pár egyszerű kérdésre válaszolva, majd egy ön által tetszőlegesen kiválasztott minta által pillanatokon belül kész is",faWandMagicSparkles],
        ["Széles választék", "Több mint húsz különböző minta közül kínál választási lehetőséget. Ezenkívül egyszerűen testre szabhatja az önéletrajza fő profiljának a színét is.", faPalette],
        ["Mentett önéletrajzok", "Az alkalmazásunk elmenti és eltárolja az önéletrajzait, később szerkesztheti azokat, egyszerre akár több önéletrajzot elmenthet", faLayerGroup]
    ]

    const ratingTable: any = [
        ["Dávid", 5, "Amikor kipróbáltam ezt az oldalt voltak kétségeim, hogy hogyan fogok tudni ilyen szép összeszedett önéletrajzokat csinálni, de pár kérdésre válaszoltam, kiválasztottam a nekem tetsző színt és gyakorlatilag készhez kaptam az önéletrajzomat 10 perc alatt. Csak ajánlani tudom."],
        ["Andrea", 5, "Amikor kipróbáltam ezt az oldalt voltak kétségeim, hogy hogyan fogok tudni ilyen szép összeszedett önéletrajzokat csinálni, de pár kérdésre válaszoltam, kiválasztottam a nekem tetsző színt és gyakorlatilag készhez kaptam az önéletrajzomat 10 perc alatt. Csak ajánlani tudom."],
        ["Ábel", 5, "Amikor kipróbáltam ezt az oldalt voltak kétségeim, hogy hogyan fogok tudni ilyen szép összeszedett önéletrajzokat csinálni, de pár kérdésre válaszoltam, kiválasztottam a nekem tetsző színt és gyakorlatilag készhez kaptam az önéletrajzomat 10 perc alatt. Csak ajánlani tudom."],
    
    ]

    return (
        <main className="h-screen">
            <section className="h-full">
                <div className="flex items-center jusitfy-center h-2/3 bg-center overflow-y-hidden relative"> 
                    <Image className="h-full object-none object-center absolute z-0" src={backgroundImage} alt="" />
                    <div className="absolute bg-black/20 backdrop-blur-sm left-0 top-0 w-full h-full z-10"></div>

                    <div className="relative z-10 m-auto flex items-center justify-center flex-col">
                        <h1 className="text-4xl text-white [text-shadow:2px_2px_0px_rgb(0_0_0)]">Készítsd el te is a saját önéletrajzod</h1>
                        <h1 className="text-4xl text-white [text-shadow:2px_2px_0px_rgb(0_0_0)]">az <span className="text-primary">EasyCV</span> segítségével</h1>

                        <Link href="/app/dashboard/" className="bg-primary rounded-[20px] p-2 px-6 mt-6 text-white font-semibold">Önéletrajz készítés</Link>
                    </div>
                </div>
                <div className="w-[50%] mx-auto grid grid-cols-3 h-1/3 items-center gap-12">
                    {informationTable.map((informationValue: any, informationIndex: number) =>
                        <div key={informationIndex} className="flex flex-col items-center text-center">
                            <FontAwesomeIcon className="w-12 h-12 text-primary" icon={informationValue[2]} />
                            <h1 className="text-lg text-black font-bold mt-4 border-b-primary border-b-2">{informationValue[0]}</h1>
                            <p className="text-sm text-gray-500 mt-6">{informationValue[1]}</p>
                        </div>
                    )}
                </div>
            </section>
            <section className="h-screen flex justify-center items-center bg-[#fafafa] flex-col">
                <h1 className="text-4xl font-semibold text-black border-b-4 border-primary">
                    Pár értékelés rólunk
                </h1>
                <div className="grid grid-cols-3 items-center justify-center gap-12 w-1/2 mx-auto mt-20">
                    {ratingTable.map((ratingValue: any, ratingIndex: number) => 
                        <div key={ratingIndex} className="shadow-lg border rounded-[10px] p-4">
                            <div className="flex h-16 mb-2">
                                <Image className="rounded-full w-16 h-16 mb-4" src={avatar1} alt=""/>
                                <div className="flex flex-col ml-2 my-auto">
                                    <span className="text-lg font-semibold">
                                        {ratingValue[0]}
                                    </span>
                                    <span className="flex">
                                        {[...Array(ratingValue[1])].map((v, i) => 
                                            <FontAwesomeIcon className="w-4 h-4 text-primary" key={i} icon={faStar} />
                                        )}
                                    </span>
                                        
                                </div>                    
                            </div>
                                
                            <p className="text-base text-gray-500 leading-6">{ratingValue[2]}</p>
                        </div>
                    )}
                </div>
            </section>     
        </main>
    );
}
