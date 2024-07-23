"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faFile } from '@fortawesome/free-solid-svg-icons';
import React, { FormEvent, MouseEvent, ReactNode, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';


type LayoutProps = {
    children: ReactNode;
};

const layout: React.FC<LayoutProps> = ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState<number>(1)
    const createPages : any = [
        ["personal", 1],
        ["experience", 2],
        ["theme", 3]
    ]

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathname = usePathname();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        createPages.forEach((element: any[]) => {
            if (pathname?.includes(element[0])) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                setCurrentPage(element[1])
                console.log(element[0])
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

   
    const changeCurrentPage = (e: MouseEvent<HTMLButtonElement>, nextPage: number) => {
        router.push(createPages[nextPage - 1][0])
    }

    return (
        <>
            <div className="w-1/2 h-full py-2 mx-auto items-center px-16 relative">
                <div className={`after:transition-all after:duration-300 mx-auto w-3/4 h-2 bg-gray-100 z-[10] relative mt-6 mb-6 after:content-[''] ${currentPage === 1 ? 'after:w-3/12': currentPage === 2 ? 'after:w-6/12': 'after:w-full'} after:bg-primary after:mx-auto after:h-2 after:absolute after:z-[-1]`}>
                    <button onClick={(e) => changeCurrentPage(e, 1)} className="cursor-pointer absolute left-[-2px] bg-primary rounded-full h-10 w-10 top-[50%] translate-y-[-50%] flex items-center justify-center ">
                        <FontAwesomeIcon icon={faUser} className={`text-gray-400 text-lg ${currentPage > 0 && 'text-white'}`} />
                        <span className={`absolute bottom-[-22px] text-sm text-gray-500 ${currentPage === 1 && 'text-primary'}`}>Személyes</span>
                    </button>
                    <button onClick={(e) => changeCurrentPage(e, 2)} className={`cursor-pointer absolute left-[50%] bg-gray-100 rounded-full h-10 w-10 top-[50%] translate-y-[-50%] flex items-center justify-center translate-x-[-50%] ${currentPage > 1 && 'bg-primary'}`}>
                        <FontAwesomeIcon icon={faBriefcase} className={`text-gray-400 text-lg ${currentPage > 1 && 'text-white'}`} />
                        <span className={`absolute bottom-[-22px] text-sm text-gray-500 ${currentPage === 2 && 'text-primary'}`}>Tapasztalatok</span>
                    </button>
                    <button onClick={(e) => changeCurrentPage(e, 3)} className={`cursor-pointer absolute right-0 bg-gray-100 rounded-full h-10 w-10 top-[50%] translate-y-[-50%] flex items-center justify-center ${currentPage > 2 && 'bg-primary'}`}>
                        <FontAwesomeIcon icon={faFile} className={`text-gray-400 text-lg ${currentPage > 2 && 'text-white'}`} />
                        <span className={`absolute bottom-[-22px] text-sm text-gray-500 ${currentPage === 3 && 'text-primary'}`}>Minta</span>
                    </button>
                </div>
            </div>
            {children}
        </>
    )
}

export default layout
