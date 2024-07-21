"use client"

import SideBar from '@/app/components/SideBar';
import Image from 'next/image';
import React, { FormEvent, ReactNode, useState } from 'react';


type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='flex'>
            <SideBar />
            <main>
                {children}
            </main>

        </div>
    );
};

export default Layout;